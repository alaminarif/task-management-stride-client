/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */

// import axios from "axios";
// import { useParams } from "react-router-dom";

// const ConfirmationModal = ({ deleteproduct, setDeleteproduct }) => {
//   const { title, id } = deleteproduct;
//   // const { id } = useParams();

//   const handleDelete = async (id) => {
//     const data = await axios.delete(`http://localhost:3000/products/${id}`);

//     setDeleteproduct(null);
//   };

//   return (
//     <div>
//       {/* <button className="btn " onClick={() => document.getElementById("my_modal_5").showModal()}>
//         open modal
//       </button> */}
//       <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//         <div className="modal-box">
//           <h3 className="font-bold text-lg">Hello!</h3>
//           <p className="py-4">Press ESC key or click the button below to close ${title} </p>
//           <div className="modal-action">
//             <form method="dialog">
//               {/* if there is a button in form, it will close the modal */}
//               <button className="btn">Close</button>
//               <button className="btn btn-xs btn-error" onClick={() => handleDelete(id)}>
//                 delete
//               </button>
//             </form>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// export default ConfirmationModal;
