import React, { createContext, useEffect, useState } from 'react'
export const  StoreContext=createContext(null);
import axios  from 'axios';

const StoreContextProvider = (props) => {
    const url="https://backendfinalb2830.onrender.com";
    const [token,setToken]=useState("")

    const loadCartData=async (token)=>{
        const response=await axios.post(url+"/api/user/cart",{},{headers:{token}});
        console.log(response);
    
    }
    
        async function loadData() {
            
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                console.log('im in loaddaa')
                console.log(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"))
            }    
           
        }
        
    useEffect(()=>{
     loadData()

    },[])        

    const contextValue={
        token,
        url,
        setToken
    }

     return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )



}
export default StoreContextProvider
