import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "../components/Earth";

const Hero = () => {
  return (
    <div className="font-poppins bg-gradient-to-br from-[#0d5574] via-[#337ba0] to-[#569fcb] p-4 h-screen w-full flex items-center  ">
      <div className="place-items-center   w-full h-full grid grid-cols-1 xl:grid-cols-3">
      
        <div className="xl:col-span-2 ">
          <h3 className="text-white text-center md:text-left xs:text-red-400 text-[30px] leading-[50px]  sm:text-[38px] sm:leading-[63px] md:text-[45px] md:leading-[60px]  lg:text-[55px] lg:leading-[70px] xl:text-[58px] font-bold leading-1 ml-5   xl:leading-[80px]">
            Empowering Performance <br />
            Through Engangement, <br />
            Appraisal Insight and <br />
            Innovation.
          </h3>
          <p className="md:text-base text-center md:text-left text-white ml-5 ">
            Discover Workplace Stars: Your Partner for Employee Engagement
            Surveys, Converting <br />
            Feedback into Actionable Insights, and Driving Business Excellence
            with Advanced <br />
            Performance Tech and Holistic Process Consulting.
          </p>
        </div>
        <div className="hidden xl:flex items-center w-full h-full xl:col-span-1 max-h-screen">
          <Canvas>
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
          </Canvas>
        </div>
      </div>
     
    </div>
  );
};

export default Hero;
