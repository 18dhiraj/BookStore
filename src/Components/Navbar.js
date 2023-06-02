import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {

    const hide = () => {
        let div = document.getElementById("div")
        let sidenav = document.getElementById("sidenav")

        div.style.display = "none"
        sidenav.style.display = "none"
        document.body.style.overflow = "auto";
    }

    const show = () => {
        let div = document.getElementById("div")
        let sidenav = document.getElementById("sidenav")

        div.style.display = "block"
        sidenav.style.display = "block"
        document.body.style.overflow = "hidden";
    }
    return <>

        <div id='div' className='w-100' style={{
            height: "100vh", backgroundColor: "rgba(88, 88, 88, 0.521)", position: "absolute", top:
                "0", zIndex: "3"
        }}></div>
        <div className=' d-flex justify-content-between align-items-center bg-primary ' style={{ position: "sticky", top: "0px", zIndex: "5" }}>
            <div ><Link to='/' id='logo' className='text-light text-decoration-none mx-2 '>BookShop</Link></div>
            <div className='d-flex '>
                <div className=' navitems mx-4'>
                    <div className='  d-flex justify-content-between list-unstyled '>
                        <div className='p-3 '><Link to='/' className='text-light text-decoration-none '>Home</Link></div>
                        <div className='p-3'><Link to='/books' className='text-light text-decoration-none'>Books</Link></div>
                        {/* <div className='p-3'><Link to='/' className='text-light text-decoration-none'>Products</Link></div> */}
                    </div>
                </div>
                <div className=' navitems align-self-center mx-4'>
                    <div className='d-flex list-unstyled   '>
                        <div className='p-3 justify-self-between'><Link to='/contact' className='text-light text-decoration-none'>Contact</Link></div>
                        <div className='p-3 justify-self-between'><Link to='/cart' className='text-light text-decoration-none'>Cart</Link></div>
                    </div>
                </div>

                {/* for responsive navbar */}
                <div onClick={show} className=' navham align-self-center text-white p-3 mx-3 '>&#9776;</div>
                <div id='sidenav' className='  position-absolute top-0 end-0 w-50 bg-secondary ' style={{ height: "100vh", transition: "all 0.4s ease-in-out" }}>
                    <div onClick={hide} id="sideham" className='position-relative m-3 fs-6 text-white'>&#9776;</div>
                    <div className='py-1'> <Link onClick={hide} className='text-decoration-none text-dark mx-3 fs-6' to='/'>Home</Link></div>
                    <div className='py-1'> <Link onClick={hide} className='text-decoration-none text-dark mx-3 fs-6' to='/books'>Books</Link></div>
                    <div className='py-1'> <Link onClick={hide} className='text-decoration-none text-dark mx-3 fs-6' to='/'>Products</Link></div>
                    <div className='py-1'> <Link onClick={hide} className='text-decoration-none text-dark mx-3 fs-6' to='/contact'>Contact</Link></div>
                    <div className='py-1'> <Link onClick={hide} className='text-decoration-none text-dark mx-3 fs-6' to='/cart'>Cart</Link></div>
                </div>
            </div>
        </div>

    </>
}

export default Navbar