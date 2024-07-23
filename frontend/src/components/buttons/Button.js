const Button = ({ children, onButtonClick, className }) => {
  return (
    <div>
      <button
        className={`bg-teal-500 hover:bg-teal-600 text-white font-mono py-1 px-1 rounded ${className}`}
        onClick={onButtonClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
