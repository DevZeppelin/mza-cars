import Link from 'next/link'
import React from 'react'

const CustomButton = ({ text, href }) => {
    return (
        <div
            className='uppercase border-2 border-primary p-3 md:p-6 rounded-xl bg-gradient-to-b from-liveColor to-secundary font-black cursor-pointer'>
            <Link href={href}>
                {text}
            </Link>
        </div>
    )
}

export default CustomButton