import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  const data = imageData(); 
 
  return ( 
    <div> 
      {data.map((ele) => ( 
        <img id={ele.id} src={ele.img} alt={`${ele.id}`} /> 
      ))} 
    </div> 
  ); 
}

export default App;
