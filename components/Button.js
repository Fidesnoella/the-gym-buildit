const Button = ({ style, text }) => {
  return (
    <button className={`font-bold text-base rounded-md ${style}`}>
      {text}
    </button>
  );
};

export default Button;
