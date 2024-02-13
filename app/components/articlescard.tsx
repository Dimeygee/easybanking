import Image from "next/image";

export const ArticlesCard = ({
  image,
  author,
  title,
  content,
}: {
  image: string;
  author: string;
  title: string;
  content: string;
}) => {
  return (
    <div className="grow bg-[white]">
      <div className="h-[220px] relative w-full">
        <Image
          src={image}
          alt={image}
          fill={true}
          style={{ borderTopRightRadius: "7px", borderTopLeftRadius: "7px" }}
        />
      </div>
      <div className="py-[30px] px-[25px] flex gap-[18px] flex-col">
        <small className="text-[hsl(233,8%,62%)]">{author}</small>
        <h4 className="text-base md:text-2xl hover:text-[hsl(136,65%,51%)] cursor-pointer text-darkblue">{title}</h4>
        <p className="text-[hsl(233,8%,62%)] text-sm md:text-base">{content}</p>
      </div>
    </div>
  );
};
