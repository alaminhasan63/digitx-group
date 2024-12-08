export default function TitleHeader({ title, secondaryTitle, description }) {
  return (
    <div className="mx-auto md:max-w-6xl max-w-xs">
      {title && (
        <div className="flex items-center ">
          <div className=" w-[80px] h-[5px]  bg-[#FF00F6]"></div>
          <h3 className="ml-3 text-xl w-[250px] text-white ">{title}</h3>
        </div>
      )}
      {secondaryTitle && (
        <h1 className="text-3xl font-bold  text-white  md:mt-10">{secondaryTitle}</h1>
      )}
      {description && (
        <p className="text-white md:w-[60%] md:text-base text-sm mt-2 md:mt-3 ">{description}</p>
      )}
    </div>
  );
}
