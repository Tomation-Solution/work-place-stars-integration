
import heroImg from '../assets/hero-img.jpg'
const Hero = () => {
  return (
<div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroImg})`}}>
<div className="absolute inset-0 bg-gradient-to-br from-[#0d5574] via-[#337ba0] to-[#569fcb] opacity-90"></div>
<div className="absolute inset-0 flex items-center justify-center">
  <div className="text-white text-center md:text-left xs:text-red-400 leading-[50px] sm:text-[38px] sm:leading-[63px] md:text-[45px] md:leading-[60px] lg:text-[55px] lg:leading-[70px] xl:text-[58px] font-bold leading-1 ml-5 xl:leading-[80px]">
    <h3 className='' >
      Empowering Performance <br />
      Through Engagement, <br />
      Appraisal Insight, and <br />
      Innovation.
    </h3>
    <p className="md:text-base text-center md:text-left ml-5">
      Discover Workplace Stars: Your Partner for Employee Engagement Surveys, Converting <br />
      Feedback into Actionable Insights, and Driving Business Excellence with Advanced <br />
      Performance Tech and Holistic Process Consulting.
    </p>
  </div>
  {/* <div className='col-span-1'> */}
    {/* Your image goes here */}
    {/* <img src={heroImg} alt="" srcset="" /> */}
  {/* </div> */}
</div>
</div>
  );
};

export default Hero;
