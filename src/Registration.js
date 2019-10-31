import React, {useState} from 'react';

function Registration(){
    
    const [imgState,setImgState]=useState({file:'',imgURL:''})

    const pic = (e) => {
        // console.log(e.target.files[0].name);
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {setImgState({file:file,imgURL:reader.result})}
        reader.readAsDataURL(file)
    }

    const subpic=(e)=>{
        e.preventDefault();

    }




    return(
        <div>
            <form className='registerform'>
                <div className='fullname'>
                    <label>Name</label>
                    <input placeholder='First Name'></input>
                    <input placeholder='Middle Name'></input>
                    <input placeholder='Last Name'></input>
                </div>
                <div className='contact'>
                    <label>Address</label>
                    <textarea/>
                    <label>Date of Birth</label>
                    <input type='date'></input>
                    <label>Phone Number</label>
                    <input type='tel' maxlength='10' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'></input>
                    <label>Email</label>
                    <input type='email'></input>
                </div>
                <div className='credential'>
                    <label>Patron ID</label>
                    <input></input>
                    <label>Registration Date</label>
                    <input type='date'></input>
                    <img src={imgState.imgURL} alt='' width='100' height='100'/>
                    <div className='photo-id'>
                        <label>Photo</label>
                        <input type='file' name="pic" onChange={pic}/>
                        <button onClick={subpic}>Upload</button>
                    </div>
                </div>
                
                <div className='controls'>
                    <button>Submit</button>
                    <button>Clear Fields</button>
                </div>
            </form>
        </div>
    )
}


export default Registration;