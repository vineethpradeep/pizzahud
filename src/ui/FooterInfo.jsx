import { SiCreativetechnology } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";
import { GiPlagueDoctorProfile } from "react-icons/gi";

function FooterInfo() {
  return (
    <div className="flex flex-grow items-center justify-center space-x-4 text-white md:space-x-12">
      <SiCreativetechnology className="h-16 w-16 sm:h-24 sm:w-24" />
      <GrLinkedinOption className="h-6 w-6 sm:h-8 sm:w-8" />
      <GiPlagueDoctorProfile className="h-6 w-6 sm:h-8 sm:w-8" />
    </div>
  );
}

export default FooterInfo;
