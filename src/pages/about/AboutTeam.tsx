import Banner from "../../components/Banner";
import aboutImage from "../assets/aboutus/about-us-img.jpg";

const AboutTeam = () => {
  return (
    <section className="font-poppins">
      <Banner image={aboutImage} pageTitle="Our Team" />

      <div className="container px-5 m8xlax-w- mx-auto ">
        <div className="mt-[70px] mb-[50px] font-light text-justify">
          <h3 className="special-section-header  text-2xl md:text-4xl my-5">
           About Our Team
          </h3>
          <p className="font-light">
            Enterprise Metric Suite Solutions Limited is made up of an intricate
            blend of professionals and consultants, who bring their years of
            experience and know-how to every project undertaken. Our structure
            consists of a board, associates, and management team; each ensuring
            that our clients receive the best services that would aid them in
            achieving their goals.
            <div className="space-y-2 my-3">
              <p>1. Robert P Ebers</p>

              <p>2. Emmanuel Madubuike</p>

              <p>3. Mark Smith</p>

              <p>4. Emmanuel Moses</p>
            </div>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutTeam