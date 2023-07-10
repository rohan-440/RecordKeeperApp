import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  }

  const removeData = (i) => {
    var arr = data;
    arr.splice(i, 1);
    setData([...arr])
  }
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <Stack direction="row" spacing={2}>
          <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="name" variant="outlined" />
          <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="email" variant="outlined" />
          <Button
            onClick={addData}
            variant="contained"
            color="success">
            Submit
          </Button>
        </Stack>
      </div>
      <div className='Data'>
        <div className='Data_val'>
          <h2>Name</h2>
          <h2>Email</h2>
          <h2>Remove</h2>
        </div>
        {
          data.map((e, i) => {
            return (
              <div key={i} className='Data_val'>
                <h2>{e.name}</h2>
                <h2>{e.email}</h2>
                <Stack direction="row" spacing={2}>
                  <Button onClick={() => removeData(i)} variant="outlined" color="error">
                    Remove
                  </Button>
                </Stack>

              </div>
            )
          })
        }



      </div >

    </div >
  );
}

export default App;
