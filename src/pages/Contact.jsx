const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="hero min-h-screen bg-neutral">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">We’re here to help you!</h1>
            <p className="py-6">
              Have a question, comment, or brilliant idea you like to share? Send us a little note <br /> below - we love to hear from you and will
              always reply!.
            </p>
            <div className="">
              <div>
                <p className="py-3">
                  Phone Number Call <br />
                  Us: 800-123-4567
                </p>
                <p>
                  Location 2972 Westheimer Rd. Santa Ana, <br /> Illinois 85486
                </p>
              </div>
              <div>
                <p className="py-3">
                  Email: <br /> demo@demo.com
                </p>
                <p>
                  Opening Hours <br /> Mon-Fri: 9:00 am - 6:00 pm Sat: 9:00 am - 4:00 pm Sun: 9:00 am - 2:00 pm
                </p>
              </div>
            </div>
          </div>
          <div className="card  w-full max-w-sm ">
            <h1 className="text-2xl font-bold">Do you want to get in touch?</h1>
            <p className="py-6">Let us know how we can help you.</p>
            <form className="card-body bg-neutral shadow-2xl rounded-lg px-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" placeholder="name" className="input input-bordered bg-" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea type="text" placeholder="message" className="input input-bordered" required />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary uppercase">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
