import React from 'react';
import './MemberPage.css';

function MemberPage(props){

    const handleLogout=()=>{
        props.history.push('/')
    }

    return(
        <div className='memberpage'>
            <div className='left-block'>
                <div className='photo'></div>
                <div className='patron'>
                    <p>Name:</p>
                    <p>ID:</p>
                </div>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className='right-block'>
                <div className='header'>
                    <button>Request</button>
                    <button>Review</button>
                </div>
                <div className=''>
                    Review
                </div>
            </div>
        </div>   
    )
}

export default MemberPage;