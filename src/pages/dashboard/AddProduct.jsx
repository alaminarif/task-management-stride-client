import toast from "react-hot-toast";

const AddProducts = () => {
  const token = localStorage.getItem("token");

  //
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const model = form.model.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const features = form.features.value;
    const technicalInfo = form.technicalInfo.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { title, brand, model, features, price, technicalInfo, description, image_url };
    // console.log(data);

    await fetch("https://task-management-stride-server.onrender.com/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Product added successful");
        form.reset();
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Add Product</h1>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="grid grid-cols-2 justify-items-center gap-6   text-black">
          <div className=" w-full my-4">
            <input className="bg-neutral p-4 w-full border border-primary rounded-lg" type="text" name="title" placeholder="Title" />
          </div>
          <div className=" w-full my-4">
            <input className="bg-neutral p-4 w-full border border-primary rounded-lg" type="text" name="brand" placeholder="Brand" />
          </div>
          <div className=" w-full">
            <input className="bg-neutral p-4 w-full border border-primary rounded-lg" type="text" name="model" placeholder="model" />
          </div>
          <div className="w-full">
            <input className="bg-neutral p-4 w-full border border-primary rounded-lg" type="text" name="price" placeholder="Price" />
          </div>
          <div className="w-full">
            <input
              className="bg-neutral p-4 w-full border border-primary rounded-lg"
              type="text"
              name="technicalInfo"
              placeholder="technical information"
            />
          </div>
          <div className="w-full">
            <input className="bg-neutral p-4 w-full border border-primary rounded-lg" type="text" name="features" placeholder="Features" />
          </div>
          <div className="w-full">
            <input className="bg-neutral p-4 w-full border border-primary rounded-lg" type="text" name="description" placeholder="Description" />
          </div>
          <div className="w-full">
            <input className="bg-neutral p-4 w-full border border-primary rounded-lg" type="text" name="image_url" placeholder="Image URL" />
          </div>
        </div>
        <div className="  mt-6  w-6/12">
          <input className="btn w-full bg-primary uppercase  p-4" type="submit" value="Add product" />
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
