import Image from "next/image";
import Banner from "./component/banner";
import Topic from "./component/topic";
import UpcomingSession from "./component/upcoming";

export default function Home() {
  return (
    <>  
      <Banner />
      <Topic />
      <UpcomingSession />
    </>
  );
}
