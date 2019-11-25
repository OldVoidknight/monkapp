import React from 'react';

function Catalog(){
    return(
        <div>
            <form className='catalogform'>
            <div className='identification'>
                <input placeholder='ISBN'></input>
                <input placeholder='Book Title'></input>
                <label>Type</label>
                <select>
                    <option>Print</option>
                    <option>Audio</option>
                    <option>Digital</option>
                </select>
            </div>
            <div className='author'>
                <input placeholder='First Author'></input>
                <input placeholder='Second Author'></input>
                <input placeholder='Other Author(s)'></input>
            </div>
            <div className='publication'>
                <input placeholder='Publisher'></input>
                <label>Publication Date</label>
                <input type='date'></input>
                <input type='number' min='0' max='50' placeholder='Edition'/>
                <input placeholder='Series'></input>
                <label>Subject</label>
                <select>
                    <option>Science and Knowledge</option>
                    <option>Philosophy and Psychology</option>
                    <option>Religion</option>
                    <option>Social Sciences</option>
                    <option>Mathematics and Sciences</option>
                    <option>Applied Sciences</option>
                    <option>Art and Entertainment</option>
                    <option>Linguistics and Literature</option>
                    <option>Geography and History</option>
                </select>
                <textarea placeholder='Enter Summary here'></textarea>
            </div>
            </form>
        </div>
    )
}


export default Catalog;