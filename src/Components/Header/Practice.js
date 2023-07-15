import React from 'react'
import './Header.css';


function Practice() {
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-success p-3 position-fixed top-0 start-0 end-0">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">list</div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">list</div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">list</div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">list</div>
                </div>

                {/* todo */}
                <div className="row">
                    <div className='col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12 sidabar'>
                        <h1 className='text-success'>hello</h1>
                    </div>

                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12  mainContent">
                        <h1 className='text-success'>hello</h1>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Practice