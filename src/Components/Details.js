import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { addcart } from "../actions/index";
import { Link } from "react-router-dom";
import "./Details.css"
export default function Full() {
  const dispatch = useDispatch();

    const list = useSelector((state)=>state.detailes.list)
    const setdata = (e) => {
        let data = e;
        dispatch(addcart(data));
        alert("Added to cart")
    
      };


  return (
<>
        <div className='d-inline-block border bg-secondry text-dark py-1 px-2 m-3 rounded'><Link className='text-dark text-decoration-none' to='/books'>Back</Link></div>
    <div className='border py-3 ' >
        {list.map((elem)=>{
            return(
            <div key={elem.data.rank} className=' detailes  ' style={{height: "50vh"}}>
                    <div className=' image  w-auto' >
                        <img className='border  h-100' src={elem.data.book_image} alt={elem.data.title}/>
                    </div>
                    <div className=' info w-50 fs-5 px-2 my-2' >
                        <div className=''><strong>Title :</strong>{elem.data.title}</div>
                        <div className=''><strong>Author :</strong> {elem.data.author}</div>
                        <div className=''><strong>Description :</strong>{elem.data.description}</div>
                      
                        <div className='my-2'>
                            <button onClick={() => {
                      setdata(elem.data);
                    }} className='border rounded lh-1 py-1 '>Add to cart</button>
                        </div>
                    </div>
            </div>
            
            )
        })}
    </div>
    </>
  )
}


