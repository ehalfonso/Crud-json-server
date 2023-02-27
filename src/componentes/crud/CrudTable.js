import React from 'react'

const CrudTable = ({data, setDataToEdit, deleteData}) => {
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>{
                    data.length === 0 ? (
                        <tr>
                            <td>No hay elementos</td>
                        </tr>
                    ) : (
                        data.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.lastname}</td>
                                <td>
                                <button onClick={()=>setDataToEdit(item)}>Editar</button>
                                <button onClick={()=>deleteData(item.id)}>Eliminar</button></td>
                            </tr>
                        )
                        )
                    )
                }

                </tbody>
            </table>
        </div>
    )
}

export default CrudTable