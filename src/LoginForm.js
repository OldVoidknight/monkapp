import React,{useState} from 'react';
import './LoginForm.css';
import InfoMod from './InfoMod'


function LoginForm(props){
    const [modalVisible,setModalVisible]=useState(false)
    const [value,setValue]=useState({username:'',password:''})
    const [msgtype,setMsgType]=useState('')
    const [msgtext,setMsgText]=useState('')
    const [msgcolor,setMsgColor]=useState('')

    

    const showModal=()=>{
        setModalVisible(!modalVisible)
    }
    
    const handleLogin=(e)=>{
        e.preventDefault();
        console.log(value)
        if (value.username===''||value.password==='') {
            setMsgColor('warning')
            setMsgType('Incomplete Fields')
            setMsgText('Some input fields are empty, please check and try again.')
            showModal()
        }
        // props.history.push('/admin')
    }

    const handleChange=(e) =>{
        setValue({...value,[e.target.name]:e.target.value})}


    return(
        <form className='loginform'>
            <div className='login-input'>
                <input name='username' type='text' placeholder='Enter Username' value={value.username} onChange={handleChange} />
                <input name='password' type='password' placeholder='Enter Password' value={value.password} onChange={handleChange} />
            </div>
            {modalVisible? <InfoMod color={msgcolor} type={msgtype} text={msgtext} onClick={()=>setModalVisible(false)} />:null}
            <div className='login-buttons'>
                <button onClick={handleLogin}>Login</button>
                <button>Cancel</button>
            </div>
           
        </form>
    )
}


export default LoginForm;