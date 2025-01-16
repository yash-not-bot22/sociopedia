import React from 'react'
import Navbar from './navbar';
import Cards from '../components/card'
import { useEffect,useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function News() {
  
  const [newsobject,setnewsobject]=useState(null);
  const [q,setq]=useState(null);
  const [que,setque]=useState(null);

  const querychange=(e)=>{
    setque(e.target.value)
  }
  const qchange=()=>{
    setq(que);
  }
  
  useEffect(()=>{
    const newsy=async ()=>{

      try{
      if(q) 
      {const res=await fetch(`https://newsdata.io/api/1/latest?apikey=pub_47168622f478d51f07c3218dbade037a06406&q=${q}`);
      const t=await res.json();
      
      setnewsobject(t);}
      else
      {const res=await fetch(`https://newsdata.io/api/1/latest?apikey=pub_47168622f478d51f07c3218dbade037a06406&q=india`);
      const t=await res.json();
      
      setnewsobject(t);}
      }
    
      catch(e)
      {
        console.log(e);
      }
      
    
    }
    newsy();
  },[q])


const a=newsobject && newsobject.results;


  return (
    <div>
    <Navbar/>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { mx:80,my:1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" onChange={querychange} label="search news" variant="outlined" />
      <Button variant="contained" onClick={qchange}>search</Button>
      
    </Box>
    
    <div className='row justify-content-center d-inline-flex'>
    {
        
        newsobject && a.map((i)=>{
          
          return (<Cards key={i.id} newobject={i}/>);
          
        })
    
    }
    </div>
    
    </div>
  )
}

export default News;
