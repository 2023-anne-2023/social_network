import Image from "next/image";
import id1 from "@/../public/Mary/1.jpeg";
import id2 from "@/../public/Mary/2.jpg";

export default function MaryPost() {
  return (
    <div>
      <Image src={id1} alt="post1" width="300" height="300" className="limg" />
      <Image src={id2} alt="post2" width="300" height="300" className="limg" />
    </div>
  );
}
