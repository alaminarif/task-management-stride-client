import banner from "../../assets/banner.png";
// import bannerTree from "../../assets/banner-tree.png";

export default function Banner() {
  return (
    <div
      className="hero min-h-screen bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-md text-center">
          <p>2024 COLLECTION</p>
          <h1 className="mb-5 text-5xl font-bold">Discover top rated items</h1>
          {/* <p className="mb-5 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
            id nisi.
          </p> */}
          {/* <button className="btn btn-primary"></button> */}
          {/* <form onSubmit={handleSearch}>
            <input type="text" name="search" id="" className="input" />
            <input type="submit" value="Search" className="btn btn-primary" />
          </form> */}
          <button className="btn btn-primary uppercase">Discover now</button>
        </div>
      </div>
    </div>
  );
}
