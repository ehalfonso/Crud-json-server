import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
const Testimonio = ({ nombre, pais, empresa }) => {
    return (
        <div className='row '>

            <div className='col-sm-6 mx-1  shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={require("../image/minions-28.jpg")} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body card-hover">
                                <h2 className="card-title text-center">{nombre}</h2>
                                <h4 className="card-text text-center">Pais: {pais}</h4>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <h4 className="card-text">Empresa: {empresa}</h4>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Testimonio