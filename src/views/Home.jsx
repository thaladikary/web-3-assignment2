import { useContext, useEffect,useState} from "react";
import { AppContext } from "../Context";

const Home = () => {
  const [f1Data,setf1Data] = useState([])


  useEffect( () => {
   const  url = "https://w2024-assign1.glitch.me/api/seasons";
    fetch (url)
    .then( resp => resp.json() )
    .then( data => { setf1Data(data) })
    }, [] );


  console.log(f1Data)

  return <h1>Home Page</h1>;
};

export default Home;
