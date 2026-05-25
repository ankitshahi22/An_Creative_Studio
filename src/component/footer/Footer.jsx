const Footer = () => {
  return (
    <div className="flex justify-between w-[80%] mx-auto py-4 px-6">
      <div>
        <p className="text-neutral-500 text-[10px] font-medium">VERSION</p>
        <p className="text-neutral-500 text-xs font-semibold">
          2026 © Edition.
        </p>
      </div>
      <div>
        <p className="text-neutral-500 text-[10px] font-medium">LOCAL TIME</p>
        <p className="text-neutral-500 text-xs font-semibold">
          {new Date().toLocaleString("en-US", {
            timeZone: "Asia/Kathmandu",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
          <span className="text-neutral-500 text-xs ml-1 font-semibold">
            NPT
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
