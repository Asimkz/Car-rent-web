import Layout from "@/components/layout/Layout"
import App from "@/components/sections/App"
import Banners from "@/components/sections/Banners"
import Banners2 from "@/components/sections/Banners2";
import Blog1 from "@/components/sections/Blog1"
import Brand1 from "@/components/sections/Brand1"
import Brand2 from "@/components/sections/Brand2";
import CarReview1 from "@/components/sections/CarReview1"
import CarsListing1 from "@/components/sections/CarsListing1"
import CarsListing2 from "@/components/sections/CarsListing2"
import Categories1 from "@/components/sections/Categories1"
import Cta1 from "@/components/sections/Cta1"
import Cta2 from "@/components/sections/Cta2"
import Cta3 from "@/components/sections/Cta3"
import Cta6 from "@/components/sections/Cta6";
import Hero1 from "@/components/sections/Hero1"
import Review2 from "@/components/sections/Review2";
import Search1 from "@/components/sections/Search1"
import Services1 from "@/components/sections/Services1"
import Static1 from "@/components/sections/Static1";
import Testimonials from "@/components/sections/Testimonials"
import WhyUs1 from "@/components/sections/WhyUs1"

export default function Home() {

	return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <Hero1 />
        {/* <Search1 /> */}
        {/* <CarsListing2 /> */}
        <Brand2 noBg />
        <WhyUs1 cls="background-100 pt-96" />
        <Banners2 />
        <Cta6 />
        <Static1 />
        {/* <Categories1 /> */}
        {/* <Cta7 /> */}
        {/* <CarsListing5 /> */}
        <Testimonials />
        {/* <Services1 /> */}
        <Review2 />
        {/* <Team1 /> */}
        {/* <Blog1 /> */}
        {/* <App /> */}
      </Layout>
    </>
  );
}