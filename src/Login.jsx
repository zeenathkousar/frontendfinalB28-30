import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from './StoreContext';
import axios from 'axios'
//login form - email and password
//signup form - email,name,password
const Login = ({setShowlogin}) => {
        const {url,setToken}=useContext(StoreContext);

            const [currState,setCurrstate]=useState('Sign Up');

      const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })


    function onChangeHandler(e){
                const name=e.target.name;
        const value=e.target.value;
        setData(data=>({...data,[name]:value}))


    }

    async function onLogin(e){
        e.preventDefault();
        console.log("onlogin function");
        let newurl=url;
        if(currState==="Login"){
            // newurl+="/api/user/login"
            newurl=newurl+"/api/user/login"  
        }
        else{
            // newurl+="/api/user/register"
            newurl=newurl+"/api/user/register"
        }
        

        const resp=await axios.post(newurl,data);
// console.log(resp);
if(resp.data.success){
    console.log(resp.data.message);
    setToken(resp.data.token);
    localStorage.setItem('token',resp.data.token);
    setShowlogin(false);
}
else{
    alert(resp.data.message);
}
        // //localStorage.setItem('data',resp.data.token)
        // if(resp.data.success){
        //     //means we got login successfull so we will get one token
        //     //we use a state variable to store token and lets create that varible inside storeContext.jsx
        //     setToken(resp.data.token);
        //     localStorage.setItem("token",resp.data.token);
        //     setShowlogin(false)
        // }
        // else{
        //     alert(resp.data.message)
        // }




    }

      useEffect(()=>{
        console.log(data);
    },[data])

    return (
    <form onSubmit={onLogin}  action="" className='login-popup-container'>
            {(currState==='Sign Up')?<h1>Signup Form</h1>:              <h1>Login Form</h1>}

            {currState==='Sign Up' ? <input type="text" placeholder='Your name' name='name' onChange={onChangeHandler} value={data.name} required /> :<></>}
 <br /><br />
            {/* <input type="text" placeholder='Enter Your name' /> */}
            <input type="text" placeholder='Enter Your email' name='email' onChange={onChangeHandler} value={data.email} required/> <br /> <br />

            <input type="text" placeholder='Enter Your password'  name='password' onChange={onChangeHandler} value={data.password} required/> <br /><br />
                            <button>{currState==='Sign Up' ? "Create Account" :"Login"}</button>
                <br />
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>

            {currState==='Sign Up' ? <p>Already Have an Account? <span onClick={()=>setCurrstate("Login")}>Login Here</span></p> :<p>Don't Have an account <span onClick={()=>setCurrstate('Sign Up')}>Signup Here</span></p>
}

        </form>




    )
}

export default Login
