import Image from "next/image";

export const FeatureCard = ({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="grow flex items-center md:items-start flex-col gap-[30px]">
      <div className="w-[70px] h-[70px] rounded-full relative ">
        <Image
          src={image}
          alt={image}
          fill={true}
          
        />
      </div>
      <div className="font-medium text-2xl">
        <span>{title}</span>
      </div>
      <div className="text-center md:text-start text-[hsl(233,8%,62%)]">
        <span>{desc}</span>
      </div>
    </div>
  );
};
