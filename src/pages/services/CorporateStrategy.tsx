import Banner from "../../components/Banner";
import bannerImage from "../../assets/top-banner-image.jpg";
import strategyImage from '../../assets/corporate-strategy.jpg'

const CorporateStrategy = () => {
  return (
    <section className="font-poppins ">
      <Banner image={bannerImage} pageTitle="Our Services" />

      <div className="container px-5 m8xlax-w- text-base mx-auto grid  grid-cols-1 lg:grid-cols-2  gap-5 my-[70px]">
        <div className=" mb-[50px] font-light text-justify">
          <h3 className="special-section-header  text-2xl md:text-4xl my-5">
            Corporate Strategy
          </h3>
          <p className="font-light">
            For an organization to truly have long-term strategic success,
            strong strategic plans are needed at every point in time for such
            organization. Our approach to the development of corporate strategy
            at is designed to ensure that organizations produce better plans for
            how they can effectively respond to the new and emerging future.
            Most importantly, a plan that prepares the business for growth
            through innovation. An effective corporate strategy is an important
            component of any successful organization. A well-developed strategy
            has the potential to cause significant growth, increase in profit,
            and long-term success. However, a corporate strategy that is poorly
            planned can result in disaster. We are available to partner with
            your organization in ensuring you have a well-defined strategy
            alongside clearly captured action points among others.
          </p>
        </div>
        <div className="grid place-items-center ">
          <img src={strategyImage} className="rounded-md" alt="about Image" />
        </div>
      </div>
    </section>
  );
};

export default CorporateStrategy;
