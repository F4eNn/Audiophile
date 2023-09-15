import * as yup from 'yup';
import isEmail from 'validator/lib/isEmail';

export const schema = yup.object({
	name: yup.string().trim().required('Name is required').min(3, 'Min. 3 characters'),
	email: yup
		.string()
		.required('Email is required')
		.test('Wrong format', value => {
			if (!value) return;
			return isEmail(value);
		}),
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

	eMoneyNumber: yup.mixed().test('is-9-digits', 'Must contains exacly 9 digits', (value, context) => {
		if (context.options.context && !context.options.context.isPayOnline) return true;
		if (!value) return false;
		const stringValue = value.toString();
		return stringValue.length === 9;
	}) as any,
	eMoneyPin: yup.mixed().test('is-4-digits', 'must contains exacly 4 digits', (value, context) => {
		if (context.options.context && !context.options.context.isPayOnline) return true;
		if (!value) return false;
		const stringValue = value.toString();
		return stringValue.length === 4;
	}) as any,
});