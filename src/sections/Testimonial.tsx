import TestimonialCard from "../components/TestimonialCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonies } from "../data/testimonialData";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Testimonial = () => {
  return (
    <div className="my-[80px] font-poppins">
      <div className="h-full w-full  container px-3 mx-auto gap-7">
      <h3 className="text-center text-primary text-5xl font-bold my-10">
        TESTIMONIALS
      </h3>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        // arrows={false}
        rewind={true}
        //  rewindWithAnimation={true}
        // infinite={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        className="container"
        // pauseOnHover={false}
      >
        {testimonies.map((item,index)=>(
          <TestimonialCard key={index} nameOfTestifier={item.nameOfTestifier} testimony={item.testimony} role={item.role} nameOfLink={item.nameOfLink} companyURL={item.companyURL}  />
        ))}
        

        
      </Carousel>
        </div>
      </div>
  )
}

export default Testimonial