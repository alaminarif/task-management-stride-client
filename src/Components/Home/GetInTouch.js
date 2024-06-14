import React , { useRef } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import "../Entry/Register.css";
const GetInTouch = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pg7eh8y', 'template_syp2b0d', form.current, 'VxMdW-cPTFgwTvLDE')
      .then((result) => {
          console.log(result.text);
          toast.success("message sent successfully");
          
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
        
            <div className=" lg:mt-12  shadow-xl">
  <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
    <div
    data-aos="fade-up"
    data-aos-duration="2000"
    className="lg:ml-24 ">
    <h1  className="text-3xl font-bold text-white">Contact with TMT</h1>
      <p className=" text-white  ">Address: Hathazari, Chittagong</p>
      <p className=" text-white ">Phone: +8801820082894</p>
      <p className=" text-white ">Email: arifulislam64743@gmail.com</p>
    </div>
    <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl">
      <div data-aos="fade-up"
     data-aos-duration="2000"
       className="card-body">
      <form ref={form} onSubmit={sendEmail}
       
        className="grid grid-cols-1 gap-4 mt-4 justify-items-center"
      >
        <input
          required
          type="text"
          name="user_name"
          placeholder = "Name"
          className="input  shadow input-bordered w-full max-w-xs"
        />
        <input
          required
          type="email"
          name="user_email"
          placeholder="Email"
          className="input shadow input-bordered w-full max-w-xs"
        />
        

        <textarea
        required
          type="text"
          name="message"
          placeholder="Type here..."
          className="input input-bordered shadow input-lg w-full h-32 max-w-xs "
        />
        
        <input
          type="submit" value="Send"
          className="btn hover:bg-teal-800   bg-teal-500 w-full my-4 text-white font-bold max-w-xs"
        />
      </form>
      </div>
      
    </div>
  </div>
</div>
    );
};

export default GetInTouch;