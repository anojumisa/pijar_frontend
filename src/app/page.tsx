import Image from "next/image";
import Banner from "./component/banner";
import Topic from "./component/topic";

export default function Home() {
  return (
    <div>  
      <Banner />
      <Topic />
    </div>
  );
}
