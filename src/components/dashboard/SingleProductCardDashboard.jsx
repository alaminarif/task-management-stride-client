/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ product, refetch }) => {
  const token = localStorage.getItem("token");
  const { _id, title, brand, price, image_url } = product;
  console.log(_id);

  const handleDelete = async () => {
    await fetch(`https://task-management-stride-server.onrender.com/products/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Product Deleted");
        refetch();
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="products" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        {/* <p>{description}</p> */}
        <div className="card-actions justify-end">
          <button className="btn bg-primary w-full">
            <Link to={`edit/${_id}`}>Edit</Link>
          </button>
          <button className="btn bg-primary w-full">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-300 w-full">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
