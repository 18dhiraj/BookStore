import React ,{ useRef }from 'react'
import emailjs from 'email-js';
function Contact(){
    const form = useRef();

   const submit =(e)=>{

       e.preventDefault();
       
       emailjs.sendForm('service_vvvuoos', 'template_pnynufd', form.current, 'g83ETockaVNa6nJQh')
       .then((result) => {
           console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
        

    return(
        <>
        <div className='' style={{height: "90vh"}}>
            <div className=' h-50 bg-success'><img src='' alt=''/></div>
            <div className='h-50 bg-danger'><img src='' alt=''/></div>
            <div className='w-50 bg-primary py-5 d-flex align-items-center flex-column' style={{position: "absolute", top:"50%",left:"50%", transform: "translatey(-50%)"}}>
                <form  ref={form} onSubmit={submit} >
                <input className='my-2 w-75 border rounded' type="text" name='from_name' placeholder="First Name"/><br/>
                <input className='my-2 w-75 border rounded' type="email" name='email' placeholder="Email"/><br/>

                <textarea className='my-2 w-75 border rounded' type="text" name='message' placeholder= "message"></textarea><br/>
                <input  className='my-3 w-75 border rounded' type="submit" />
                </form>
            </div>
        </div>
        </>
    )
}
export default Contact