import { useState } from "react";
import SingleProductCardDashboard from "../../components/dashboard/SingleProductCardDashboard";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "../../hooks/useDebounce";
import { Link } from "react-router-dom";

const AllProducts = () => {
  // const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  //custom hooks for effitient search
  const debouncedSearch = useDebounce(search, 500);

  const url = `https://task-management-stride-server.onrender.com/products?search=${search}`;
  const {
    data: products,
    isPending,
    refetch,
  } = useQuery({ queryKey: ["products", debouncedSearch], queryFn: () => fetch(url).then((res) => res.json()) });

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
    console.log("রিয়াক্ট কুয়েরি ব্যবহার করছি তাই সার্চ হতে অনেক সময় অপেক্ষা করতে হয়");
    refetch();
  };
  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Products</h1>
      <div className="flex justify-between my-5">
        <form onSubmit={handleSearch} className="flex w-6/12">
          <input
            type="text"
            name="search"
            placeholder="Search by product title, name or price"
            className="input w-6/12 border-primary bg-neutral rounded-none  "
          />
          <input type="submit" value="Search" className="btn btn-primary rounded-none" />
        </form>
        <Link to={"add-products"} className="btn btn-primary flex items-center w-64 font-bold">
          <span className="text-xl font-extrabold">+</span> Add Product
        </Link>
      </div>
      <div className="my-16 flex flex-wrap gap-4 mx-14">
        {products?.map((product) => (
          <SingleProductCardDashboard key={product._id} product={product} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
