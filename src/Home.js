
import React,{useState} from 'react';
import News from "./News"
 import Data from "./data";
import Footer from './Footer';

const Home = () => {
   const [data,] = useState(Data.articles);

  


  return <>
 <div className="main flex flex-wrap pt-[100px] justify-between w-full xl:w-[80%] mx-auto ">
  
     
  {

    data.map((elem,id)=>{

      return(
        
        <div className='mx-auto body'>
        <News data={elem} id={id}/>
        </div>
        
      )
 
    }
    
    )
   
  }
    
 
     </div>
     
  </>;
  
};

export default Home;
