import Banner from "../../components/Banner";
import bannerImage from "../../assets/top-banner-image.jpg";
import aboutImage from '../../assets/about-us.jpg'
import image1 from "../../assets/ourleaders/img1.svg"
import image3 from "../../assets/ourleaders/img3.svg";
import linkedin from "../../assets/ourleaders/linkdin.svg";

const OurTeam = () => {
  return (
    <section className="font-poppins">
      <Banner image={bannerImage} pageTitle="Our Team" />

      <div className="container px-5 text-base mx-auto grid  grid-cols-1 lg:grid-cols-2 my-5 gap-5">
        <div className="mt-[70px] mb-[50px] font-light text-justify ">
          <h3 className="special-section-header  text-2xl md:text-4xl my-5">
           About Our Team
          </h3>
          <p className="font-light">
          Workplace Stars LLC is made up of an intricate
            blend of professionals and consultants, who bring their years of
            experience and know-how to every project undertaken. Our structure
            consists of a board, associates, and management team; each ensuring
            that our clients receive the best services that would aid them in
            achieving their goals.
          </p>
        </div>
        <div className="grid place-items-center ">
          <img src={aboutImage} className="rounded-md" alt="about Image" />
        </div>
      </div>
      <section className="container mx-auto max-w-[90%] my-[80px]">
      <h3 className="special-section-header  text-2xl md:text-3xl my-5 text-center">
        Our Leaders
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center w-full">
        {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center w-full bg-red-400'> */}

        {/* Card 1 */}
        <div className="border shadow-lg p-2 border-gray-200 max-w-[400px] w-[320px] sm:w-[320px] ">
          <img src={image1} className="w-full" alt="" />
          <div className="flex p-3 items-center gap-3">
            <img src={linkedin} alt="" />
            <aside>
              <h3 className="font-bold text-base">Bob Ebers</h3>
              <p className="font-normal text-sm">Founder</p>
            </aside>
          </div>
        </div>

        {/* Middle Card */}
        <div className="border shadow-md p-4 border-gray-200 h-full max-w-[!400px] w-[300px] sm:w-[320px] text-justify">
          {/* Add content here */}
          Workplace Stars is made up of an intricate blend of professionals and
          consultants, who bring their years of experience and know-how to every
          project undertaken. Our structure consists of a board, associates, and
          management team; each ensuring that our clients receive the best
          services that would aid them in achieving their goals. Together, we
          are committed to fostering innovation and excellence in the workplace,
          making Workplace Stars your trusted partner in success.
        </div>

        {/* Card 3 */}
        <div className="border shadow-lg p-2 border-gray-200 max-w-[400px] w-[320px] sm:w-[320px] ">
          <img src={image3} alt="" />
          <div className="flex p-3 items-center gap-3">
            <img src={linkedin} alt="" />
            <aside>
              <h3 className="font-bold text-base">Emmanuel Madubuike</h3>
              <p className="font-normal text-sm">Partner</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
    </section>
  )
}

export default OurTeam