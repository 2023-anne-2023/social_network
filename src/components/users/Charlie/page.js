import Image from "next/image";
import id1 from "@/../public/Charlie/1.jpeg";
import id2 from "@/../public/Charlie/2.jpeg";
import id3 from "@/../public/Charlie/3.jpeg";
import id4 from "@/../public/Charlie/4.jpeg";
import id5 from "@/../public/Charlie/5.webp";
export default function CharliePost() {
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
