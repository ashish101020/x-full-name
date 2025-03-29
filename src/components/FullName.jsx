import React, {useState} from 'react'
import styled from './FullName.module.css';

const FullName = () => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [fullName, setFullName] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(first.trim() === "" || last.trim() === ""){
            setError(true);
            setFullName("");
        }else{
            setFullName(`${first} ${last}`);
            setError(false);
        }
    }
  return (
    <>
    <div className={styled.head}>Full Name Display</div>
    <form onSubmit={handleSubmit}>
        <div className="input">
            <div>First Name: <input type="text" name='first' value={first} onChange={(e) => setFirst(e.target.value)}/></div>
            <div>Last Name: <input type="text" name='last' value={last} onChange={(e) => setLast(e.target.value)}/></div>
            <button type='submit'>Submit</button>
        </div>
    </form>
    {error && <p className={styled.error}>Both fields are required!</p>}
    {fullName && <div className="fullName">Full Name: {fullName}</div> }
    </>
  )
}

export default FullName