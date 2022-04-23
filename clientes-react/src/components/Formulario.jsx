import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alerta from './Alerta'
import Spinner from './Spinner'

const Formulario = ({ cliente, cargando }) => {
    const navigate = useNavigate()

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
            .min(1, 'El Nombre es muy corto')
            .max(20, 'El Nombre es muy largo')
            .required('El nombre del Cliente es obligatorio'),
        empresa: Yup.string().required(
            'El nombre de la empresa es obligatorio'
        ),
        email: Yup.string()
            .email('Email no válido')
            .required('El email es obligatorio'),
        telefono: Yup.number()
            .integer('Número no válido')
            .positive('Número no válido')
            .required('El teléfono es obligatorio'),
        notas: Yup.string().required('Las notas son obligatoriorias'),
    })

    const handleSubmit = async values => {
        try {
            let respuesta
            if (cliente.id) {
                const url = `http://localhost:4000/clientes/${cliente.id}`
                respuesta = await fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
            } else {
                const url = 'http://localhost:4000/clientes'
                respuesta = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
            }
            await respuesta.json()
            navigate('/clientes')
        } catch (error) {
            console.log(error)
        }
    }

    return cargando ? (
        <Spinner />
    ) : (
        <div className='bg-white mt-10 px-5 py-10 rounded-lg shadow-lg md:w-3/4 mx-auto'>
            <h1 className='text-gray-500 font-bold text-xl uppercase text-center'>
                {cliente?.nombre ? 'Editar Cliente' : 'Agregar Cliente'}
            </h1>
            <Formik
                initialValues={{
                    nombre: cliente?.nombre ?? '',
                    empresa: cliente?.empresa ?? '',
                    email: cliente?.email ?? '',
                    telefono: cliente?.telefono ?? '',
                    notas: cliente?.notas ?? '',
                }}
                enableReinitialize={true}
                onSubmit={async (values, { resetForm }) => {
                    await handleSubmit(values)
                    resetForm()
                }}
                validationSchema={nuevoClienteSchema}>
                {({ errors, touched }) => {
                    return (
                        <Form className='mt-10'>
                            <div className='mb-4'>
                                {errors.nombre && touched.nombre ? (
                                    <Alerta>{errors.nombre}</Alerta>
                                ) : null}
                                <label
                                    className='text-gray-700 font-semibold'
                                    htmlFor='nombre'>
                                    Nombre:{' '}
                                </label>
                                <Field
                                    type='text'
                                    className='mt-2 block w-full p-3 bg-gray-100'
                                    id='nombre'
                                    placeholder='Nombre del cliente'
                                    name='nombre'
                                />
                            </div>

                            <div className='mb-4'>
                                {errors.empresa && touched.empresa ? (
                                    <Alerta>{errors.empresa}</Alerta>
                                ) : null}
                                <label
                                    className='text-gray-700 font-semibold'
                                    htmlFor='empresa'>
                                    Empresa:{' '}
                                </label>
                                <Field
                                    id='empresa'
                                    type='text'
                                    className='mt-2 block w-full p-3 bg-gray-100'
                                    placeholder='Empresa del cliente'
                                    name='empresa'
                                />
                            </div>

                            <div className='mb-4'>
                                {errors.email && touched.email ? (
                                    <Alerta>{errors.email}</Alerta>
                                ) : null}
                                <label
                                    className='text-gray-700 font-semibold'
                                    htmlFor='email'>
                                    E-mail:{' '}
                                </label>
                                <Field
                                    id='email'
                                    type='email'
                                    className='mt-2 block w-full p-3 bg-gray-100'
                                    placeholder='Email cliente'
                                    name='email'
                                />
                            </div>

                            <div className='mb-4'>
                                {errors.telefono && touched.telefono ? (
                                    <Alerta>{errors.telefono}</Alerta>
                                ) : null}
                                <label
                                    className='text-gray-700 font-semibold'
                                    htmlFor='telefono'>
                                    Teléfono:{' '}
                                </label>
                                <Field
                                    id='telefono'
                                    type='tel'
                                    className='mt-2 block w-full p-3 bg-gray-100'
                                    placeholder='Teléfono del cliente'
                                    name='telefono'
                                />
                            </div>

                            <div className='mb-4'>
                                {errors.notas && touched.notas ? (
                                    <Alerta>{errors.notas}</Alerta>
                                ) : null}
                                <label
                                    className='text-gray-700 font-semibold'
                                    htmlFor='notas'>
                                    Notas:{' '}
                                </label>
                                <Field
                                    as='textarea'
                                    id='telefono'
                                    type='text'
                                    className='mt-2 block w-full p-3 bg-gray-100 h-40'
                                    placeholder='Notas del cliente'
                                    name='notas'
                                />
                            </div>
                            <input
                                type='submit'
                                className='mt-5 w-full bg-gray-800 p-3 text-white uppercase font-bold text-lg focus:cursor-pointer'
                                value={
                                    cliente?.nombre
                                        ? 'Editar Cliente'
                                        : 'Agregar Cliente'
                                }
                            />
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

Formulario.defaultProps = {
    cliente: {},
    cargando: false,
}

export default Formulario
