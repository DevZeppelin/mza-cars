import React from 'react'

const CarPhoto = ({src}) => {
  return (
    <img
          className="shadow-xl border-2 border-primary w-full"
          src={src}
          alt="auto image car mza-cars"
        />
  )
}

export default CarPhoto