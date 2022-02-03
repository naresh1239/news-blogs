import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
const News = ({data,id}) => {
  return <>

<div  className="px-2 py-2 card  shadow-lg hover:scale-[1.1] transition-all  ease-in hover:bg-indigo-100 bg-indigo-50 w-[450px]  flex-col md:flex-row my-5 rounded-md flex mx-auto card">
<div className="md:w-6/12 img sm:w-full">
<img src={data.urlToImage} className="object-cover h-full rounded-md "/>
</div>
<div className="mx-3 contant">
<h2 className="text-black font-mono text-[18px] font-bold">{data.title.slice(0,42)}...</h2>
<h4 className="text-black  cursor-pointer ease-linear font-serif text-[13px] bg-indigo-100 rounded-md px-2 py-2">{data.description.slice(0,67)}...</h4>
<div className="flex items-center justify-between py-3">
<h6 className="text-black font-serif text-[10px]"><span className="pr-3">Author's Name :</span>  {data.author}... </h6>
<Link to={`blogs/${id}`}>
<div className=' btn flex items-center px-2 pb-0.5 font-sans transition-all ease-in-out bg-indigo-500 rounded-md shadow-lg cursor-pointer shadow-indigo-500/50 text-slate-200 hover:bg-indigo-800'>
<span className="">read </span>
<span className='arrow'>{<IoIosArrowRoundForward/>}</span>
</div>
</Link>

</div>
</div>
</div>

  </>;
};

export default News;
