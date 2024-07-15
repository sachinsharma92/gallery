import CenterContainer from "@/components/homepage/centerContainer";
import LeftBar from "@/components/homepage/leftBar";
import RightBar from "@/components/homepage/rightBar";

export default function HomePage() {
  return (
    <section className="homepage-layout">
      <RightBar />
      <CenterContainer />
      <LeftBar />
    </section>
  );
}
