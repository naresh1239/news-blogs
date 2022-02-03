
import React,{useState} from 'react';
import News from "./News"
 import Data from "./data";

const Home = () => {
   const [data,] = useState(Data.articles);

  


  return <>
 <div className="main flex flex-wrap pt-[100px] justify-between w-full xl:w-[80%] mx-auto px-5">
  
     
  {

    data.map((elem,id)=>{

      return(
        
        <div className='px-5 mx-auto body'>
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
