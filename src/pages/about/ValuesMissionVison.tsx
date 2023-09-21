import image1 from '../../assets/whoweare/img1.svg'
import image2 from '../../assets/whoweare/img2.svg'
import image3 from '../../assets/whoweare/img3.svg'
import Banner from '../../components/Banner'
import QuickInfo from '../../components/QuickInfo'
import aboutImage from "../../assets/aboutus/about-us-img.jpg";

const ValuesMissionVison = () => {
  return (
    <section className='font-poppins'>
      <Banner image={aboutImage} pageTitle="Our Idealogies" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[100px] gap-y-10 px-5 my-[100px] max-w-8xl sm:mx-7 md:mx-5 xl:mx-10 mx-3"  >
    <QuickInfo image={image1} header="Why Choose Us" mainText="At Workplace Stars, you're a vital partner, and the value we bring to your businesses directly influences our organization's success. Our services are custom-tailored to meet your needs." />
    <QuickInfo  image={image2}  header='Our Mission' mainText='To improve companies’ growth, profitability, and peoples’ working lives, benefit society and create STAR Workplaces - 1 STAR at a time.' blueText={true} />
    <QuickInfo  image={image3} header='Our Vision' mainText='To become the transformational point for upwardly mobile organizations via effective and efficient strategy development, implementation and manpower utilization. ' />
</div>
    </section>
  )
}

export default ValuesMissionVison