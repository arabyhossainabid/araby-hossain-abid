import Image from "next/image";
import LogobarImage from "../../../../public/image/logo.svg";

const Logo = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-start p-4 z-50 bg-transparent">
      <Image
        src={LogobarImage}
        alt="ABID Logo"
        width={80}
        height={80}
        priority
        className="object-contain select-none"
      />
    </div>
  );
};

export default Logo;
