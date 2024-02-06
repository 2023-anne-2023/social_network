import Image from "next/image";
import id1 from "@/../public/John/1.jpeg";
import id2 from "@/../public/John/2.jpeg";
import id3 from "@/../public/John/3.jpeg";
export default function JohnPost() {
  return (
    <div>
      <Image src={id1} alt="post1" width="300" height="300" className="limg" />
      <Image src={id2} alt="post2" width="300" height="300" className="limg" />
      <Image src={id3} alt="post3" width="300" height="300" className="limg" />
    </div>
  );
}
