import { Paper } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Create = () => {



  const [ename,setEname]=useState("");
  const [email,setEmail]=useState("");
  const [emobile,setEmobile]=useState("");
  const history=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
  try
  {
    await axios.post("https://bend-crud-node-express-d4gb.onrender.com/api/v1/employee",{
    ename,email,emobile,
  })
  
  history("/");

  }catch(error)
  {
    console.log(error.message);
  }
}

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Paper sx={{ width: "50vw" }} className="p-5 mt-5">
        <div className="d-flex justify-content-between m-2">
          <h2>Create</h2>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e)=>{setEname(e.target.value)}}
              
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e)=>{setEmobile(e.target.value)}}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
            
          >
            Submit
          </button>
          <Link to="/">
            <button className="btn btn-success mx-2"> Back </button>
          </Link>
        </form>
      </Paper>
    </div>
  );
};