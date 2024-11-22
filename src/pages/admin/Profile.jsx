import { Tooltip } from "antd";
import { Switch } from 'antd';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";

import { CiEdit } from "react-icons/ci";

import countries from "../../data/countries";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export const Profile = () => {

	const validationSchema = Yup.object().shape({
		avatar: Yup.string(),
		name: Yup.string().required("El nombre es requerido"),
		lastName: Yup.string().required("El apellido es requerido"),
		company: Yup.string(),
		phone: Yup.string()
			.required("El número de teléfono es requerido"),
		website: Yup.string(),
		country: Yup.string(),
		commnucation: Yup.string(),
		notifications: Yup.boolean()
	})

	const customizedSubmit = (values) => {
		console.log(values)
	}

	return (
		<>
			<Breadcrumbs title="Account" pagina="Account Settings" />
			<div className="bg-secondary-100 p-4 rounded-t-xl border border-secondary-200">
				<h1 className="text-xl font-bold">Profile Details</h1>
			</div>
			<div>
				<Formik
					onSubmit={customizedSubmit}
					initialValues={{}}
					validationSchema={validationSchema}
				>
					{({
						values,
						handleChange,
						handleSubmit,
						isSubmitting,
						handleBlur,
						setFieldValue,
						resetForm,
					}) => {
						return (
							<form onSubmit={handleSubmit} className="bg-secondary-100 p-4 rounded-b-xl border-r border-l border-b border-secondary-200 flex flex-col gap-4">
								<div className="flex sm:flex-row flex-col gap-y-4 ">
									<div className="w-1/4">
										<p htmlFor="" className="text-md">
											Avatar
										</p>
									</div>
									<div className="flex-1">
										<div className="relative">
											<img
												src={values.avatar ? URL.createObjectURL(values.avatar) : "https://rickandmortyapi.com/api/character/avatar/336.jpeg"}
												alt="avatar"
												className="w-32 h-32 rounded-lg ring-1 ring-primary mb-2 object-cover"
											/>
											<span className="text-xs text-gray-500">
												Allowed file types: png, jpg, jpeg.
											</span>

											<label htmlFor="avatar" className="absolute -top-2 left-28 text-gray-500 bg-secondary-100 rounded-full hover:text-primary hover:cursor-pointer">
												<Tooltip
													placement="top"
													title={"Change avatar"}
													color="#131517"
													overlayInnerStyle={{ color: "#9a9cae" }}
												>
													<div>
														<CiEdit className="w-6 h-6 p-1" />
													</div>
												</Tooltip>
											</label>
											<input type="file" id="avatar" className="hidden" name="avatar" onChange={(e) => setFieldValue('avatar', e.target.files[0])} />
										</div>
									</div>
								</div>
								<div className="flex sm:flex-row flex-col gap-y-4">
									<div className="sm:w-1/4">
										<p>Full Name</p>
									</div>
									<div className="flex-1 flex flex-col md:flex-row gap-4 justify-between ">
										<div className="flex flex-col w-full">
											<input
												type="text"
												name="name"
												placeholder="Name"
												onBlur={handleBlur}
												onChange={handleChange}
												defaultValue={values.name}
												className="py-2 px-4 rounded-lg w-full bg-secondary-900 outline-none " />
											<ErrorMessage name="name" component="small" className="text-red-500" />
										</div>
										<div className="w-full">
											<input
												type="text"
												name="lastName"
												placeholder="Last Name"
												onBlur={handleBlur}
												onChange={handleChange}
												defaultValue={values.lastName}
												className="py-2 px-4 rounded-lg w-full bg-secondary-900 outline-none" />
											<ErrorMessage name="lastName" component="small" className="text-red-500" />
										</div>
									</div>
								</div>
								<div className="flex sm:flex-row flex-col gap-y-4">
									<div className="w-1/4">
										<p>Company</p>
									</div>
									<div className="flex-1 mb-2 gap-4">
										<input
											type="text"
											name="company"
											placeholder="Company"
											onChange={handleChange}
											defaultValue={values.company}
											className="py-2 px-4 rounded-lg w-full bg-secondary-900 outline-none" />
									</div>
								</div>
								<div className="flex sm:flex-row flex-col gap-y-4">
									<div className="sm:w-1/4">
										<p>Contact Phone</p>
									</div>
									<div className="flex-1 mb-2 gap-4">
										<PhoneInput
											country="co"
											type="number"
											name="phone"
											placeholder="Phone"
											onBlur={handleBlur}
											onChange={(phone) => setFieldValue('phone', phone)}
											defaultValue={values.phone}
											inputProps={{ name: 'phone', required: true }}
											inputStyle={{
												width: '100%',
												paddingTop: '20px',
												paddingBottom: '20px', // Tailwind: rounded-lg
												backgroundColor: '#131517', // Color de fondo
												color: '#d1d5db', // Color del texto
												border: 'none', // Color del borde
												borderRadius: '8px',
											}}
											buttonStyle={{
												backgroundColor: '#131517',
												border: 'none',
												borderRadius: '8px',
											}}
											dropdownStyle={{
												backgroundColor: '#131517',
												border: '1px solid #2e2f37',
												borderRadius: '8px',
											}}

										// className=" py-2 px-4 rounded-lg w-full bg-secondary-900 outline-none" 

										/>
										<ErrorMessage name="phone" component="small" className="text-red-500" />
									</div>
								</div>
								<div className="flex sm:flex-row flex-col gap-y-4">
									<div className="w-1/4">
										<p>Website</p>
									</div>
									<div className="flex-1 mb-2 gap-4">
										<input
											type="text"
											name="website"
											placeholder="Website"
											onChange={handleChange}
											defaultValue={values.website}
											className="py-2 px-4 rounded-lg w-full bg-secondary-900 outline-none" />
									</div>
								</div>
								<div className="flex sm:flex-row flex-col gap-y-4">
									<div className="w-1/4">
										<p>Country</p>
									</div>
									<div className="flex-1 mb-2 gap-4">
										<select
											name="country"
											onChange={handleChange}
											className="py-2 px-4 rounded-lg w-full bg-secondary-900 outline-none text-gray-400 appearance-none">
											<option value="">Select a country...</option>
											{Object.entries(countries).map(([code, name]) => (
												<option key={code} defaultValue={code} className="text-gray-200">
													{name}
												</option>
											))}
										</select>

									</div>
								</div>
								<div className="flex sm:flex-row flex-col gap-y-4">
									<div className="w-1/4">
										<p>Receive Notifications</p>
									</div>
									<div className="flex-1 mb-2 gap-4">
										<Switch
											checked={values.notifications} // Controla el estado del switch
											onChange={(checked) => setFieldValue('notifications', checked)} // Actualiza el valor en Formik
										/>
									</div>
								</div>
								<div className="flex sm:flex-row flex-col gap-y-4">
									<div className="w-1/4">
										<p>Communication</p>
									</div>
									<div className="flex gap-4">
										<label className="flex items-center gap-2">
											<input
												type="checkbox"
												name="communication"
												defaultValue="email"
												onChange={handleChange}
												className="h-5 w-5 "
											/>
											<span className="text-gray-400">Email</span>
										</label>
										<label className="flex items-center gap-2">
											<input
												type="checkbox"
												name="communication"
												defaultValue="phone"
												onChange={handleChange}
												className="h-5 w-5 "
											/>
											<span className="text-gray-400">Phone</span>
										</label>
									</div>
								</div>
								<div className="flex justify-end gap-4 pt-4">
									<button
										type="reset"
										className="bg-secondary-200 text-gray-400 text-sm font-bold py-2 px-4 rounded-lg hover:bg-secondary-200/80"
										onClick={resetForm}
									>
										Discard
									</button>
									<button
										type="submit"
										disabled={isSubmitting}
										className="bg-primary/90 text-secondary-900 text-sm font-bold py-2 px-4 rounded-lg hover:bg-primary"
									>
										Save changes
									</button>
								</div>
							</form>
						)
					}}
				</Formik>
			</div>
		</>
	);
};

