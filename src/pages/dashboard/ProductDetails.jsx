import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);
  const { brand, description, image_url, price, title } = product;

  return (
    <div className="">
      <div className="grid  grid-cols-2 mx-auto max-w-screen-xl my-6 px-6">
        {" "}
        <div className="">
          <img className="h-[600px]" src={image_url} alt="product image" />
        </div>
        <div className="">
          {" "}
          <h1 className="text-xl mt-10 font-bold">{title}</h1>
          <h3 className="text-2xl font-semibold"> Price: {price} $$</h3>
          <h3 className="text-xl font-semibold"> Brand: {brand}</h3>
          <p className="text-lg font-light text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
