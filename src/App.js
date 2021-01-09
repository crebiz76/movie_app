// import React from "react";
// import Potato from "./Potato";

function Potato(){
  return (
      <h3>[Potato in App] I love potato!</h3>
  );
}

function Food(props){
  console.log(props);
  return (
      <h3>[Food in App] I love food!</h3>
  );
}

function Favorate({food}){
  console.log({food});
  return (
      <h3>[Favorate in App] I love {food}!</h3>
  );
}

function App() {
  return (
    <div>
      <h1>Hello, world</h1>
      <Potato/>
      <Food
        fav="kimchi"
        something={true}
        blabla={["hello", 1, 2, 3, 4, 5]}
      />
      <Favorate
        shortname="Favorate"
        food="mandoo"
      />
      <Favorate food="kimchi"/>
      <Favorate food="ramen"/>
      <Favorate food="samgyepsal"/>
      <Favorate food="bibimbap"/>
    </div>
  );
}

export default App;
