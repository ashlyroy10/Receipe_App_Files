import { Box, Button, Tab, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import axios from 'axios';
import EditRecipe from './EditRecipe';

const Indian = () => {

  var[recipe,setRecipe] = useState([]);
  var[updatestate,setUpdatestate] = useState(false);
  var[datastate,setDatastate] = useState('');
  var final;


  useEffect(()=>{
    fetchRecipe();
  },[]);

  
  const fetchRecipe = () =>{
    axios.get("http://localhost:8501/recipe/readi")
    .then((response) => {
      console.log(response.data);
      setRecipe(recipe = response.data);
    })
  }
  
  const deleteRecipe = (id) => {
    const data = {"_id":id}
    axios.post("http://localhost:8501/recipe/delete",data)
    .then((response)=>{
      console.log(response.data);
      alert("Successfully Deleted!!");
      fetchRecipe();
    })
  }
  
  function updateRecipe(value){
    console.log("displaying edit value", value);
    setUpdatestate(true);
    setDatastate(value);
    console.log("error",updatestate);
  }


  if(updatestate){
    final = <EditRecipe value={datastate} />
  }else{
    final = <div>
      <br></br><br></br><br></br>
      <Typography variant='h3'sx={{fontFamily:'cursive'}}>Indian Cuisines </Typography><br></br><br/>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', alignItems: 'start' }}>
    {recipe.map((value, index) => (
      <Box key={index} sx={{ ml: 5, width: 300, height: 250, border: 1 }}>
        <br/>
        <Typography variant="h5" sx={{ color: 'darkblue',fontWeight:'bold'}}>{value.recname}</Typography><br/>
        <AccessTimeIcon />{value.duration} min <Tab />
        <PeopleIcon sx={{pl:-1}}/>{value.serve}<br /><br />
        <Button onClick={() => {updateRecipe(value);}} variant="outlined" startIcon={<CreateIcon />} color="success">Edit</Button>
        <Button onClick={() => {deleteRecipe(value._id);}} variant="outlined" startIcon={<DeleteIcon />} sx={{ml:2}} color="error"> Delete</Button>
      </Box>
    ))}
  </div>
  </div>
  
  } 
  return (
     final
  )
}

export default Indian