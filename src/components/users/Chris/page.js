import Image from "next/image";
import id1 from "@/../public/Chris/1.jpg";
import id2 from "@/../public/Chris/2.jpeg";
import id3 from "@/../public/Chris/3.jpeg";
import id3 from "@/../public/Chris/3.jpeg";
export default function ChrisPost() {
  return (
    <div>
      <Image src={id1} alt="post1" width="300" height="300" className="limg" />
      <Image src={id2} alt="post2" width="300" height="300" className="limg" />
      <Image src={id3} alt="post3" width="300" height="300" className="limg" />
      <Image src={id3} alt="post3" width="300" height="300" className="limg" />
    </div>
  );
}
