import aboutImage from "../../assets/aboutus/about-us-img.jpg";
import Banner from '../../components/Banner'

const InternationalMarketEntry = () => {
  return (
    <section className="font-poppins">
      <Banner image={aboutImage} pageTitle="Our Services" />

      <div className="container px-5 m8xlax-w- mx-auto ">
        <div className="mt-[70px] mb-[50px] font-light text-justify">
          <h3 className="special-section-header  text-2xl md:text-4xl my-5">
            International Market Entry
          </h3>
          <p className="font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt dolores vero officiis error. Praesentium odit perspiciatis ipsum magni placeat reprehenderit minus quae optio aperiam dolor, tempora quidem, accusamus autem corporis.
            
          </p>
        </div>
      </div>
    </section>
  )
}

export default InternationalMarketEntry