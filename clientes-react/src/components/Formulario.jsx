import { Formik, Form, Field } from 'formik'

const Formulario = () => {
    const handleSubmit = values => {
        console.log(values)
    }

    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-lg shadow-lg md:w-3/4 mx-auto'>
            <h1 className='text-gray-500 font-bold text-xl uppercase text-center'>
                Agregar Cliente
            </h1>
            <Formik
                initialValues={{
                    nombre: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: '',
                }}
                onSubmit={values => {
                    handleSubmit(values)
                }}>
                {() => (
                    <Form className='mt-10'>
                        <div className='mb-4'>
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
                            className='mt-5 w-full bg-gray-800 p-3 text-white uppercase font-bold text-lg'
                            value='Agregar Cliente'
                        />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Formulario
