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
      "Our efficient delivery team, you can enjoy our delicious creations in the comfort of your home in no time. Whether it's a busy weeknight or a weekend treat, count on Pizza Hud for speedy service without compromising on quality. Your cravings are just a call away!",
  },
  {
    id: 2,
    image: `${img_2}`,
    icon: `${icon_2}`,
    title: "A Good Auto Responder",
    description:
      "At Pizza Hud, customer satisfaction is our top priority. Our friendly and dedicated customer care team is always ready to assist you with any questions or concerns. We're here to ensure you have a delightful dining experience every time.",
  },
  {
    id: 3,
    image: `${img_3}`,
    icon: `${icon_3}`,
    title: "Home Delivery",
    description:
      "Enjoy the convenience of Pizza Hud's home delivery service, bringing your favorite pizzas straight to your doorstep. Whether you're hosting a party or simply craving a night in, our prompt and reliable delivery ensures your meal arrives hot and fresh. Sit back, relax, and let us take care of your pizza needs!",
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
