import React from 'react'



const Layout = () => {
    return (
        <div className='row bg-primary' >
            <div className='col-sm-8 galeria'>
                <img src={require("../image/revolucion.jpg")} className="img-thumbnail" />
            </div>
            <div className='col-sm-4'>
                <div className='row'>
                    <div className='col-sm-3 galeria'>
                    <img src={require("../image/museo.jpg")} className="img-thumbnail" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3 galeria'>
                    <img src={require("../image/morro.jpg")} className="img-thumbnail" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3 galeria'>
                    <img src={require("../image/capitolio.jpg")} className="img-thumbnail"  width={"100px"} height={"300px"}/>
                    </div>
                </div>
            </div>
            


        </div>
    )
}

export default Layout