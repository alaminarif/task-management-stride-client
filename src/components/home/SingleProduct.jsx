/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProduct = ({ product }) => {
  const { _id, title, price, image_url } = product;
  console.log(_id);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="products" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <h3 className="text-xl text-center font-semibold"> TK {price}</h3>
        <div className="card-actions justify-end">
          <button className="btn bg-primary uppercase w-full">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
