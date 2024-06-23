const AboutItem = ({ id, image, icon, title, description }) => {
  return (
    <div className="transform rounded-2xl bg-white p-6 transition duration-700 hover:scale-105 hover:shadow-xl">
      {/* image  */}
      <div className="flex flex-grow overflow-hidden rounded-2xl">
        <img
          className="transform transition duration-700 hover:scale-125"
          src={image}
          alt={title}
        />
      </div>
      {/* other info  */}
      <div className="mt-6 flex space-x-3">
        {/* icon  */}
        <div>
          <img src={icon} alt={title} className="w-36" />
        </div>
        {/* description  */}
        <div className="flex flex-col space-y-3">
          <h1 className="poppins text-xl text-gray-800">{title}</h1>
          <p className="poppins text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
