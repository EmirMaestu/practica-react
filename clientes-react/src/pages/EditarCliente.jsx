import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'

const EditarCliente = () => {
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
            <h1 className='font-black text-4xl text-gray-700'>
                Editar Cliente
            </h1>
            <p className='text-gray-500'>
                Llena los siguientes campos para editar un cliente
            </p>
            {cliente?.nombre ? (
                <Formulario cliente={cliente} cargando={cargando} />
            ) : (
                <Error>ID del cliente inválido</Error>
            )}
        </div>
    )
}

export default EditarCliente
