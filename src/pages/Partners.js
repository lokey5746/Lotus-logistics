import usp from "../assets/img/usps.png";
import dhl from "../assets/img/dhl.png";
import ups from "../assets/img/ups.png";
import cart from "../assets/img/instacart.png";
import amazon from "../assets/img/amazon.png";
import fedex from "../assets/img/fedex.png";

function Partners() {
  return (
    <section className="px-8 md:max-w-6xl mx-auto w-full py-5 md:py-10">
      <h2 className="text-xl md:text-3xl font-semibold text-center">
        Our Partners and Associates
      </h2>
      <div className="grid grid-cols-3 gap-6 md:grid-cols-6 place-items-center text-white items-center mt-10">
        <figure>
          <img src={usp} alt="" />
        </figure>
        <figure>
          <img src={dhl} alt="" />
        </figure>
        <figure>
          <img src={ups} alt="" />
        </figure>
        <figure>
          <img src={cart} alt="" />
        </figure>
        <figure>
          <img src={amazon} alt="" />
        </figure>
        <figure>
          <img src={fedex} alt="" />
        </figure>
      </div>
    </section>
  );
}

export default Partners;
