import { Button, Tab, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const EditRecipe = (props) => {

  console.log(props);

  const [data,setData] = useState({
    cuiname:props.value.cuiname,
    recname:props.value.recname,
    duration:props.value.duration,
    serve:props.value.serve
  })

  const inputHandler = (event) =>{
    const {name,value} = event.target;
      setData((previousState)=>({
      ...previousState,
      [name]:value
    }))
  }

  const readvalues = ()=>{
    var postdata = {...data,_id : props.value._id}
    axios.post("http://localhost:8501/recipe/update",postdata)
    .then((response)=>{
      console.log("post data"+response.data);
      alert("Successfully Updated!!");
      window.location.reload()
    })
  }



  return (
    <div>
      <br></br><br></br><br></br>
      <Typography variant='h3'sx={{fontFamily:'cursive'}}>Update the Changes in Recipes </Typography>
      <br></br><br></br>
      <TextField name='cuiname' value={data.cuiname} onChange={inputHandler} label="Cuisine Name" variant='outlined' margin='dense'sx={{width:500 }} ></TextField><Tab></Tab>
      <TextField name='recname' value={data.recname} onChange={inputHandler} label="Recipe Name" variant='outlined'  margin='dense'sx={{width:500}}></TextField><br></br>
      <TextField name='durationr' value={data.duration} onChange={inputHandler} label="Duration of Cooking" variant='outlined' margin='dense'sx={{width:500}}></TextField><Tab></Tab>
      <TextField name='serve' value={data.serve} onChange={inputHandler} label="No of Servings" variant='outlined' margin='dense'sx={{width:500}}></TextField><br></br><br></br><br></br>
      <Button onClick={()=>{readvalues()}} variant='contained' sx={{backgroundColor:'black'}}> Add Update</Button>
      <br></br><br></br>
    </div>
  )
}

export default EditRecipe