import { Link } from "react-router-dom";

interface OurServicesCardProps {
  serviceNumber:string;
  renderedService:string;
  aboutService:string;
  buttonText:string;
  linkToPage:string;
  isConsultancyButton:boolean;
}


const OurServicesCard = ({serviceNumber,renderedService,aboutService,buttonText,linkToPage,isConsultancyButton}:OurServicesCardProps) => {
  return (
    <div className="word-break shadow-md border p-5 flex flex-col justify-between  gap-7 rounded-md text-sm" >
    <div className="flex items-center gap-2" >
    <span className="text-3xl text-primary font-bold " >{serviceNumber}.</span>
    <span className="text-xl text-primary" >{renderedService}</span>

    </div>
    <p className="text-base text-justify" >
      {aboutService}
    </p>
    <Link to={linkToPage} className={`${isConsultancyButton ? "bg-primary text-white hover:border hover:border-primary hover:bg-white hover:text-primary" : " text-primary border border-primary bg-white hover:bg-primary hover:text-white"} px-3 py-2 w-fit rounded-md`} >{buttonText}</Link>
  </div>
  )
}

export default OurServicesCard