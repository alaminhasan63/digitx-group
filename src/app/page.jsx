// import Message from "@/components/Message";
import Banner from "@/components/home/Banner";
import BusinessAgency from "@/components/home/BusinessAgency";
import OurService from "@/components/home/OurService";
import RecentProject from "@/components/home/RecentProject";
import Review from "@/components/home/Review";
import SiteStatic from "@/components/home/SiteStatic";
import Footer from "@/components/home/Footer";
import Featured from "@/components/home/featured/Featured_tab";
const HomePage = () => {
  return (
    <>
      <main className="xl:max-w-[1900px] lg:max-w-[1024px] text-white md:max-w-[768px] max-w-[425px] mx-auto">
        <Banner />
        <Featured></Featured>
        {/* <RecentProject /> */}
        <OurService />
        <BusinessAgency />
        <SiteStatic />

        <Review></Review>
      </main>
    </>
  );
};

export default HomePage;
