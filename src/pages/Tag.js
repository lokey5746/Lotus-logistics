import delivery from "../assets/img/delivery.png";
import secure from "../assets/img/shield.png";
import hand from "../assets/img/handshake.png";
import track from "../assets/img/track.png";

function Tag() {
  return (
    <section className="px-8 md:max-w-6xl mx-auto w-full py-10 md:py-20">
      <h2 className="text-xl md:text-3xl font-semibold text-center">
        Why choose us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 md:mt-20">
        <figure className="flex flex-col items-center space-y-4">
          <img src={delivery} alt="" />
          <h2 className="text-lg md:text-xl font-semibold">Fast Delivery</h2>
          <p className="text-center text-xs md:text-sm text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </figure>

        <figure className="flex flex-col items-center space-y-4">
          <img src={secure} alt="" />
          <h2 className="text-lg md:text-xl font-semibold">Secure</h2>
          <p className="text-center text-xs md:text-sm text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </figure>
        <figure className="flex flex-col items-center space-y-4">
          <img src={hand} alt="" />
          <h2 className="text-lg md:text-xl font-semibold">Reliable</h2>
          <p className="text-center text-xs md:text-sm text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </figure>
        <figure className="flex flex-col items-center space-y-4">
          <img src={track} alt="" />
          <h2 className="text-lg md:text-xl font-semibold">Order Tracking</h2>
          <p className="text-center text-xs md:text-sm text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </figure>
      </div>
    </section>
  );
}

export default Tag;
