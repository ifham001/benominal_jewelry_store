"use client"
import Button from '@/ui/button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function CheckoutForm({onContinue}) {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      apartment: '',
      city: '',
      pincode: '',
      countryCode: '+91',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Enter a valid 10-digit number')
        .required('Required'),
      address: Yup.string().required('Required'),
      pincode: Yup.string()
        .matches(/^[0-9]{6}$/, 'Enter a valid 6-digit pincode')
        .required('Required'),
        city: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      onContinue(values)
    },
  });

  return (
    <div className="max-w-xl mx-auto p-4 sm:p-6">
      <h1 className="text-3xl font-semibold text-green-900 mb-6">Checkout</h1>
      <h2 className="text-xl font-bold text-green-900 mb-4">Shipping details</h2>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              name="firstName"
              type="text"
              placeholder="First name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="w-full rounded-full border px-4 py-2 outline-none border-gray-300 focus:ring-2 focus:ring-green-600"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
            )}
          </div>
          <div className="flex-1">
            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="w-full rounded-full border px-4 py-2 outline-none border-gray-300 focus:ring-2 focus:ring-green-600"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
            )}
          </div>
        </div>

        <div>
          <input
            name="email"
            type="email"
            placeholder="Email name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full rounded-full border px-4 py-2 outline-none border-gray-300 focus:ring-2 focus:ring-green-600"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
          )}
        </div>

        <div className="flex gap-4">
          <select
            name="countryCode"
            value={formik.values.countryCode}
            onChange={formik.handleChange}
            className="rounded-full border px-4 py-2 border-gray-300 outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
          </select>
          <div className="flex-1">
            <input
              name="phone"
              type="tel"
              placeholder="Phone number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className="w-full rounded-full border px-4 py-2 outline-none border-gray-300 focus:ring-2 focus:ring-green-600"
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
            )}
          </div>
        </div>

        <div>
          <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className="w-full rounded-full border px-4 py-2 outline-none border-gray-300 focus:ring-2 focus:ring-green-600"
          />
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.address}</div>
          )}
        </div>

        <input
          name="apartment"
          type="text"
          placeholder="Apartment, suite, etc ( optional )"
          onChange={formik.handleChange}
          value={formik.values.apartment}
          className="w-full rounded-full border px-4 py-2 outline-none border-gray-300 focus:ring-2 focus:ring-green-600"
        />

        <input
          name="city"
          type="text"
          placeholder="City"
          onChange={formik.handleChange}
          value={formik.values.city}
          className="w-full rounded-full border px-4 py-2 outline-none border-gray-300 focus:ring-2 focus:ring-green-600"
        />

        <div>
          <input
            name="pincode"
            type="text"
            placeholder="Pincode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pincode}
            className="w-full rounded-full border px-4 py-2 outline-none border-gray-300 focus:ring-2 focus:ring-green-600"
          />
          {formik.touched.pincode && formik.errors.pincode && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.pincode}</div>
          )}
        </div>

        <Button
          type="submit"
          className="w-full  hover:bg-green-800 text-white py-2 px-6 rounded-full transition duration-200"
        >
          Continue to payment
        </Button>
      </form>
    </div>
  );
}

