const Skeleton = () => {
  return (
    <div className="relative transform animate-pulse rounded-lg border border-gray-100 bg-white p-4 transition duration-700 hover:scale-105 hover:shadow-xl">
      <span className="mb-4 inline-block rounded-full border border-gray-500 bg-gray-100 px-4 py-1"></span>
      <div className="mx-auto h-48 w-64 transform bg-gray-200 transition duration-300 hover:scale-105">
        {" "}
      </div>
      <div className="my-3 flex flex-col items-center space-y-2">
        <div className="w-36 bg-gray-300 py-3"></div>
        <p className="w-72 bg-gray-200 py-1"></p>
        <div className="w-24 bg-gray-200 py-2"></div>
        <button className="poppins mt-24 transform rounded-full bg-gray-400 px-8 py-3 text-white transition duration-300 hover:scale-105 focus:outline-none"></button>
      </div>
    </div>
  );
};

export default Skeleton;
