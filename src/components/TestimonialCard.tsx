interface TestimonialCardProps {
  testimony: string;
  nameOfTestifier: string;
  role: string;
  nameOfLink: string;
  companyURL: string;
}

const TestimonialCard = ({
  testimony,
  nameOfTestifier,
  role,
  nameOfLink,
  companyURL,
}: TestimonialCardProps) => {
  return (
    <div className="CardComponentcontainer">
      <div className="cardmaincontainer">
        <p>{testimony}</p>
        <br />

        <h3 className="text-black font-[500]" >{nameOfTestifier}</h3>
        <h4 className="text-base font-[500]" >
          {role}

          <a href={companyURL} className="text-[#044b69] decoration-none" target="_blank">
            {" "}
            {nameOfLink}
          </a>
        </h4>
      </div>
    </div>
  );
};

export default TestimonialCard;
