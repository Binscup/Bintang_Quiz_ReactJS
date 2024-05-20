import React, { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Masukan inputan ${inputValue}`);
  };


  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>
          input nilia atau variabel:
          <input type='text' value={inputValue} onChange={handleChange} />
        </label>
        <button type='submit'>Submit</button>
      </form>
      <p>Hasil akan menampilkan: {inputValue}</p>
    </>
  )
};
export default Form;