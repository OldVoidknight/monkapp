import React from 'react';

function Catalog(){
    return(
        <div>
            <form className='catalogform'>
            <div className='identification'>
                <label>ISBN</label>
                <input></input>
                <label>Title</label>
                <input></input>
                <label>Type</label>
                <select>
                    <option>Print</option>
                    <option>Audio</option>
                    <option>Digital</option>
                </select>
            </div>
            <div className='author'>
                <label>First Author</label>
                <input></input>
                <label>Second Author</label>
                <input></input>
                <label>Other Author(s)</label>
                <input></input>
            </div>
            <div className='publication'>
                <label>Publisher</label>
                <input></input>
                <label>Publication Date</label>
                <input type='date'></input>
                <label>Edition</label>
                <input type='number' min='0' max='50'/>
                <label>Series</label>
                <input></input>
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
                <label>Summary</label>
                <textarea></textarea>
            </div>
            </form>
        </div>
    )
}


export default Catalog;