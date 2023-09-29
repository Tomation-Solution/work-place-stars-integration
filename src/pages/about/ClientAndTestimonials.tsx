import Testimonial from '../../sections/Testimonial'
import bannerImage from "../../assets/top-banner-image.jpg";
import Banner from '../../components/Banner'

const ClientAndTestimonials = () => {
  return (
    <section className="font-poppins ">
      <Banner image={bannerImage} pageTitle="Client And Testimonials" />

      <div className="container px-5 mx-auto my-[70px]">
        <Testimonial />
      </div>
    </section>
  )
}

export default ClientAndTestimonials