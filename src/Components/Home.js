import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookss } from "../actions";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Home() {

  const data = useSelector((state) => state.allbooks.books)

  const dispatch = useDispatch();

  window.onload = function slider() {
    let first = document.getElementsByClassName("first")[0];
    let second = document.getElementsByClassName("second")[0];
    let third = document.getElementsByClassName("third")[0];
    let forth = document.getElementsByClassName("forth")[0];

    let images = document.getElementsByClassName("images");
    let position = 1;
    setInterval(() => {
      if (position === 1) {
        for (let image of images) {
          image.classList.add("d-none");
        }
        second.classList.remove("d-none");
        position = position + 1;
      } else if (position === 2) {
        for (let image of images) {
          image.classList.add("d-none");
        }
        third.classList.remove("d-none");
        position = position + 1;
      } else if (position === 3) {
        for (let image of images) {
          image.classList.add("d-none");
        }
        forth.classList.remove("d-none");
        position = position + 1;
      } else if (position === 4) {
        for (let image of images) {
          image.classList.add("d-none");
        }
        first.classList.remove("d-none");
        position = 1;
      }
    }, 3000);
  };

  async function fetching() {
    let url =
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Yzc411QAqyY3OZnSYomEjLcYVtP0lV2H";

    let fetchdata = await fetch(url);

    let jsondata = await fetchdata.json();

    dispatch(bookss(jsondata.results.books))
  }

  useEffect(() => {

    if (!data.length) {
      fetching();

    }
  }, []);

  let books = document.getElementsByClassName("books");
  let right = document.getElementById("right");

  // let book = document.getElementById("books")
  let pos = 0;
  useEffect(() => {
    let left = document.getElementById("left");

    left.style.disabled = true;
  });

  function leftclick() {
    right.disabled = false;

    if (pos === 0) {
    } else if (pos === 1) {
      for (let book of books) {
        book.style.transform = "translateX(00%)";
      }

      pos--;
      console.log(pos);
    } else if (pos === 2) {
      for (let book of books) {
        book.style.transform = "translateX(-500%)";
      }

      pos--;
    }
  }

  function rightclick() {
    if (pos === 0) {
      for (let book of books) {
        book.style.transform = "translateX(-500%)";
      }

      pos++;
      console.log(pos);
    } else if (pos === 1) {
      for (let book of books) {
        book.style.transform = "translateX(-1000%)";
        right.disabled = true;
      }
      pos++;
      console.log(pos);
    }
  }

  return (
    <>
      <div
        className=" my-3 fs-4"
        style={{ width: "fit-content", margin: "auto" }}
      >
        Best Sellers
      </div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        autoFocus={true}
      >
        {data.map((item) => {
          return (
            <>
              <div>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                  <div>
                    <img src={item.book_image} style={{ width: "200px" }} />
                  </div>
                  <div>
                    <span>
                      {item.author}
                    </span>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </>
          )
        })

        }
      </Carousel>

      <div style={{ position: "relative", width: "100%" }}>
        <button
          onClick={leftclick}
          id="left"
          className="border-0 h-100 bg-transparent fs-1
          "
          style={{
            zIndex: "3",
            width: "50px",
            position: "absolute",
            left: "0px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          &#852;
        </button>
        <button
          id="right"
          onClick={rightclick}
          className="border-0 h-100 bg-transparent fs-1
          "
          style={{
            zIndex: "3",
            position: "absolute",
            right: "0px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "50px",
          }}
        >
          &#848;
        </button>

        <div
          className="row row-cols-md-2 row-cols-lg-5 row-cols-xs-1 flex-nowrap my-5 mx-2 border"
          style={{ position: "relative", overflow: "hidden" }}
        >
          {data.map((elem) => {
            return (

              <div
                key={elem.rank}
                className="books d-flex justify-content-center flex-column align-items-center my-4 p-0 "
                style={{ transition: "all 0.7s ease-in-out" }}
              >
                <div className="image " style={{ height: "40vh" }}>
                  <img className="h-100" src={elem.book_image} alt={elem.title} />
                </div>
                <div className="details my-2">
                  <div style={{ fontSize: "0.8rem" }}>
                    Title : {elem.title}
                  </div>
                  <div style={{ fontSize: "0.8rem" }}>
                    Author :{elem.author}
                  </div>
                </div>
              </div>

            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
