const Input = ({ label, name, type = "text" }) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700">{label}*</label>
      <input
        type={type}
        name={name}
        className="border-0 border-b border-gray-500 p-1 focus:outline-none focus:ring-2 focus:ring-transparent placeholder:text-sm text-sm"
      />
    </div>
  );
};

export default Input;
