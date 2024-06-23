import React from 'react'
import Navbar from './navbar';
import Cards from '../components/card'
import { useEffect,useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function News() {
  
  const [newsobject,setnewsobject]=useState(null);
  const [q,setq]=useState(null);

  const querychange=(e)=>{
    setq(e.target.value)
  }
  
  useEffect(()=>{
    const newsy=async ()=>{

      try{
      if(q) 
      {const res=await fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=7f6082fc34a5461e9095368028e6e0e0`);
      const t=await res.json();
      
      setnewsobject(t);}
      else
      {const res=await fetch(`https://newsapi.org/v2/everything?q=india&apiKey=7f6082fc34a5461e9095368028e6e0e0`);
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


const a=newsobject && newsobject.articles;


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
