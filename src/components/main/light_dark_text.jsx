const LightDarkText = ({ lText, dText, color, rgText, date1 }) => {
  return (
    <div
      className=" flex justify-between m-4 font-sans text-sm"
      style={{ borderBottom: "1px solid rgb(212, 212, 212)" }}
    >
      <div className=" text-gray-400">{lText}</div>
      <div>
        <span>{dText}</span>
        <span className={`${color}`}>{rgText}</span>
        <div className=" font-light font-sans text-xs ">{date1}</div>
      </div>
    </div>
  );
};

export default LightDarkText;
