import FooterInfo from "./FooterInfo";

const MainFooter = () => {
  // footer links
  const FooterLinks = [
    { id: 1, text: "About Project Details" },
    { id: 2, text: "Get Help" },
    { id: 3, text: "Ask any question" },
    { id: 4, text: "Order Now" },
    { id: 5, text: "Contact" },
    { id: 6, text: "Facebook" },
    { id: 7, text: "Instagram" },
    { id: 8, text: "Twitter" },
    { id: 9, text: "Youtube" },
  ];
  return (
    <div className="flex pb-8">
      <FooterInfo />
      {/* footer links  */}
      <div className="flex space-x-12">
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
