import React,{useState,useEffect} from 'react';
import './index.css'

function InfoMod(info){
    const [infocolor,setInfoColor]=useState('')

    const setColor=()=>{
        setInfoColor(info.color)
    }

    useEffect(()=>{
        setColor()
    },[])
    

 return (
     <div className='infomod-container'>
         <div className='infomod-wrapper'>
            <div className={'infomod-left '+infocolor}></div>
            <div className='infomod-right'>
                <h3>{info.type}</h3>
                <p>{info.text}</p>
                <button onClick={info.onClick}>Got It!</button>
            </div>
         </div>
     </div>
 )
}

export default InfoMod;