import air from "../assets/img/Air.png";
import land from "../assets/img/Land.png";
import sea from "../assets/img/Sea.png";

function Service() {
  return (
    <section className="px-8 md:max-w-6xl mx-auto w-full md:py-10">
      <h2 className="text-xl md:text-3xl font-semibold text-center">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        <div className="bg-white shadow-md rounded-md px-5 py-5">
          <figure className="flex flex-col items-center">
            <img src={air} alt="" />
            <h2 className="text-lg md:text-2xl font-semibold -mt-10 ml-5 text-white">
              Air Freight
            </h2>
            <p className="text-xs md:text-sm py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              placerat semper felis id tristique ut magna augue.
            </p>
          </figure>
        </div>

        <div className="bg-white shadow-md rounded-md px-5 py-5">
          <figure className="flex flex-col items-center">
            <img src={land} alt="" />
            <h2 className="text-lg md:text-2xl font-semibold -mt-10 ml-5 text-white">
              Land Freight
            </h2>
            <p className="text-xs md:text-sm py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              placerat semper felis id tristique ut magna augue.
            </p>
          </figure>
        </div>
        <div className="bg-white shadow-md rounded-md px-5 py-5">
          <figure className="flex flex-col items-center">
            <img src={sea} alt="" />
            <h2 className="text-lg md:text-2xl font-semibold -mt-10 ml-5 text-white">
              Sea Freight
            </h2>
            <p className="text-xs md:text-sm py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              placerat semper felis id tristique ut magna augue.
            </p>
          </figure>
        </div>
        <div className="bg-white shadow-md rounded-md px-5 py-5">
          <figure className="flex flex-col items-center">
            <img src={land} alt="" />
            <h2 className="text-lg md:text-2xl font-semibold -mt-10 ml-5 text-white">
              Land Freight
            </h2>
            <p className="text-xs md:text-sm py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              placerat semper felis id tristique ut magna augue.
            </p>
          </figure>
        </div>
        <div className="bg-white shadow-md rounded-md px-5 py-5">
          <figure className="flex flex-col items-center">
            <img src={sea} alt="" />
            <h2 className="text-lg md:text-2xl font-semibold -mt-10 ml-5 text-white">
              Sea Freight
            </h2>
            <p className="text-xs md:text-sm  py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              placerat semper felis id tristique ut magna augue.
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Service;
