import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Error from '../components/Error'
import Spinner from '../components/Spinner'

const VerCliente = () => {
    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(false)

    const { id } = useParams()
    useEffect(() => {
        setCargando(!cargando)
        const obtenerClienteAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)
            } catch (error) {
                console.log(error)
            }
            setTimeout(() => {
                setCargando(false)
            }, 1000)
        }
        obtenerClienteAPI()
    }, [])
    return (
        <div>
            {cargando ? (
                <Spinner />
            ) : Object.keys(cliente).length === 0 ? (
                <Error>El cliente no existe</Error>
            ) : (
                <>
                    <h1 className='font-black text-4xl text-gray-700'>
                        Cliente: {cliente.nombre}
                    </h1>
                    <p className='text-gray-500'>Información del cliente</p>
                    <p className='text-2xl text-gray-600 mt-10'>
                        <span className=' uppercase text-gray-800 font-bold'>
                            Cliente
                        </span>
                        : {cliente.nombre}
                    </p>
                    <p className='text-2xl mt-4 text-gray-600'>
                        <span className=' uppercase text-gray-800 font-bold'>
                            E-mail
                        </span>
                        : {cliente.email}
                    </p>
                    <p className='text-2xl mt-4 text-gray-600'>
                        <span className=' uppercase text-gray-800 font-bold'>
                            Teléfono
                        </span>
                        : {cliente.telefono}
                    </p>
                    <p className='text-2xl mt-4 text-gray-600'>
                        <span className=' uppercase text-gray-800 font-bold'>
                            Empresa
                        </span>
                        : {cliente.empresa}
                    </p>
                    <p className='text-2xl mt-4 text-gray-600'>
                        <span className=' uppercase text-gray-800 font-bold'>
                            Notas
                        </span>
                        : {cliente.notas}
                    </p>
                </>
            )}
        </div>
    )
}

export default VerCliente
