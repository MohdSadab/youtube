import React,{useState,useEffect} from 'react'
import Input from './Input';

const Form = ({onClick}) => {

// useState takes initial state as an argument and returns an array contains initial value and a function which can update the state value 
  const [email,setEmail] = useState('ghjhj');
  const [password,setPassword] = useState('dlkjdjkd')
  const numRef = React.useRef(null);
  const emailRef = React.useRef(null);
//   useEffect(() => {
//     console.log("called every time when component re render")
//   })


//useEffect as componentDidMount
useEffect(() => {
    console.log("called exactly one after the component render first time",emailRef)
    // numRef.current.value='Hello';
    // return function(){
    //     console.log("called when component will unmount ")
    // }
},[])
  

// useEffect(() => {
//     console.log("called when component render first time or email state change",email,password)
// },[email,password])
  
  return (
   <div>
    <div>Email:{email}</div>
    <input type="text"  ref={numRef} />
    <Input type="email" 
            ref={emailRef}
            placeholder='Email' 
            defaultValue={email} 
            onChange={(e)=>setEmail(e.target.value)}/>
    <div>Password:{password}</div>
    <Input type="password" 
            placeholder='Password' 
            style={{display:'block',margin:'10px 0px'}}
            defaultValue={password} 
            onChange={(e)=>setPassword(e.target.value)}/>

    <button onClick={()=>onClick({email,password})}>Submit</button>
   </div>
  )
}

export default Form