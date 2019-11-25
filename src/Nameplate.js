import React from 'react';


function Nameplate(){
    return(
        <div className='nameplate'>
            <p>&copy; 2019</p>
            <img src={require ('./assets/Voidbytes_Web.png')} alt='' width='30%' height='4%'></img>
        </div>
    )
}

export default Nameplate;