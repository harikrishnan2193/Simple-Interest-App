import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {

  const [Interest, setInterest] = useState(0)
  const [principle ,setPrinciple] = useState(0)
  const [rate ,setRate] = useState(0)
  const [year ,setYear] = useState(0)
  const [isprinciple, setisprinciple] = useState(true)
  const [isRate , setisRate] = useState(true)
  const [isYear ,setisYear] = useState(true)
  
  const getValidate = (e) =>{
    const {name ,value} = e.target
    // console.log(name,value);
    // console.log(!!value.match(/^[0-9]+$/)); //!! to convert into boolean
    if(!!value.match(/^[0-9]+$/)){
      if(name === 'principle')
      {
        setPrinciple(value)
        setisprinciple(true)
      }
      else if(name === 'rate'){
        setRate(value)
        setisRate(true)
      }
      else{
        setYear(value)
        setisYear(true)
      }
    }
    else{
      if(name ==='principle'){
      setPrinciple(value)
      setisprinciple(false)
    }
    else if(name === 'rate'){
      setRate(value)
      setisRate(false)
    }
    else{
      setYear(value)
      setisYear(false)
    }
    }
  }

  const handleCalculate =(e) =>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert('plase fill the form')
    }
    else{
      setInterest(principle*rate*year/100)
    }
  }

  const handleReaset = (e) =>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    
  }


  return (
    <>
      <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
        <div className='bg-light p-5 rounded'>
          <h1>Simple Interest App</h1>
          <p>Calculate simple interest Easily</p>
          <div className='bg-warning d-flex justify content-center align-items-center w-100 p-3 flex-column rounded mt-4 shadow'>
            <h1>₹{''}{Interest} </h1>
            <p>Total Simple Interest</p>
          </div>
          <form className='mt-4'>
            <div className='mb-3'>
            <TextField name='principle' value={principle || ""} onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="₹ Principal Amount" variant="outlined" />
            </div>
            <div>
              {!isprinciple && 
              <p className='text-danger fw-bolder'>⚠️Invalid number</p>}
            </div>
            <div className='mb-3'>
            <TextField name='rate' value={rate || ""} onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="Rate Of Interest (p,a)%" variant="outlined" />
            </div>
            <div>
              {!isRate && 
              <p className='text-danger fw-bolder'>⚠️Invalid number</p>}
            </div>
            <div className='mb-3'>
            <TextField name='year' value={year || ""} onChange={(e)=>getValidate(e)} className='w-100' id="outlined-basic" label="Year (Yr)" variant="outlined" />
            </div>
            <div>
              {!isYear && 
              <p className='text-danger fw-bolder'>⚠️Invalid number</p>}
            </div>

            <div>
            <Stack direction='row' spacing={2}>
            <Button onClick={handleCalculate} disabled={isprinciple && isRate && isYear?false:true} className='bg-success' style={{width:'200px', height:'50px'}} variant="contained" >Calculater</Button>
            <Button onClick={handleReaset} style={{width:'200px', height:'50px'}} variant="outlined">reset</Button>
            </Stack>
            </div>



          </form>
        </div>
        </div>
    </>
  );
}

export default App;
