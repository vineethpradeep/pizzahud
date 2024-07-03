import AboutItem from "./AboutItem";
import img_1 from "../assets/img_1.png";
import img_2 from "../assets/img_2.png";
import img_3 from "../assets/img_3.png";
import icon_1 from "../assets/icon_1.png";
import icon_2 from "../assets/icon_2.png";
import icon_3 from "../assets/icon_3.png";

const aboutFakeContent = [
  {
    id: 1,
    image: `${img_1}`,
    icon: `${icon_1}`,
    title: "Fast Delivery",
    description:
      "Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.",
  },
  {
    id: 2,
    image: `${img_2}`,
    icon: `${icon_2}`,
    title: "A Good Auto Responder",
    description:
      "Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.",
  },
  {
    id: 3,
    image: `${img_3}`,
    icon: `${icon_3}`,
    title: "Home Delivery",
    description:
      "Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.",
  },
];

function AboutUs() {
  return (
    <section className="mx-auto my-12 max-w-screen-xl px-6">
      <div className="mx-auto my-12 max-w-screen-xl px-6">
        <h1 className="poppins pb-4 text-4xl">Why you choose us</h1>
        <p className="poppins w-full text-sm text-gray-500 sm:w-2/4">
          Barton waited twenty always repair in within we do. AN delighted
          offending curiosity my is dashwoods at. Boy prosperous increasing
          surrounded.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {aboutFakeContent.map((item) => (
            <AboutItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default AboutUs;
