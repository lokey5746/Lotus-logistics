function Stats() {
  return (
    <section className="bg-purple">
      <div className="px-8 md:max-w-6xl mx-auto w-full py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white items-center">
          <div className="flex flex-col items-center space-y-1">
            <h2 className="font-bold text-xl md:text-2xl">8</h2>
            <p className="uppercase text-base tracking-wider">services</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <h2 className="font-bold text-xl md:text-2xl">4</h2>
            <p className="uppercase text-base tracking-wider">countries</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <h2 className="font-bold text-xl md:text-2xl">180+</h2>
            <p className="uppercase text-base tracking-wider">Partners</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <h2 className="font-bold text-xl md:text-2xl">100K +</h2>
            <p className="uppercase text-base tracking-wider">Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
