import john from "../assets/img/John.png";

function Review() {
  return (
    <section className="px-8 md:max-w-6xl mx-auto w-full py-10 md:py-20">
      <h2 className="text-xl md:text-3xl font-semibold text-center">
        What our customers are saying...
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-20">
        <div className="bg-white shadow-md rounded-md px-5 py-10">
          <figure className="space-y-6">
            <div className="space-y-2 flex flex-col items-center">
              <img src={john} alt="" />
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-center text-sm text-gray">CEO</p>
              <p className="text-center text-sm text-gray">Company Name</p>
            </div>
            <div className="">
              <h2 className="text-base md:text-lg text-purple text-center">
                Prompt and reliable
              </h2>
              <p className="text-xs md:text-sm text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </figure>
        </div>
        <div className="bg-white shadow-md rounded-md px-5 py-10">
          <figure className="space-y-6">
            <div className="space-y-2 flex flex-col items-center">
              <img src={john} alt="" />
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-center text-sm text-gray">CEO</p>
              <p className="text-center text-sm text-gray">Company Name</p>
            </div>
            <div className="">
              <h2 className="text-base md:text-lg text-purple text-center">
                Prompt and reliable
              </h2>
              <p className="text-xs md:text-sm text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </figure>
        </div>
        <div className="bg-white shadow-md rounded-md px-5 py-10">
          <figure className="space-y-6">
            <div className="space-y-2 flex flex-col items-center">
              <img src={john} alt="" />
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-center text-sm text-gray">CEO</p>
              <p className="text-center text-sm text-gray">Company Name</p>
            </div>
            <div className="">
              <h2 className="text-base md:text-lg text-purple text-center">
                Prompt and reliable
              </h2>
              <p className="text-xs md:text-sm text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Review;
