const Container = ({ children, variant = "primary", className = "", style }) => {
  const baseClasses =
    "mx-auto   p-[10px] border border-gray  rounded-[3px] w-full md:w-[75%] lg:w-[70%] ";

  const variants = {
    primary: "bg-[bisque]",
    secondary: "bg-white",
  };

  return (
    <div
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;
