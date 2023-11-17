import { Link } from "react-router-dom"; 
import axios from "axios"; 
import { useState,useEffect } from "react";  
 
export const Read = () => {       
  const [data,setData]=useState([]) 
 
  const getData=async()=>{ 
    try 
    { 
       const response=await axios.get("http://localhost:5000/api/v1/employee"); 
       console.log(response); 
       setData(response.data); 
    }catch(error) 
    { 
      console.log(error.message); 
    } 
  } 
 
  const handleDelete=async(id)=>{ 
    try 
    { 
       await axios.delete(`http://localhost:5000/api/v1/employee/${id}`)
       getData();
    }catch(error) 
    { 
       console.log(error.messaage); 
    } 
  } 


  const setToLocalStorage=(id,ename,email,emobile)=>{
    
    localStorage.setItem("id",id);
    localStorage.setItem("ename",ename);
    localStorage.setItem("email",email);
    localStorage.setItem("emobile",emobile);

  }


    useEffect(()=>{ 
      getData(); 
    },[]); 
 
    return ( 
    <> 
      <table className="table"> 
        <thead> 
          <tr> 
            <th className="text-center" scope="col"> 
              Name 
            </th> 
            <th className="text-center" scope="col"> 
              Email 
            </th> 
            <th className="text-center" scope="col"> 
              Mobile 
            </th> 
            <th className="text-center" scope="col" colSpan="2"> 
              Actions 
            </th> 
          </tr> 
        </thead> 
        <tbody> 
          { 
             data?.map((eachData)=>{ 
              return ( <tr key={eachData._id}> 
            <td className="text-center">{eachData.ename}</td> 
            <td className="text-center">{eachData.email}</td> 
            <td className="text-center">{eachData.emobile}</td> 
            <td className="text-center"> 
              <Link to="/update"> 
                <button className="btn btn-success me-2"
                onClick={()=>{
                  setToLocalStorage(eachData._id,eachData.ename,eachData.email,eachData.emobile)
                }}>Update</button> 
              </Link> 
              <button className="btn btn-danger" 
              onClick={()=>handleDelete(eachData._id)}>Delete</button> 
            </td> 
          </tr> 
              );  })} 
        </tbody>         
      </table>      
    </> 
      ); 
     };