import image1 from '../assets/whoweare/img1.svg'
import image2 from '../assets/whoweare/img2.svg'
import image3 from '../assets/whoweare/img3.svg'
import QuickInfo from '../components/QuickInfo'


const WhoWeAre = () => {
  return (
    <>
    <div className="gap-y-10 font-poppins  flex items-center justify-center ">
        <div className='d-flex flex-col container p-3 mx-auto gap-10 ' >

            <div className=" px-4 2xl:px-10   flex flex-col md:flex-row gap-4 my-[60px] ">

                    <section className='flex flex-[0.4] lg:col-span-4 items-center' >
                        <h3 className='text-primary text-4xl md:text-6xl font-bold ' >WHO <span className='text-[#4285F4] text-[32px] md:text-4xl' >WE ARE</span></h3>
                        {/* <h3 className='flex items-center px-0' >

                            <h3 className='font-bold text-5xl text-primary p-0 xl:text-6xl my-0' >Who <span  className=' text-[42px] xltext-5xl font- ml-0 font-bold my-0'>WE ARE</span></h3>
                        </h3> */}
                    </section>
                    <section  className='flex-[0.6]' >
                        <p className='xl:text-[15px] text-justify text-sm md:text-base' >Workplace Stars LLC is a global enterprise transformation solution provider with focus on: performance improvement-based employee engagement solution, performance management system development as well as automation, business growth-based strategy development, process improvement and digitalization. Our solutions utilize technologies that simplifies service delivery for the effective and efficient operations of our numerous clients. </p>
                    </section>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[100px] gap-y-10 px-5"  >
                <QuickInfo image={image1} header="Why Choose Us" mainText="At Workplace Stars, you're a vital partners, and the value we bring to your businesses directly influences our organization's success. Our services are custom-tailored to meet your needs." />
                <QuickInfo  image={image2}  header='Our Mission' mainText='To improve companies’ growth, profitability, and peoples’ working lives, benefit society and create STAR Workplaces - 1 STAR at a time.' blueText={true} />
                <QuickInfo  image={image3} header='Our Vision' mainText='To become the transformational point for upwardly mobile organizations via effective and efficient strategy development, implementation and manpower utilization. ' />
            </div>
        </div>
    </div>
    </>
  )
}

export default WhoWeAre