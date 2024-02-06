import Image from "next/image";
import id1 from "@/../public/Laura/1.jpg";
import id2 from "@/../public/Laura/3.jpg";
import id3 from "@/../public/Laura/4.jpg";

export default function LauraPost() {
  return (
    <div>
      <Image src={id1} alt="post1" width="300" height="300" className="limg" />
      <Image src={id2} alt="post2" width="300" height="300" className="limg" />
      <Image src={id3} alt="post3" width="300" height="300" className="limg" />
    </div>
  );
}
