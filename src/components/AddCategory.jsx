import { useState } from 'react';


export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const OnInputChange= (event) => {
    setInputValue(event.target.value)
  }

  const onSubmit= (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1 ) return;
    onNewCategory(inputValue.trim());
    //setCategories((categories) =>  [inputValue, ...categories] );
    setInputValue('');
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
      type= "text"
      placeholder="Buscar gif"
      value={inputValue}
      onChange={(event) => OnInputChange(event)}
    
      />
    </form>
    
  )
}
