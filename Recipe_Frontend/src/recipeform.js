import  { useState } from 'react'

const useForm = (recipe) => {
  
  var[val,setVal] = useState(recipe);
  return [val,(event) => {
    setVal(
        {
            ...val,[event.target.name]:event.target.value
        }
    )
  }]
}

export default useForm
