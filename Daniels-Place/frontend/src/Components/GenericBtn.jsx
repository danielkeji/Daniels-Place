export default function GenericBtn({ text, style }) {
  return (
    <button
      className={`relative group uppercase font-black ${style} my-[70px] px-4 py-3 w-[100px] overflow-hidden`}
    >
      <span className="relative z-10">{text}</span>

      {/* ::before */}
      <span
        className="absolute left-0 bottom-0 w-full h-[4px] border-b-[4px] border-l-[4px] border-transparent box-border transform translate-x-full group-hover:translate-x-0 group-hover:h-full transition-[transform,height] duration-300 ease-linear group-hover:delay-300"
        style={{ borderColor: "#262626" }}
      ></span>

      {/* ::after */}
      <span
        className="absolute top-0 left-0 w-full h-[4px] border-t-[4px] border-r-[4px] border-transparent box-border transform -translate-x-full group-hover:translate-x-0 group-hover:h-full transition-[transform,height] duration-300 ease-linear group-hover:delay-500"
        style={{ borderColor: "#262626" }}
      ></span>

      {/* Optional hover shadow */}
      <span className="absolute inset-0 z-0 group-hover:shadow-md transition-shadow duration-300"></span>
    </button>
  );
}
