import { useNavigate } from 'react-router-dom'

const Cliente = ({ cliente, handleEliminar }) => {
    const { nombre, empresa, email, telefono, notas, id } = cliente

    const navigate = useNavigate()

    return (
        <tr className='border-b hover:bg-gray-100 text-center'>
            <td className='p-3'>{nombre}</td>
            <td className='p-3'>
                <p>
                    <span className='text-gray-800 uppercase font-bold'>
                        Email:{' '}
                    </span>
                    {email}
                </p>
                <p>
                    <span className='text-gray-800 uppercase font-bold'>
                        Tel:{' '}
                    </span>
                    {telefono}
                </p>
            </td>
            <td className='p-3'>{empresa}</td>
            <td className='p-3'>
                <button
                    className='bg-blue-900 hover:bg-blue-800 transition-colors block w-full text-white p-2 mt-3 rounded uppercase text-xs'
                    type='button'
                    onClick={() => navigate(`/clientes/${id}`)}>
                    Ver
                </button>
                <button
                    className='bg-gray-700 hover:bg-gray-600 block w-full text-white p-2 mt-3 rounded uppercase text-xs'
                    type='button'
                    onClick={() => navigate(`/clientes/editar/${id}`)}>
                    Editar
                </button>
                <button
                    className='bg-red-500 hover:bg-red-600 transition-colors block w-full text-white p-2 mt-3 rounded uppercase text-xs'
                    type='button'
                    onClick={() => handleEliminar(id)}>
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Cliente
