import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import useForm from './recipeform'

const Add = () => {

  var[recipeadd,setRecipeadd] = useForm({"cuiname":"","recname":"","duration":0,"serve":0})
  
  const newrecipe = () => {
    console.log(recipeadd);
    axios.post("http://localhost:8501/recipe/create",recipeadd)
    .then((response)=>{
      console.log(response.data);
      alert("Successfully Added!!");
    })
  }

  return (
    <div>
      <br></br><br></br><br></br><br></br>
      <Typography variant='h3'sx={{fontFamily:'cursive'}}>Add New Recipe </Typography>
      <br></br>
      <TextField name='cuiname' value={recipeadd.item} onChange={setRecipeadd} label="Cuisine Name" variant='outlined' margin='dense'sx={{width:500}} ></TextField><br></br>
      <TextField name='recname' value={recipeadd.item} onChange={setRecipeadd} label="Recipe Name" variant='outlined' margin='dense'sx={{width:500}} ></TextField><br></br>
      <TextField name='duration' value={recipeadd.item} onChange={setRecipeadd} label="Duration of Cooking" variant='outlined' margin='dense'sx={{width:500}} ></TextField><br></br>
      <TextField name='serve' value={recipeadd.item} onChange={setRecipeadd} label="No of Servings" variant='outlined' margin='dense'sx={{width:500}} ></TextField><br/><br/>
      <Button onClick={newrecipe} variant='contained'sx={{backgroundColor:'black'}}>Add Recipe</Button>
      <br></br><br></br>
    </div>
  )
}

export default Add