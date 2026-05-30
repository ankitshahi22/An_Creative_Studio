const Input = ({ label, name, type = "text", error, ...props }) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700">{label}*</label>
      <input
        type={type}
        name={name}
        {...props}
        className="border-0 border-b border-gray-500 p-1 focus:outline-none focus:ring-2 focus:ring-transparent placeholder:text-sm"
      />
      {error && (
        <p className="text-yellow-600 text-sm">Please enter a valid {name}</p>
      )}
    </div>
  );
};

export default Input;
