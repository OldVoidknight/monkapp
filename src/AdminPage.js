import React, {useState} from 'react';
import './AdminPage.css'
import Registration from './Registration';
import Catalog from './Catalog';
import Report from './Report';


function AdminPage(props){
    const [register,setRegister]=useState(false)
    const [catalog,setCatalog]=useState(false)
    const [report,setReport]=useState(false)

    const handleRegClick=(e)=>{
        setRegister(!register)
        setCatalog(false)
        setReport(false)
    }
    const handleCatClick=(e)=>{
        setCatalog(!catalog)
        setRegister(false)
        setReport(false)
    }
    const handleRepClick=(e)=>{
        setReport(!report)
        setCatalog(false)
        setRegister(false)
    }
    const handleLogout=()=>{
        props.history.push('/')
    }

  


    return(
        <div className='adminpage'>
            <div className='admin-options'>
                <button onClick={handleRegClick}>Registration</button>
                <button onClick={handleCatClick}>Catalog</button>
                <button onClick={handleRepClick}>Reports</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className='admin-controls'>
                {register && <Registration/>}
                {catalog && <Catalog/>}
                {report && <Report/>}
            </div>
        </div>
    )
}



export default AdminPage;