import React from 'react'
import Formulario from '../components/Formulario'

const NuevoCliente = () => {
    return (
        <>
            <h1 className='font-black text-4xl text-gray-700'>Nuevo Cliente</h1>
            <p className='text-gray-500'>Llena los siguientes campos para registrar un cliente</p>
            <Formulario />
        </>
    )
}

export default NuevoCliente
