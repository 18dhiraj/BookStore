import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addcart, detailes } from "../actions/index";
import { Link } from "react-router-dom";

function Section() {
  // useState hooks and dispatch

  const dispatch = useDispatch();
  const [Books, setBooks] = useState([]);
  const [value, setValue] = useState("");
  const [err, setErr] = useState(false);


  const books = useSelector((state) => state.allbooks.books);

  useEffect(() => {
    setBooks(books);

  }, [])

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



  // Logic for search books

  const search = function () {
    let searched_text = value.toUpperCase();
    let searched_data = books.filter((item) => {
      if (item.title.toUpperCase().includes(searched_text) || item.author.toUpperCase().includes(searched_text)) {
        return item
      }
    })

    if (searched_data.length) {
      setBooks(searched_data);

    } else {
      setBooks([])
      setErr(true)
    }



    // let card = document.getElementsByClassName("card");

    // let count = 0
    // for (let i = 0; i < card.length; i++) {

    //   let title = document
    //     .getElementsByClassName("card")
    //   [i].getElementsByClassName("title")[0];

    //   if (title) {
    //     let textval = title.innerHTML || title.textContent;
    //     if (textval.toUpperCase().indexOf(value.toUpperCase()) === -1) {
    //       card[i].style.display = "none";


    //     } else {
    //       card[i].style.display = "";
    //       count++
    //     }
    //   }
    // }
    // if (count !== 0) {
    //   let noresult = document.getElementById("noresult")
    //   noresult.style.display = 'none'

    // }
    // else {

    //   let noresult = document.getElementById("noresult")
    //   noresult.style.display = 'block'
    // }

  }

  const reload = () => {

    window.location.reload()
  }



  /// Section component which is returned or displayed

  return (
    <>
      <div className=" d-flex justify-content-end m-3">
        <input
          onChange={(e) => setValue(e.target.value)}
          className="w-50 mx-2"
          type="text"
          value={value}
        />
        <button onClick={search} className="border mx-2 rounded">
          Search
        </button>
      </div>
      {err && <div id="noresult" style={{ display: "none" }}><button onClick={reload} className="border mx-2 py-1 px-2 rounded">Back </button>No Result Found</div>}
      {/* <div
        className=" mx-5 "
      // style={{ placeContent: "center" }}
      > */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>

        {Books.map((element) => {
          return (
            <div
              key={element.rank}
              className=" border shadow mx-2 my-1"
              style={{ height: "fit-content", width: "200px" }}
            >
              <div
                className=" d-flex justify-content-center  "
                style={{ height: "305px", overflow: "hidden" }}
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

      {/* </div> */}
    </>
  );
}

export default Section;
