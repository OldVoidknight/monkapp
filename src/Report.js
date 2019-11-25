import React from 'react';

function Report(){
    return(
        <div className='report-container'>
            <div className='report-parameters'>
                <div className='params'>
                    <input placeholder='Search by ISBN'></input>
                    <button>Generate</button>
                </div>
                <div className='params'>
                    <input placeholder='Search by Book Name'></input>
                    <button>Generate</button>
                </div>
                <div className='params'>
                    <input placeholder='Search by Patron ID'></input>
                    <button>Generate</button>
                </div>
                <div className='params'>
                    <input placeholder='Search by Patron Name'></input>
                    <button>Generate</button>
                </div>
            </div>
        </div>
    )
}


export default Report;