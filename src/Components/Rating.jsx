import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";




function Rating({rating, onClick, style}) {
  return (
    <>
    {
        [...Array(5)].map((_,i) =>(
            <span key={i} onClick={()=> onClick(i)} style={style}>
                {
                    rating>i ? (
                        <FaStar
                        fontSize= "15px"/>

                    ): (
                 <CiStar  fontSize= "15px"/>
                    )
                }
            </span>
        ))}
    

    </>
  )
}

export default Rating