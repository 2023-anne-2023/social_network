import Image from "next/image";
import id1 from "@/../public/Nicola/1.png";
import id2 from "@/../public/Nicola/2.png";

export default function NicolaPost() {
  return (
    <div>
      <Image src={id1} alt="post1" width="300" height="300" className="limg" />
      <Image src={id2} alt="post2" width="300" height="300" className="limg" />
      <Image src={id3} alt="post3" width="300" height="300" className="limg" />
    </div>
  );
}
