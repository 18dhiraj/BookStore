import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./cart.css";
function Book() {
  // getting data from redux

  const list = useSelector((state) => state.addtocart.list);


  const [length, setLength] = useState(list.length)
  const [prices, setPrices] = useState(0)



  // useEffect for disabled all decrement btns on element load

  // useEffect(() => {
  //   let decbtn = document.querySelectorAll(".decrement");

  //   for (let dec of decbtn) {
  //     let count = dec.nextElementSibling.textContent
  //     // console.log(count + "useeffect")
  //     if(count === 1){
  //       dec.setAttribute("disabled", true);

  //     }
  //     else{

  //     }
  //   }
  // }, []);


  // for gtting price of products


  useEffect(() => {

    for (let items of list) {
      setPrices(prices + Number(items.data.price))
    }

  }, [])




  // increment Decerement buttons for incem or decre the items to buy

  // decrement function

  const decrement = (e) => {

    let decelement = e.target
    let val = decelement.nextElementSibling.innerText
    let price = decelement.parentNode.previousElementSibling.children[0].innerText
    if (Number(val) === 1) {
      console.log("its one")
    }

    else {
      decelement.nextElementSibling.innerText--
      setLength(length - 1)
      setPrices(prices - Number(price))

    }

  }


  const increment = (e) => {

    let incelement = e.target
    let price = incelement.parentNode.previousElementSibling.children[0].innerText

    setPrices(prices + Number(price))
    setLength(length + 1)
    incelement.previousElementSibling.innerText++

    console.log(length, prices)
  }

  const check = (data) => {

    if (data === 0) {
      return <div className="m-auto fs-3" style={{ width: "fit-content" }}>Cart is empty</div>
    }
  }




  // returned statement by the component "BOOKS"

  return (
    <>
      <div
        className="fs-4 my-2"
        style={{ width: "fit-content", margin: "auto" }}
      >
        Cart
      </div>
      <div className="d-flex m-3 ">


        <div className="border mx-2" style={{ width: "75%" }}>

          {check(list.length)}
          {list.map((elem) => {

            return (
              <>
                <div
                  key={elem.data.rank}
                  className=" cart__items border mx-5 my-4  py-3 d-flex"
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
                    <div>Price: <strong>20</strong></div>
                    <div className="lh-1">
                      <button
                        id="decre"
                        className=" decrement border  px-3 py-1 rounded my-1 "
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
                        id="incre"
                        className="border  px-3 py-1 rounded mx-1"
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
        <div className=" p-2 w-25 border mx-2 d-flex align-items-start flex-column justify-content-center" style={{ height: "fit-content" }}>
          <div className="my-2">Total Items  :<span id="total_items">{length}</span></div>
          <div className="my-2">Total Price  :<span id="total_price">{prices}</span></div>
          <button className=" btn btn-primary">Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Book;
