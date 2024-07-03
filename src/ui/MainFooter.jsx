import FooterInfo from "./FooterInfo";

const MainFooter = () => {
  const FooterLinks = [
    { id: 3, text: "Ask any question" },
    { id: 4, text: "Order Now" },
    { id: 5, text: "Contact" },
    { id: 8, text: "Twitter" },
    { id: 9, text: "Youtube" },
  ];
  return (
    <div className="flex flex-row pb-8">
      <FooterInfo />
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-12 md:space-y-0">
        <div className="flex flex-col space-y-2">
          {FooterLinks.slice(0, 3).map((item) => (
            <span className="poppins text-white" key={item.id}>
              {item.text}
            </span>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          {FooterLinks.slice(3, 6).map((item) => (
            <span className="poppins text-white" key={item.id}>
              {item.text}
            </span>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          {FooterLinks.slice(6, 9).map((item) => (
            <span className="poppins text-white" key={item.id}>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
