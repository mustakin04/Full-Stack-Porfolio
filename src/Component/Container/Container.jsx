import React from 'react'

const Container = ({className ,children}) => {
  return (
    <div className={`w-[1520px]  m-auto ${className}` }> {children}</div>
  )
}

export default Container