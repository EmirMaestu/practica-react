import React from 'react'

const Error = ({children}) => {
    return (
        <div className='mt-10 text-center'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-12 w-12 mx-auto text-gray-700'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}>
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
            </svg>
            <span className='text-2xl'>{children}</span>
        </div>
    )
}

export default Error
