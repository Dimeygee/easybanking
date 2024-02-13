import Link from "next/link";

export const MobileMenu = () => {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-[black]/30">
      <div className="mt-[90px] w-[90%] mx-auto bg-[white] rounded-[8px] flex flex-col items-center py-[30px] gap-[25px] font-p_sans text-darkblue">
        <li className="list-none">
          <Link href="#">Home</Link>
        </li>
        <li className="list-none">
          <Link href="#">About</Link>
        </li>
        <li className="list-none">
          <Link href="#">Contact</Link>
        </li>
        <li className="list-none">
          <Link href="#">Blog</Link>
        </li>
        <li className="list-none">
          <Link href="#">Careers</Link>
        </li>
      </div>
    </div>
  );
};
