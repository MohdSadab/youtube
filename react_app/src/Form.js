import React,{useState,useEffect} from 'react'
import Input from './Input';

const Form = ({onClick}) => {

// useState is a hooks that takes initial value as an argument and return initial value and a function by which we can update the initial value
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
 
  const emailRef = React.useRef(null);

  const submitHandler =()=>{
    onClick({email,password});
  }

//   useEffect(()=>{
//         console.log("called each time after component re render")
//   })


// component did mount 
useEffect(()=>{
    // emailRef.current.focus();
    console.log("did mount")
},[])


useEffect(()=>{
    
    return function(){
        console.log("component will unmount called clean up call")
    }
},[])

// kind of component did update
// useEffect(()=>{
//     console.log("called when component render initially or email changes",email)
// },[email,password])

  return (
    <div>
        <input type="email"  
                placeholder="email" 
                ref={emailRef}
                /> 
        <div>Email:{email}</div>
        <Input type="email"
                ref={emailRef}  
                placeholder="email" 
                onChange={(e)=>setEmail(e.target.value)}
                style={{display:'block',background:'blue',color:'white',width:"400px"}} /> 
        <div>Password:{password}</div>
        <Input type="password"  placeholder="password" onChange={(e)=>setPassword(e.target.value)} /> 
        <button onClick={submitHandler}>Submit</button>

    </div>
  )
}

export default Form