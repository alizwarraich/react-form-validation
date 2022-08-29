import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';
import { inputs } from './data/InputData';

function App() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    dob: '',
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  const submitForm = (e) => {
    e.preventDefault();
    console.log(user);
  }
  return (
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
  );
}

export default App;
