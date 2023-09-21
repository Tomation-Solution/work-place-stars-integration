// import img1 from "../assets/ourclients/img1.svg";
// import img2 from "../assets/ourclients/img2.svg";
// import img3 from "../assets/ourclients/img3.svg";
// import img4 from "../assets/ourclients/img4.svg";
// import img5 from "../assets/ourclients/img5.svg";
// import img6 from "../assets/ourclients/img6.svg";
// import img7 from "../assets/ourclients/img7.svg";
// import img8 from "../assets/ourclients/img8.svg";
// import img9 from "../assets/ourclients/img9.svg";
// import img10 from "../assets/ourclients/img10.svg";
// import img11 from "../assets/ourclients/img11.svg";
// import img12 from "../assets/ourclients/img12.svg";
// import img13 from "../assets/ourclients/img13.svg";
// import img14 from "../assets/ourclients/img14.svg";
// import img15 from "../assets/ourclients/img15.svg";
// import img16 from "../assets/ourclients/img16.svg";
import mainimge from "../assets/ourclients/american-client.jpeg";

// import ClientCard from "../components/ClientCard";

const OurClients = () => {
  return (
    <div className="container mx-auto px-4 my-[80px]">
      <h3 className="flex items-center px-0 my-10">
      <h3 className="special-section-header md:my-3 my-2 text-5xl ">Our <span className="text-[#4285F4] text-4xl" >Clients</span></h3>
        {/* <h3 className="font-bold text-5xl text-primary p-0 xl:text-6xl my-0 ">
          OUR
          <span className=" ml-3 text-[42px] xltext-5xl  font-bold my-0">
            Clients
          </span>
        </h3> */}
      </h3>

      <div className="grid place-items-center" >
        <img src={mainimge} alt=""  />
      </div>

      {/* <div className="container grid grid-cols-3 md:grid-cols-4 place-items-center">
        <ClientCard image={img1} />
        <ClientCard image={img2} />
        <ClientCard image={img3} />
        <ClientCard image={img4} />
        <ClientCard image={img5} />
        <ClientCard image={img6} />
        <ClientCard image={img7} />
        <ClientCard image={img8} />
        <ClientCard image={img9} />
        <ClientCard image={img10} />
        <ClientCard image={img11} />
        <ClientCard image={img12} />
        <ClientCard image={img13} />
        <ClientCard image={img14} />
        <ClientCard image={img15} />
        <ClientCard image={img16} />
      </div> */}
    </div>
  );
};

export default OurClients;
