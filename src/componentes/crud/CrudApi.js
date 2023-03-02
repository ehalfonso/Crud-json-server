import React, { useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'


const CrudApi = () => {
    const [db,setDb]=useState([])
    const [dataToEdit,setDataToEdit]=useState(null)

    const createData=(data)=>{
        setDb([...db,data])
    }
    const updateData=(data)=>{
        let newData=db.map(item=> item.id===data.id?data:item)
        setDb( newData)
    }
    
    const deleteData=(id)=>{        
        let eliminar=db.filter(item=>item.id!==id)
        setDb(eliminar)
    }
    return (
        <div>
            <h1>Crud App</h1>
            <CrudForm create={createData} update={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable  data={db}  setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </div>
    )
}

export default CrudApi
/**
 * <CrudForm/>
   
 */