import stanc from "/stanc-logo.png";
export default function () {
  return (
    <div className="w-full h-20 flex flex-row justify-between items-center  max-w-[1550px] mx-auto">
      <img className="w-20 h-20" src={stanc} alt="" />
      <button className="border-1 border-white px-2 py-1 rounded-md cursor-pointer hover:bg-white hover:text-black hover:font-semibold hover:scale-110 transition-all duration-200">
        View Resume
      </button>
    </div>
  );
}
