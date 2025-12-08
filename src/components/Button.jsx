import React from 'react'

function Button({ name }) {
    // console.log(name);
  return (
    <button className='p-2 mx-1 my-4 font-semibold text-xs bg-gray-200 rounded-lg whitespace-nowrap'>{name}</button>
  )
}

export default Button