import mission from "../assets/img/mission.png";
import value from "../assets/img/values.png";

function About() {
  return (
    <section className="px-8 md:max-w-6xl mx-auto w-full md:py-10">
      <h2 className="text-xl md:text-3xl font-semibold text-center">
        About Us
      </h2>
      <p className="text-center text-sm mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor nisl
        diam sit interdum proin ornare lectus nec viverra. Aliquam morbi sed id
        accumsan, faucibus. Feugiat a, porta sit egestas tellus bibendum.
        Senectus diam neque, eu, vitae viverra pellentesque netus. Ornare nisl
        leo blandit nibh pharetra netus. Pellentesque orci quisque tellus
        ultrices iaculis commodo est. Libero, nascetur feugiat vitae id lacus
        aliquet senectus etiam. Est elit nibh rhoncus mauris diam ipsum magna
        tristique odio. Hac nam ultricies gravida arcu, eleifend purus.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-6">
        <div>
          <h2 className="text-lg md:text-2xl font-bold">Our Mission</h2>
          <ul className="space-y-8 text-xs md:text-sm list-disc mt-5">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, ac
              nunc, porttitor vestibulum eu. Malesuada at tellus amet, est
              semper in eget lorem lorem.{" "}
            </li>
            <li>
              Tempor nunc eget risus egestas. Ornare adipiscing proin eget risus
              tristique consectetur amet.
            </li>
            <li>
              Tempor nunc eget risus egestas. Ornare adipiscing proin eget risus
              tristique consectetur amet.
            </li>
          </ul>
        </div>

        <figure>
          <img src={mission} alt="" />
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-6">
        <figure>
          <img src={value} alt="" />
        </figure>
        <div>
          <h2 className="text-lg md:text-2xl font-bold">Our Values</h2>
          <ul className="space-y-8 text-xs md:text-sm list-disc mt-5">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, ac
              nunc, porttitor vestibulum eu. Malesuada at tellus amet, est
              semper in eget lorem lorem.{" "}
            </li>
            <li>
              Tempor nunc eget risus egestas. Ornare adipiscing proin eget risus
              tristique consectetur amet.
            </li>
            <li>
              Tempor nunc eget risus egestas. Ornare adipiscing proin eget risus
              tristique consectetur amet.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
