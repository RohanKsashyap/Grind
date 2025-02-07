import React, { useState } from "react";
import "../css/form.css"; // Import the CSS file
import {   useContactAuth } from "../../store/contact.auth";
 import { useNavigate } from "react-router-dom";

const Form = () => {
  const [user, setuser] = useState({

    username: "",
    email: "",
    message: "",
    password: ""

  })

  const  {storeToken_Ls}= useContactAuth()

  const handleInput = (e) => {

    let name = e.target.name
    let value = e.target.value
    setuser({ ...user, [name]: value || "" })

  }

const navigation = useNavigate()
  //passing data to backend using fetch

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user)
   
    try {

      const response = await fetch('http://localhost:3000/api/form/contact', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)




      })

      if(response.ok){


        const res_data = await response.json();
        storeToken_Ls(res_data)

        console.log("from form.jsx res_data",res_data)
        setuser({
          username: "",
          email: "",
          message: "",
          password: ""})

          return navigation("/logout")
      }
      console.log(response);
    }

    catch (error) {


      console.log("error from form.jsx", error)

    }


  }




  return (
    <div className="form-container">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username || ""}
            onChange={handleInput}

            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={user.email || ""}
            onChange={handleInput}

          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password || ""}
            onChange={handleInput}

            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <input
            type="text"
            name="message"
            value={user.message || ""}
            onChange={handleInput}

            required
          />
        </div>

       <button type="submit" >Register</button>
      </form>
    </div>
  );
};

export default Form;
