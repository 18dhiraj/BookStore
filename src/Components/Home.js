import React, { useEffect, useState } from "react";
import "./home.css";
function Home() {
  const [Books, setBooks] = useState([]);

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

  useEffect(() => {
    async function fetching() {
      let url =
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Yzc411QAqyY3OZnSYomEjLcYVtP0lV2H";

      let fetchdata = await fetch(url);

      let jsondata = await fetchdata.json();
      setBooks(jsondata.results.books);
    }
    fetching();
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
      <div
        className=" bg-primary bg-opacity-50 d-flex align-items-center"
        style={{ height: "50vh" }}
      >
        <div className=" first images w-100 " style={{ height: "90%" }}>
          <div className=" slider__image d-flex justify-content-center w-50 h-100 ">
            <img
              className="h-100 "
              src="https://storage.googleapis.com/du-prd/books/images/9780316499378.jpg"
              alt="first"
            />
          </div>

          <div className="slider__text w-50 ">
            <div className=" bestseller text-start fw-bold fs-3">
              22 SECONDS
            </div>{" "}
            <br />
            <div className="text-start fs-4 text-muted">
              {" "}
              The 22nd book in the Women’s Murder Club series. Lindsay Boxer
              returns as word gets around about a shipment of drugs and weapons.
            </div>
          </div>
        </div>

        <div className=" second images d-none w-100 " style={{ height: "90%" }}>
          <div className=" slider__image w-50 h-100 d-flex justify-content-center">
            <img
              className="h-100"
              src="https://storage.googleapis.com/du-prd/books/images/9781501133572.jpg"
              alt="first"
            />
          </div>

          <div className="slider__text w-50 ">
            <div className=" bestseller text-start fs-3 fw-bold ">
              THE SUMMER PLACE
            </div>{" "}
            <br />
            <div className="text-start fs-4 text-muted">
              {" "}
              A wedding between Ruby Danhauser and her pandemic boyfriend at a
              family beach house in Cape Cod brings to light family secrets.
            </div>
          </div>
        </div>

        <div className=" third images d-none  w-100" style={{ height: "90%" }}>
          <div className="slider__image  w-50 h-100 d-flex justify-content-center ">
            <img
              className="h-100"
              src="https://storage.googleapis.com/du-prd/books/images/9781538719770.jpg"
              alt="first"
            />
          </div>

          <div className="slider__text w-50 ">
            <div className=" bestseller text-start fs-3 fw-bold ">
              DREAM TOWN
            </div>{" "}
            <br />
            <div className="text-start fs-4 text-muted">
              {" "}
              The third book in the Archer series. Archer, Dash and Callahan
              search for a missing screenwriter who had a dead body turn up in
              her home.
            </div>
          </div>
        </div>

        <div className=" forth images d-none w-100 " style={{ height: "90%" }}>
          <div className=" slider__image w-50 h-100 d-flex justify-content-center ">
            <img
              className="h-100"
              src="https://storage.googleapis.com/du-prd/books/images/9780759554344.jpg"
              alt="first"
            />
          </div>

          <div className="slider__text w-50 ">
            <div className=" bestseller text-start fs-3 fw-bold ">
              RUN, ROSE, RUN
            </div>{" "}
            <br />
            <div className="text-start fs-4 text-muted">
              {" "}
              A singer-songwriter goes to Nashville seeking stardom but is
              followed by her dark past.
            </div>
          </div>
        </div>
      </div>
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
          {Books.map((elem) => {
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
