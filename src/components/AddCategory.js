import React, { useState } from 'react'
import PropTypes from 'prop-types';


const AddCategory = ({setcategorys,categorys}) => {
     const [inputValue, setinputValue] = useState("");

     const handleInputSubmit=(e)=>{
         setinputValue(e.target.value);
     }

     const handleSubmit = (e)=>{
      e.preventDefault();
      if(inputValue.trim().length > 2){
        setcategorys([inputValue,...categorys]);
        setinputValue("");
      }
      
     }

  return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={inputValue}
        onChange={ handleInputSubmit}
        />
        
    </form>
  )
}

AddCategory.propTypes = {
  setcategorys: PropTypes.func.isRequired,
  categorys: PropTypes.array.isRequired
}

export default AddCategory

