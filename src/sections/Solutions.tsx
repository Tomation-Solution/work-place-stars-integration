import SolutionsCard from "../components/SolutionsCard";
import emetric from '../assets/solutions/emetric.svg'
import org from '../assets/solutions/org.svg'
import sequential from '../assets/solutions/sequential.svg'
const Solutions = () => {
  return (
    <div className="my-[80px] font-poppins">
      <div className="h-full w-full  container px-3 mx-auto gap-7">
        <h3 className="special-section-header md:my-3 my-2">Solutions</h3>
        <p className="md:my-3 text-[15px] text-justify md:text-[18px] my-8">
          Enabling companies to enhance employee engagement, optimize
          performance, and achieve operational excellence through <br /> advanced
          technology and holistic consulting.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" >
          <SolutionsCard img={org} />
          <SolutionsCard  img={emetric}  />
          <SolutionsCard  img={sequential}  />
          <SolutionsCard  img={emetric}  />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
