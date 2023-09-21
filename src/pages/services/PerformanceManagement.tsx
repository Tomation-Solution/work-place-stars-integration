import aboutImage from "../../assets/aboutus/about-us-img.jpg";
import Banner from "../../components/Banner";

const PerformanceManagement = () => {
  return (
    <section className="font-poppins">
      <Banner image={aboutImage} pageTitle="Our Services" />

      <div className="container px-5 m8xlax-w- mx-auto ">
        <div className="mt-[70px] mb-[50px] font-light text-justify">
          <h3 className="special-section-header  text-2xl md:text-4xl my-5">
            Performance management
          </h3>
          <p className="font-light">
            Performance management in any organization aims at extensively
            improving organizational performance while sustaining performance,
            productivity, and the motivation of employees. In recent years, it
            has become obvious that traditional performance management
            methodologies are appearing to be ineffective. Thus, making Agile
            Performance Management, continuous performance improvement
            management, popular for forward looking organizations. Performance
            management in it self is a complex process that entails information
            gathering through effective KPI extractions, monitoring of task
            completion, feedback generation, and performance improvement-based
            discussions. An effective performance management system requires
            commitment and dedication from the human resource department,
            managers and employees. Our performance management system
            development approach provides for adoptions of various methodologies
            such as balanced scorecard, OKR, etc. Our performance management
            solution is designed to provide for the generation and utilization
            of both quantitative and qualitative data required for effective
            performance and appraisal management within the organization
            <div className="space-y-2 my-3">
              <p>
                1. We link employees' daily operational activities (tasks) to
                their relevant KPIs that are also linked to the strategic goals
                and objectives of the organization
              </p>

              <p>
                2. We generate and track performance improvement-based
                appraisal reports on the go while providing valuable insights to
                what's working and what's not working with regards to generated
                return on investment par employee
              </p>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerformanceManagement;
