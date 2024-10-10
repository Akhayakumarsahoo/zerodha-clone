import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgURL="kite.png"
        heading="Kite"
        para="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1="Try Demo"
        link2="Learn more"
        googlePlay="googlePlayBadge.svg"
        appStore="appstoreBadge.svg"
      />
      <RightSection
        imgURL="console.png"
        heading="Console"
        para="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link1="Learn more"
      />
      <LeftSection
        imgURL="coin.png"
        heading="Coin"
        para="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1="Coin"
        googlePlay="googlePlayBadge.svg"
        appStore="appstoreBadge.svg"
      />
      <RightSection
        imgURL="kiteconnect.png"
        heading="Kite Connect API"
        para="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link1="Kite Connect "
      />
      <LeftSection
        imgURL="varsity.png"
        heading="Varsity mobile"
        para="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="googlePlayBadge.svg"
        appStore="appstoreBadge.svg"
      />
      <p className="fs-5 my-5 py-5 text-center">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
