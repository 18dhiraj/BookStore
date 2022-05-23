import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { addcart } from "../actions/index";
import { Link } from "react-router-dom";

export default function Full() {
  const dispatch = useDispatch();

    const list = useSelector((state)=>state.detailes.list)


    const setdata = (e) => {
        let data = e;
        dispatch(addcart(data));
        alert("Added to cart")
    
      };


  return (

    <div className='border py-3 ' >
        <div className='d-inline-block border bg-secondry text-dark py-1 px-2 m-3 rounded'><Link className='text-dark text-decoration-none' to='/books'>Back</Link></div>
        {list.map((elem)=>{
            return<>
            <div className=' detailes d-flex justify-content-around ' style={{height: "70vh"}}>
                    <div className=' w-25 h-100 d-flex justify-content-center' key={elem.rank}>
                        <img className='border border-primary h-100' src={elem.data.book_image} alt={elem.data.title}/>
                    </div>
                    <div className='w-50 d-flex align-itemms-center flex-column justify-content-center fs-5 px-2 my-2' style={{lineHeight: "2rem"}}>
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
            </>

        })}
    </div>
  )
}


