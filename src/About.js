import React,{useState} from 'react';
import { useParams,Link } from 'react-router-dom';
import Data from "./data";

const About = () => {


  const [data] = useState(Data.articles);
    const {id} = useParams()
    
  return <>
  <div className='px-5 mb-[70px] mt-[100px] h-[80vh] body'>
      <main className='flex flex-col items-center justify-center my-5 shadow-lg sm:mx-5 md:mx-auto md:w-full lg:w-6/12 bg-indigo-50'>

     <div className='px-4 py-3 font-mono font-bold sm:text-sm lg:text-lg'>{data[id].title}</div>
   <img src={data[id].urlToImage} className="object-cover w-full px-5 py-5 rounded-md "/>
   <h1 className='font-mono text-sm font-bold'>Authors Name : {data[id].author}</h1>
   <h1 className='px-5 py-3 mx-5 font-serif bg-indigo-100 rounded-lg'>{data[id].content}</h1>
   <div className='flex justify-around py-3'>
   <Link to="/" ><button className=" mx-5 shadow-lg shadow-indigo-500/50 bg-indigo-500 text-slate-200 font-sans py-0 px-3 rounded-md flex items-center  pb-[3px] cursor-pointer hover:bg-indigo-800 transition-all ease-in-out">Back</button></Link>
   <a href={data[id].url} target="_blank"><button className="mx-5  shadow-lg shadow-indigo-500/50 bg-indigo-500 text-slate-200 font-sans py-0 px-3 rounded-md flex items-center  pb-[3px] cursor-pointer hover:bg-indigo-800 transition-all ease-in-out">Read More</button></a>
   </div>
     </main> 
     </div>

  </>;
};

export default About;
