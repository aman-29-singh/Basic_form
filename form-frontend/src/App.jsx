import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import UserProvider from './context/userContext.js';
import Card from './components/Card';
function App() {
  /*
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")  
  const handleChange = (e) =>{
    if(e.target.name === "firstname"){
      setFirstname(e.target.value)
    }

    if(e.target.name === "lastname"){
      setLastname(e.target.value)
    }

    if(e.target.name === "age"){
      setAge(e.target.value)
    }

    if(e.target.name === "gender"){
      setGender(e.target.value)
    }
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log("firstname",firstname)
    console.log("firstname",lastname)
    console.log("Age",age)
    alert(`Hello ${firstname} and ${lastname} and ${age}`)
  }
    
*/

const [formdata, setformData] = useState({
  firstname:"",
  lastname:"",
  age:"",
  email:""
})

const handleChange = (e) => {
  const { name, value } = e.target;

  setformData((prev) => ({
    ...prev,
    [name]: value,
  }));
  
};


const handleSubmit = (e)=>{
  e.preventDefault()
 /* console.log("firstname",formdata.firstname)
    console.log("firstname",formdata.lastname)
    console.log("Age",formdata.age)
    alert(`Hello ${formdata.firstname} and ${formdata.lastname} and ${formdata.age} and ${formdata.email}`)
    */

    axios.post(' http://localhost:8000/api/v1/formdata', formdata)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

}
  return (
    <UserProvider>
      <Card/>

    {/* <NavLink to="/header"> Header</NavLink> */}
    <Header/>
    
    <form className='flex  ' onSubmit={handleSubmit}>
      <div className=' '>
      <label>firstname</label>
      <input className='border-2 p-1  ' type="text" name='firstname' placeholder='enter first name' required
      onChange={handleChange} value={formdata.firstname} />
      <br/>
      
      <label className=''>Lastname</label>
      <input className='border-2 p-1' name='lastname' type="text" placeholder='enter last name' required
      onChange={handleChange} value={formdata.lastname} />
      
      </div>
      <br/>
      
      
      
      <label>Age</label>
      <input type="number" placeholder='enter age' name='age' onChange={handleChange} value={formdata.age} />
      
      {/*<div>
        <label>Gender</label>
        <select onChange={handleChange} name="gender" value={formdata.gender}>
          <option>Select gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
      </div>*/}
      <label>email</label>
      <input type="text" placeholder='enter email' name='email' onChange={handleChange} value={formdata.email}/>
      {/*name and value is compulsory to connect to connect handleChange and useState with this jsx  */}


      <button className='bg-blue-400 ' type='submit'>submit</button>

    </form>
    <Outlet/>
    <Footer/>
          </UserProvider>
  )
}

export default App
