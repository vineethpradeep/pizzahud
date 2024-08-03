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
      "Enjoy Pizza Hud's home delivery, bringing your favorite pizzas hot and fresh to your doorstep, fast and reliable!",
  },
  {
    id: 2,
    image: `${img_2}`,
    icon: `${icon_2}`,
    title: "A Good Auto Responder",
    description:
      "At Pizza Hud, customer satisfaction is our top priority. Our friendly team is ready to ensure a delightful dining experience!",
  },
  {
    id: 3,
    image: `${img_3}`,
    icon: `${icon_3}`,
    title: "Home Delivery",
    description:
      "Enjoy Pizza Hud's home delivery, bringing hot, fresh pizzas to your door. Perfect for parties or a cozy night in!",
  },
];

function AboutUs() {
  return (
    <section className="mx-auto my-12 max-w-screen-xl px-6">
      <div className="mx-auto my-12 max-w-screen-xl px-6">
        <h1 className="poppins pb-4 text-4xl">Why Pizzahud!</h1>
        <p className="poppins w-full text-sm text-gray-500 sm:w-2/4">
          Choose Pizza Hud for the freshest ingredients, unique flavors, and an
          unforgettable taste experience. Your perfect pizza adventure starts
          here!
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
