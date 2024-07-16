const Button = ({ text }) => {
  return (
    <button className="bg-[#DCFFEB] font-semibold text-[#02681F] px-5 py-3 rounded-lg shadow-lg hover:bg-[#02681F] hover:text-[#DCFFEB] duration-300">
      {text}
    </button>
  );
};

export default Button;
