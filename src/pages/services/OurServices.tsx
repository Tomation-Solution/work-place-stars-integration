import Banner from "../../components/Banner";
import bannerImage from "../../assets/top-banner-image.jpg";
// import serviceImage from "../../assets/consultancy.jpg";
import OurServicesCard from "../../components/OurServicesCard";
import { allOurServicesCardData } from "../../data/ourServicesCardData";

const OurServices = () => {
  return (
    <section className="font-poppins ">
      <Banner image={bannerImage} pageTitle="Our Services" />

      {/* <div className="container px-5 m8xlax-w- text-base mx-auto grid  grid-cols-1 lg:grid-cols-2  gap-5 my-[70px]">
        <div className=" mb-[50px] font-light text-justify">
          <h3 className="special-section-header  text-2xl md:text-4xl my-5">
            Consultancy Services
          </h3>
          <p className="font-light">
            To achieve enduring strategic success, an organization must
            maintain robust strategic plans consistently. Enterprise Metric
            Suite Solutions Limited comprises a diverse team of seasoned
            professionals and consultants, each contributing their extensive
            expertise to every project we undertake. Our organizational
            framework includes a board, associates, and management team, all
            dedicated to delivering top-notch services to empower our clients in
            reaching their objectives. Feel free to enlist the support of our
            experts, and we'll supply you with all the resources necessary.
            <br />
            <button className="bg-primary text-white text-md font-semibold py-2 px-4 rounded-md my-4">
              Book an Appointment with Us
            </button>
          </p>
        </div>
        <div className="grid place-items-center ">
          <img src={serviceImage} className="rounded-md" alt="about Image" />
        </div>
      </div> */}
      <div className="h-full w-full  container px-3 mx-auto gap-7 my-[70px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
          {allOurServicesCardData.map((item,index)=>(
          <OurServicesCard key={index} serviceNumber={item.serviceNumber} renderedService={item.renderedService} aboutService={item.aboutService} buttonText={item.buttonText} linkToPage={item.linkToPage} isConsultancyButton={item.isConsultancyButton} />
          ))}          
        </div>
      </div>
    </section>
  );
};

export default OurServices;
