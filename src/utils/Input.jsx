const Input = ({ label, name, type = "text", error, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-[#bbb] tracking-widest uppercase">
        {label}
      </label>
      <input
        type={type}
        name={name}
        {...props}
        className="bg-transparent border-0 border-b border-[#e8e8e8] pb-2 text-sm text-[#111] placeholder:text-[#ccc] focus:outline-none focus:border-[#0EA5E9] transition-colors"
      />
      {error && (
        <p className="text-[#999] text-xs">Please enter a valid {name}</p>
      )}
    </div>
  );
};

export default Input;
