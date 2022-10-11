import React from 'react'

const Input = React.forwardRef((props,ref) => {

  const {type,placeholder,onChange,...remProps} =props;
  return (
    <input ref={ref} type={type} placeholder={placeholder} onChange={onChange} {...remProps} />
  )
})

export default Input