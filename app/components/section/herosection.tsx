import { Button } from "../button";
import { Wrapper } from "../wrapper";
import Image from "next/image";
import { Desktop, Mobile } from "@/app/icon";

export const HeroSection = () => {
  return (
    <div className="relative bg-verylGray">
      <div className="md:hidden flex justify-center overflow-hidden h-[45vh] relative">
        <Mobile />
        <div className="absolute z-10 w-[100%] h-[510px] mt-[-150px]">
          <Image src="/images/image-mockups.png" alt="'" fill={true} />
        </div>
      </div>
      <Wrapper>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[450px] font-p_sans pb-[100px] md:py-[200px] md:text-start text-center flex flex-col items-center md:items-start md:relative order-2 md:order-1">
            <h3 className="text-[36px] md:text-[46px] text-darkblue md:leading-[60px] leading-[40px]">
              Next generation digital banking
            </h3>
            <p className="mt-[30px] mb-[40px] text-[hsl(233,8%,62%)]">
              Take your financial life online. Your Easybank account will be
              one-stop shop for spending, saving, budgeting, investing and much
              more
            </p>
            <Button />
          </div>
        </div>
      </Wrapper>
      <div className="md:order-2 absolute top-0 right-0 h-full w-[50%]">
        <div className="relative w-full h-full">
          <Desktop />
          <div className="absolute w-full h-full top-0 z-10">
            <div className="relative w-full h-[120vh] mt-[-220px] ml-[140px] pl-[-270px]">
              <Image src="/images/image-mockups.png" alt="" fill={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
