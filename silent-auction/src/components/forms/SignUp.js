import React from 'react';
import '../../css/index.css';
import { Link } from 'react-router-dom';

const SignupCard = props => {

  return (

    <div className="mainContainer">
      <div className="signUpCard" >

        <h1>Create A New Account</h1>
        <div className="formContainer">
          <form>
            <label htmlFor="firstName">First Name:</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First name"
            //value={formData.name}
            //onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last name"
            //value={formData.name}
            //onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
            //value={formData.name}
            //onChange={handleChange}
            />

            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="text"
              placeholder="Password"
            //value={formData.name}
            //onChange={handleChange}
            />
              <label htmlFor="userType">User Type:</label>
              <select
                    name="userType"
                    id="userType"
                    //value={formState.size}
                    placeholder="what do you want to do?"
                    //onChange={inputChange}
                >
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller </option>
                    
                </select>


          </form>


        </div>

        <div className="buttonContainer"><div className="bid">Submit</div></div>

      </div>
    </div>


  );
}

export default SignupCard;