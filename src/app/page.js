import Banner from "@/components/homepage/Banner";
import PopularProducts from "@/components/PopularProducts";
import Image from "next/image";
export const metadata = {
  title: "SunCart | Home",
};
export default function Home() {
  return (
    <div>
      <Banner />
      <PopularProducts/>
    </div>
  );
}
