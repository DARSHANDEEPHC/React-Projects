import React from "react";
import ReactDOM from "react-dom/client";

const Header=() => {
  return(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XNyPZ0D-zWx6ADGlSdRgrqX7qLLE8FT6Eg&s" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Restaurants Near Me</li>
                <li>Order Online</li>
                <li>Dining</li>
                <li>Catering</li>
                <li>Food-Cart</li>
            </ul>
        </div>
    </div>
  );
};

const RestaurantCard=() => {
  return(
    <div className="res-card">
        <h3>Nalapaka</h3>
    </div>
  )
}

const Body=() => {
  return(
    <div className="body">
        <div className="search">
        <input type="text" placeholder="Search...?" name="search"></input>
        </div>
        <div className="res-container"></div>
        <RestaurantCard/>
        
    </div>

  )
}
const AppLayout=() => {
  return( <div className="app">
    <Header/> 
    <Body/>
  </div>
  );
  
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);