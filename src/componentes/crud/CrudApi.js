import React, { useState, useEffect } from 'react'
import { helpHTTP } from '../../helper/helpHttp'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader from './Loader'
import Message from './Message'


const CrudApi = () => {
    let api=helpHTTP();
    let url='http://localhost:5000/users'
    const [db,setDb]=useState(null)
    const [dataToEdit,setDataToEdit]=useState(null)

    const [error, setError]=useState(null)
    const [loading, setLoading]=useState(false)
    useEffect(() => {
     
      setLoading(true)     
      api.get(url).then(response=>{
        //console.log(response)
        if(!response.err){
            setDb(response)
            setError(null)
        }
        else{  
            setDb(null)
            setError(response)
        }
        setLoading(false)
    })
    }, [])
    


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

            {loading && <Loader/>}
            {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>}
            {db && <CrudTable  data={db}  setDataToEdit={setDataToEdit} deleteData={deleteData}/>}
        </div>
    )
}

export default CrudApi
/**
 * <CrudForm/>
 * minuto 22 me quede
   
 */