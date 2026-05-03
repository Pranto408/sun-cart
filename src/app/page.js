import Banner from "@/components/homepage/Banner";
import SummerCareTips from "@/components/homepage/SummerCareTips ";
import TopBrands from "@/components/homepage/TopBrands";
import PopularProducts from "@/components/homepage/PopularProducts";
import Image from "next/image";
export const metadata = {
  title: "SunCart | Home",
};
export default function Home() {
  return (
    <div>
      <Banner />
      <PopularProducts />
      <SummerCareTips />
      <TopBrands />
    </div>
  );
}
