import React from 'react'

const Input = React.forwardRef((props,ref) => {
 const {type,placeholder,onChange,...remProps} = props;
  return (
    <input type={type} ref={ref} placeholder={placeholder} onChange={onChange} {...remProps} />
  )
})

export default Input