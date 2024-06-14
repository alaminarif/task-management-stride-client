import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../../Firebase/firebase.init";
import useNotifyMember from "../../hooks/useNotifyMember";

const ReviewYourTeamMember = () => {
  const [handleNotificationMember] = useNotifyMember()
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const adminEmail = admin?.email
  const handleReview = (event) => {
    event.preventDefault();
    const memberId = event.target.memberId.value;
    const description = event.target.description.value;
    const rating = event.target.rating.value;
    const review = { memberId, description, rating, adminEmail };

    const message = 'You received a review form your admin'
    const success = 'Your review has been added successfully'
    const navLink= '/dashboard'

    const url = `https://tm-tool.onrender.com/add-review?memberId=${memberId}&adminEmail=${adminEmail}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          handleNotificationMember({ memberId, message, success, navLink})
        }
        else if (data.message) {
          toast.error(data.message)
        }
      });
  };
  return (
    <div className="lg:px-12 text-charcoal font-sans leading-normal overflow-x-hidden lg:overflow-auto w-auto rounded-xl">
      <div className="flex-1 md:p-0 lg:pt-8 lg:pb-8  mx-auto flex flex-col rounded-xl">
        <section
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="shadow-xl rounded-xl w-2/4 mx-auto border-y-4 border-teal-500 px-10 ">
          <div className="md:flex">
            <h2 className=" uppercase mt-4 tracking-wide text-white font-bold text-sm sm:text-lg mb-6">
              Give a review to your teammate.
            </h2>
          </div>
          <form onSubmit={handleReview}>
            <div className="mb-8">
              <div className="md:flex-1 mt-2 mb:mt-0 ">
                <label className="block uppercase tracking-wide text-white text-xs font-bold p-2">
                  The member's ID
                </label>
                <input
                  required
                  name="memberId"
                  className="w-full shadow-inner p-4 border-0 rounded-xl"
                  placeholder="Enter the ID"
                ></input>
              </div>
              <div
                className="md:flex-1 mt-2 mb:mt-0 ">
                <label className="block uppercase tracking-wide text-white text-xs font-bold p-2">
                  Comment
                </label>
                <textarea
                  required
                  name="description"
                  className="w-full shadow-inner p-4 border-0 rounded-xl"
                  placeholder="Add a comment here..."
                ></textarea>
              </div>
              <div className="flex justify-end mt-2 mb:mt-0 md:px-3">
                <div className="md:flex w-full mb-4">
                  <div className="md:flex-1 md:pr-3 mb-4 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold">
                      Review Rating
                    </label>

                    <select name="rating" className="select  w-full max-w-xs">
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
              <div className="md:flex-1 px-3 text-center md:text-right">
                <button
                  type="submit"
                  className="btn bg-teal-500 hover:bg-teal-800 modal-button my-5 text-white"
                >
                  ADD Review
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ReviewYourTeamMember;
