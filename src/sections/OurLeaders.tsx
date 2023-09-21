import image1 from "../assets/ourleaders/img1.svg";
// import image2 from '../assets/ourleaders/img2.svg'
import image3 from "../assets/ourleaders/img3.svg";
import linkedin from "../assets/ourleaders/linkdin.svg";
const OurLeaders = () => {
  return (
    <section className="container mx-auto max-w-[90%] ">
      <h3 className="text-center text-primary text-5xl font-bold my-10">
        OUR <span className="text-[#4285F4]"> LEADERS</span>
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
              <p className="font-normal text-sm">President & Founder</p>
            </aside>
          </div>
        </div>

        {/* Middle Card */}
        <div className="border shadow-md p-4 border-gray-200 h-full max-w-[!400px] w-[300px] sm:w-[320px] text-justify">
          {/* Add content here */}
          Enterprise Metric Suite Solutions Limited is made up of an intricate
          blend of professionals and consultants, who bring their years of
          experience and know-how to every project undertaken. Our structure
          consists of a board, associates, and management team; each ensuring
          that our clients receive the best services that would aid them in
          achieving their goals.
          1.	Robert P Ebers
2.	Emmanuel Madubuike
3.	Mark Smith
4.	Emmanuel Moses

        </div>

        {/* Card 3 */}
        <div className="border shadow-lg p-2 border-gray-200 max-w-[400px] w-[320px] sm:w-[320px] ">
          <img src={image3} alt="" />
          <div className="flex p-3 items-center gap-3">
            <img src={linkedin} alt="" />
            <aside>
              <h3 className="font-bold text-base">Emmanuel Madubuike</h3>
              <p className="font-normal text-sm">President & Founder</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLeaders;
