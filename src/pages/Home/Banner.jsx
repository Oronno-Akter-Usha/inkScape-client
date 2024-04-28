const Banner = () => {
  return (
    <div className="mb-20 mt-16">
      <div className="carousel w-full md:h-[700px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/hjLvMbJJ/pexels-leeloothefirst-6487189.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle text-amber-600">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle text-amber-600">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/BbJ6zLDm/pexels-shvetsa-5641958.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle text-amber-600">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle text-amber-600">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/9fqrwjCY/pexels-greta-hoffman-7858866.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle text-amber-600">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle text-amber-600">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/9M5zGNf5/pexels-aleksandr-slobodianyk-367235-989917.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn  btn-circle text-amber-600 ">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle text-amber-600">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
