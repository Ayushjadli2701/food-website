import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import "./app.css";
import Body from "./components/Body"
import Order from "./components/Order"
import Footer from "./components/Footer"

export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data, setData]  = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchFoodData = async() =>{
      setLoading(true);

    try {

        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setLoading(false);

    } catch (error) {
      setError("Unable to fetch data!");
    }
    
  };
  fetchFoodData();
  }, []);


  if(error) return <div>{error}</div>
  if(loading) return <div>Loading, please wait...</div>

  return (
    <div>
      <Navbar />
      <Body />
      <Order data={data} /> 
      <Footer />
    </div>
  )
}

export default App;

