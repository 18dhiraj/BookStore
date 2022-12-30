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


  // Logic for search books

  const search = function (val) {
    setErr(false);
    setValue(val);
    let searched_text = val.toUpperCase();
    let searched_data = books.filter((item) => {
      if (item.title.toUpperCase().includes(searched_text) || item.author.toUpperCase().includes(searched_text)) {
        return item
      }
    })

    if (searched_data.length != 0) {
      setBooks(searched_data);

    } else {
      setBooks([])
      setErr(true)
    }

  }

  /// Section component which is returned or displayed

  return (
    <>
      <div className=" d-flex justify-content-end m-3">
        <input
          placeholder="Search"
          onChange={(e) => search(e.target.value)}
          className="w-50 mx-2 px-2"
          type="text"
          value={value}
        />

      </div>
      {err && <div className=" border text-center py-2 mx-2" >No Result Found</div>}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>

        {Books.map((element) => {
          return (
            <div
              key={element.rank}
              className=" border shadow mx-1 my-1"
              style={{ height: "fit-content", width: "220px" }}
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
                <div className="mx-1" style={{ height: "75px" }}>
                  <div className=" title "
                    style={{ fontSize: "14px" }}

                  >
                    <strong>Title : </strong>
                    {element.title}
                  </div>
                  <div className=" "
                    style={{ fontSize: "14px" }}>
                    <strong>Author : </strong>
                    {element.author}
                  </div>
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
          );
        })}
      </div >

      {/* </div> */}
    </>
  );
}

export default Section;
