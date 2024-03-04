import React,{useRef, useState} from 'react'
import Card from './Card'

function foreground() {
    const ref =useRef(null);
    const data=[
        {
        desc:"ASSIGNMENT.PDF",
        filesize:".9mb",
        close:true,
        tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}},
        {desc:"PRESENTATION.PPT",filesize:".9mb",close:true,tag:{isOpen:true,tagTitle:"Download Now",tagColor:"blue"}},
        {desc:"FILE.HTML",filesize:".9mb",close:true,tag:{isOpen:false,tagTitle:"Upload",tagColor:"green"}},
    ]
  return (

    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
{data.map((item,index)=>(
    <Card data={item} reference={ref}/>
    ))}
   
</div>
  )
}

export default foreground
