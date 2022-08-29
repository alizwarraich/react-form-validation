import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';
import { Alert } from '@mui/material';

function App() {
  const [notification, setNotification] = useState(false);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    dob: '',
  });
  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errormessage: 'Username should be 3-16 characters and should not include any special character!',
      label: 'Username',
      required: true,
      pattern: '^[a-zA-Z0-9]{3,16}$'
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errormessage: 'It should be a valid email address!',
      required: true,
      label: 'Email'
    },
    {
      id: 3,
      name: 'password',
      type: 'text',
      placeholder: 'Password',
      errormessage: 'Password should be 8-10 characters and should include at least one letter, one number, and one special character!',
      required: true,
      label: 'Password',
      pattern: '^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}$'
    },
    {
      id: 4,
      name: 'confirmpassword',
      type: 'text',
      placeholder: 'Retype Password',
      errormessage: `Passwords don't match!`,
      required: true,
      label: 'Confirm Password',
      pattern: user.password
    },
    {
      id: 5,
      name: 'dob',
      type: 'date',
      placeholder: 'Birthday',
      errormessage: '',
      required: false,
      label: 'Birthday'
    },
  ]
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  const submitForm = (e) => {
    e.preventDefault();
    console.log("User Data: ", user);
    setNotification(true);
  }
  return (
    <>
      {
        notification &&
        <Alert onClose={() => setNotification(false)} severity="success">Form Submitted Successfully!</Alert>
      }
      <div className="App">
        <form onSubmit={submitForm}>
          <h1>Register</h1>
          {
            inputs.map((input) => {
              return <FormInput key={input.id} {...input} value={user[input.name]} onChange={handleChange} />
            })
          }
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
