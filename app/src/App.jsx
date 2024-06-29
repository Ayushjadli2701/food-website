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
  const [filterData, setFilterData] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  // const [selectedBtn, setSelectedBtn]  = useState("all"); 

  useEffect(()=>{
    const fetchFoodData = async() =>{
      setLoading(true);

    try {

        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilterData(json);
        setLoading(false);

    } catch (error) {
      setError("Unable to fetch data!");
    }
    
  };
  fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchVal = e.target.value;
    
    if(searchVal === ""){
      setFilterData(null);
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
    
    const filter = data?.filter((item)=>
      (item.name.toLowerCase().includes(searchVal.toLowerCase())));
     
     setFilterData(filter);

   };
    
  const filterFood = (type) => {
    if( type === "all"){
        setFilterData(data);
        // setSelectedBtn("all");
        return;
    }

    const filter = data?.filter((item)=>
      (item.type.toLowerCase().includes(type.toLowerCase())));
    setFilterData(filter);
    // setSelectedBtn(type);
  };

  if(error) return <div>{error}</div>
  if(loading) return <div>Loading, please wait...</div>

  return (
    <div>
      <Navbar searchFood = {searchFood}/>
      { !isSearching && <Body />}
      {/* <Order data={filterData} />  */}
      <Order data={filterData} className={isSearching ? 'order-searching' : ''} filterFood={filterFood} />
      <Footer />
    </div>
  )
}

export default App;