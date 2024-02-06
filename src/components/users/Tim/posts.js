import Image from "next/image";
import id1 from "@/../public/Tim/1.jpg";
import id2 from "@/../public/Tim/2.jpg";
import id3 from "@/../public/Tim/3.jpg";
import id4 from "@/../public/Tim/4.jpg";
import id5 from "@/../public/Tim/5.jpg";

export default function TimPost() {
  return (
    <div>
      <Image src={id1} alt="post1" width="300" height="300" className="limg" />
      <Image src={id2} alt="post2" width="300" height="300" className="limg" />
      <Image src={id3} alt="post3" width="300" height="300" className="limg" />
      <Image src={id4} alt="post3" width="300" height="300" className="limg" />
      <Image src={id5} alt="post3" width="300" height="300" className="limg" />
    </div>
  );
}
