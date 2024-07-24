import loader from '../assets/Images/LoginImg/loader.gif';
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-[#40F6FF] via-[#8786E4] to-[#FF98EB] bg-opacity-50 backdrop-blur-lg z-50">
      <div className="flex items-center justify-center bg-white bg-opacity-10 p-6 rounded-2xl shadow-lg backdrop-filter backdrop-blur-lg border border-white border-opacity-20">
        <img src={loader} alt="Loading..." className="w-24 h-24" />
      </div>
    </div>
  );
};

export default Loader;
