import { SiCreativetechnology } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";
import { GiPlagueDoctorProfile } from "react-icons/gi";

function FooterInfo() {
  return (
    <div className="flex flex-grow items-center justify-center space-x-12 text-white">
      <SiCreativetechnology className="h-24 w-24" />
      <GrLinkedinOption className="h-8 w-8" />
      <GiPlagueDoctorProfile className="h-8 w-8" />
    </div>
  );
}

export default FooterInfo;
