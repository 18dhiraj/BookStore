import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./cart.css";
function Book() {
  // getting data from redux

  const list = useSelector((state) => state.addtocart.list);

  // useEffect for disabled all decrement btns on element load

  useEffect(() => {
    let decbtn = document.querySelectorAll(".decrement");

    for (let dec of decbtn) {
      dec.disabled = true;
    }
  }, []);

  // increment Decerement buttons for incem or decre the items to buy

  // decrement function

  const decrement = (e) => {
    let elem = e.target.parentNode;
    let count = elem.children[1].textContent;

    if (count) {
      if (count < 3) {
        elem.children[1].textContent--;
        elem.children[0].disabled = true;
      } else {
        elem.children[1].textContent--;
      }
    }
  };

  // Increment Function

  const increment = (e) => {
    let elem = e.target.parentNode;
    let count = elem.children[1].textContent;
    if (count) {
      if (count > 0) {
        elem.children[0].disabled = false;
        elem.children[1].textContent++;
      }

    }
  };

  // returned statement by the component "BOOKS"

  return (
    <>
      <div
        className="fs-4 my-2"
        style={{ width: "fit-content", margin: "auto" }}
      >
        Cart
      </div>
      <div className="border m-3" style={{ width: "auto", minHeight: "30vh" }}>
        {list.map((elem) => {
          return (
            <>
              <div
                className=" cart__items border mx-5 my-4  py-3 d-flex"
                key={elem.data.title}
              >
                <div
                  className="  mx-5 "
                  style={{ height: "200px" }}
                >
                  <img
                    className=""
                    style={{ height: "100%" }}
                    src={elem.data.book_image}
                    alt={elem.data.title}
                  />
                </div>
                <div className=" item__info w-75  d-flex justify-content-center flex-column ">
                  <div className="text-start">Title : {elem.data.title}</div>
                  <div className="text-start">Author : {elem.data.author}</div>
                  <div className="lh-1">
                    <button
                      className=" decrement border  px-3 rounded my-1 "
                      onClick={(e) => decrement(e)}
                      
                    >
                      -
                    </button>
                    <div
                      className="itemCount mx-2 d-inline-block text-center "
                      style={{ width: "27px" }}
                    >
                      1
                    </div>
                    <button
                      className="border  px-3 rounded mx-1"
                      onClick={(e) => increment(e)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Book;
