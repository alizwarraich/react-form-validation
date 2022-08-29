import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    dob: '',
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <div className="App">
      <form>
        <FormInput
          type="text" name="username" field="Username" placeholder="username"
          user={user} handleChange={handleChange} />
        <FormInput
          type="email" name="email" field="Email" placeholder="email"
          user={user} handleChange={handleChange} />
        <FormInput
          type="password" name="password" field="Password" placeholder="password"
          user={user} handleChange={handleChange} />
        <FormInput
          type="date" name="dob" field="Date of Birth" placeholder="dob"
          user={user} handleChange={handleChange} />
      </form>
    </div>
  );
}

export default App;
