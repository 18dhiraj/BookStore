import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addcart, detailes } from "../actions/index";
import { Link } from "react-router-dom";

function Section() {
  // useState hooks and dispatch

  const dispatch = useDispatch();
  const [Books, setBooks] = useState([]);
  const [value, setValue] = useState("");


  //useEffect hook to render things on page

  useEffect(() => {
    async function fetching() {
      console.log("fetching");
      let url =
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Yzc411QAqyY3OZnSYomEjLcYVtP0lV2H";

      let fetchdata = await fetch(url);

      let jsondata = await fetchdata.json();
      setBooks(jsondata.results.books);

    }
    fetching();
  }, []);



  //  for Dispactch items to store

  const sedetailes = (e) => {
    let data = e;
      dispatch(detailes(data));


  };

  const setdata = (e) => {
    let data = e;
    dispatch(addcart(data));

    alert("Added to cart")

  };

  //setting the value of input with useState

  function setval() {
    let val = document.getElementsByTagName("input")[0].value;

    setValue(val);
  }

  // Logic for search books

  function search() {
    let card = document.getElementsByClassName("card");

    let count = 0
    for (let i = 0; i < card.length; i++) {

      let title = document
        .getElementsByClassName("card")
        [i].getElementsByClassName("title")[0];

      if (title) {
        let textval = title.innerHTML || title.textContent;
        if (textval.toUpperCase().indexOf(value.toUpperCase()) === -1) {
          card[i].style.display = "none";
     

        } else {
          card[i].style.display = "";
          count ++
        }
      }
      

      
    }
    if(count !== 0){
      let noresult = document.getElementById("noresult")
      noresult.style.display = 'none'

    }
    else{

      let noresult = document.getElementById("noresult")
      noresult.style.display = 'block'
    }

  }

  const reload = () =>{

    window.location.reload()
  }



  /// Section component which is returned or displayed

  return (
    <>
      <div className=" d-flex justify-content-end m-3">
        <input
          onChange={setval}
          className="w-50 mx-2"
          type="text"
          value={value}
        />
        <button onClick={search} className="border mx-2 rounded">
          Search
        </button>
      </div>
      <div
        className="mx-5 row row-cols-xs-1 row row-cols-lg-5 row row-cols-md-3 "
    
      >
        <div id="noresult" style={{display: "none"}}><button onClick={reload} className="border mx-2 py-1 px-2 rounded">Back </button>No Result Found</div>
        {Books.map((element) => {
          return (
            <div
              key={element.rank}
              className="  p-0 border  shadow"
              style={{ height: "auto"}}
             >
              <div
                className=" d-flex justify-content-center  "
                style={{ height: "335px", overflow: "hidden" }}
              >
                <img
                  className=" h-100" 
                  src={element.book_image}
                  alt="Book Img"
                />
              </div>
              <div
                className="  text-start fs-6 d-flex  justify-content-between"
                style={{ height: "auto", flexDirection: "column" }}
              >
                <div className="mx-3" style={{ height: "75px" }}>
                  <div className=" title mx-1">
                    <strong>Title : </strong>
                    {element.title}
                  </div>
                  <div className=" mx-1 ">
                    <strong>Author : </strong>
                    {element.author}
                  </div>
                </div>
                <div className="d-flex align-items-baseline justify-content-around">
                  <button
                    className="border rounded my-2 "
                    onClick={() => {
                      sedetailes(element);
                    }}
                  >
                    <Link className="list-unstyled text-decoration-none text-dark"
                      onClick={() => {
                        sedetailes(element);
                      }}
                      to="/detailes"
                    >
                      Know More
                    </Link>
                  </button>
                  <button
                    className="border rounded my-2 "
                    onClick={() => {
                      setdata(element);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Section;
