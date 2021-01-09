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

const foodILike = [
  {
    name:'kimchi',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMTNfOSAg%2FMDAxNjA3Nzg2MjQ2ODMy.ZeVvpbz9fWg5CkHMEw2BFDcFNLV1pYvIrSwQi6XBERog.COk9Y_TDccny5F1HVyd_tPPTMpdn8fZ9Td1w5kDyR_gg.JPEG.ennzi%2F%25B1%25E8%25C4%25A1.JPG&type=sc960_832'
  },
  {
    name:'samgyeopsal',
    image: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F36%2Fd2%2F06%2F36d206d7aa3e01ffe3e0a018aa0e4eb3.jpg&type=sc960_832'
  },
  {
    name: 'bibimbap',
    image: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F29%2Fa2%2Fb9%2F29a2b9ad301bc3720c50904d5bdc7f92.jpg&type=sc960_832'
  },
  {
    name: 'kimbap',
    image: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6f%2Fae%2F8b%2F6fae8b8ded319e43c64ca3e9ab9b40ce.png&type=sc960_832'
  }
];

function Ilikefood({name, image}){
  // console.log(foodIlLike);
  return(
  <div>
    <h2>I like {name}</h2>
    <img src={image} alt={name} width='200px'/>
  </div>
  )
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
      {foodILike.map(dish => <Ilikefood name={dish.name} image={dish.image}/> )};
    </div>
  );
}

export default App;
