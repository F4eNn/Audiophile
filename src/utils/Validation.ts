import * as yup from 'yup';
import isEmail from 'validator/lib/isEmail';

const basicDataValidation = {
	email: yup
		.string()
		.required('Email is required')
		.test('Wrong format', value => {
			if (!value) return;
			return isEmail(value);
		}),
	name: yup.string().trim().required('Name is required').min(3, 'Min. 3 characters'),
};

export const schemaCheckout = yup.object({
	name: basicDataValidation.name,
	email: basicDataValidation.email,
	phone: yup
		.string()
		.required('phone is required')
		.test(value => {
			const numericValue = value.replace(/\s/g, '');
			const checkNumber = /^\+?[0-9]+$/;
			return checkNumber.test(numericValue) && numericValue.length >= 9;
		}),
	address: yup.string().required('Address is required').trim().min(3, 'min. 3 characters'),
	zipCode: yup
		.string()
		.required('ZIP code is required')
		.trim()
		.matches(/^(\d{2}-\d{3}|\d{5})$/, 'Wrong format'),
	city: yup.string().trim().required('City is required').min(3, 'min. 3 characters'),
	country: yup.string().trim().required('Country is required').min(3, 'min. 3 characters'),

	eMoneyNumber: yup.mixed().test('is-9-digits', 'Must includes 9 digits', (value, context) => {
		if (context.options.context && !context.options.context.isPayOnline) return true;
		if (!value) return false;
		const stringValue = value.toString();
		return stringValue.length === 9;
	}) as any,
	eMoneyPin: yup.mixed().test('is-4-digits', 'must includes 4 digits', (value, context) => {
		if (context.options.context && !context.options.context.isPayOnline) return true;
		if (!value) return false;
		const stringValue = value.toString();
		return stringValue.length === 4;
	}) as any,
});

export const schemaRegister = yup.object({
	name: basicDataValidation.name,
	email: basicDataValidation.email,
	password: yup
		.string()
		.required('password is required')
		.trim()
		.min(7, 'min. 7 characters')
		.matches(/^(?=.*[A-Z])/, 'at least one capital letter')
		.matches(/^(?=.*\d).+$/, 'at leat one number')
		.matches(/^(?=.*[~!@#$%^&*()_=+-])/, 'at least one spcecial sign'),
	confirmationPassword: yup.string().oneOf([yup.ref('password'), undefined], 'passwords must match'),
});
