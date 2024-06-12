import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import { useDebounce } from "../hooks/useDebounce";
import { useState } from "react";
import SingleProduct from "../components/home/SingleProduct";
// import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  // const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  //custom hooks for effitient search
  const debouncedSearch = useDebounce(search, 500);
  // const navigate = useNavigate();

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
      <h1 className="text-4xl font-bold text-center uppercase my-6">Ours Products</h1>
      <form onSubmit={handleSearch} className="my-4 flex justify-center">
        <input type="text" name="search" placeholder="Search by product title, name or price" className="input w-4/12 border-primary rounded-none " />
        <input type="submit" value="Search" className="btn btn-primary rounded-none w-[120px]" />
      </form>
      <div className="my-16 flex  flex-wrap gap-4 mx-14">
        {products?.map((product) => (
          <SingleProduct key={product._id} product={product} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default Products;
