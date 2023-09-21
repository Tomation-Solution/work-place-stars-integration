import logo from '../assets/logo.svg'
import facebook from '../assets/Footer/facebook.svg'
import Twitter from '../assets/Footer/Twitter.svg'
import Instagram from '../assets/Footer/Instagram.svg'
import Linkedin from '../assets/Footer/LinkedIn.svg'

const Footer = () => {
  return (
    <footer className="bg-[#f5f6f7] text-center font-poppins lg:text-left">
     

      <div className="mx-6 py-10 sm:text-center text-left md:text-left text-black">
        <div className="grid-1 sm:grid-cols-2 grid gap-8 md:grid-cols-2 lg:grid-cols-5 ">
          <div className="col-span-1 lg:col-span-2 spacey-3">
            <h6 className="mb-4 flex items-center justify-left sm:justify-around font-semibold uppercase md:justify-start">
              
              <img src={logo} alt=""  />
            </h6>
            <p className='text-[15px] my-2'  >
            Discover Workplace Stars: Your Partner for Employee Engagement Surveys, Converting Feedback into Actionable Insights, and Driving Business Excellence with Advanced Performance Tech and Holistic Process Consulting.
            </p>
            <div className="flex items-center gap-2 flex-wrap" >
                    <p className="text-primary" >Business Address: 1601-1 N Main St #3159,Jacksonville, FL, USA</p>
                </div>
          </div>

          <div className="">
            <h6 className="mb-4 flex  justify-left sm:justify-center uppercase md:justify-start font-semibold">
              Quick Links
            </h6>
            <p className="mb-4">
              <a  className="text-black font-light ">
                Services
              </a>
            </p>
            <p className="mb-4">
              <a  className="text-black font-light ">
               About
              </a>
            </p>
            <p className="mb-4">
              <a  className="text-black font-light ">
               Contact Us
              </a>
            </p>
            <p>
              <a  className="text-black font-light ">
               Reasearch
              </a>
            </p>
          </div>

          <div className="">
            <h6 className="mb-4 flex justify-left sm:justify-center font-semibold uppercase md:justify-start ">
                ORG 360
            </h6>
            <p className="mb-4">
              <a  className="text-black font-light ">
                Visit Page
              </a>
            </p>
            <p className="mb-4">
              <a  className="text-black font-light ">
                Free Pulse
              </a>
            </p>
            <p className="mb-4">
              <a  className="text-black font-light ">
                Request Demo
              </a>
            </p>
           
          </div>
          <div className="">
            <h6 className="mb-4 flex  justify-left sm:justify-center uppercase md:justify-start font-semibold">
                E-metrics
            </h6>
            <p className="mb-4">
              <a  className="text-black font-light ">
                Visit Page
              </a>
            </p>
            <p className="mb-4">
              <a  className="text-black font-light ">
                Free Pulse
              </a>
            </p>
            <p className="mb-4">
              <a  className="text-black font-light ">
                Request Demo
              </a>
            </p>
           
          </div>

        
        </div>
      </div>

    
      <div className="flex  border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4">
          <img src={facebook} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Twitter} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
