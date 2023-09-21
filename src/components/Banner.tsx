interface BannerProps{
  image:string,
  pageTitle:string
}

const Banner:React.FC<BannerProps> = ({image,pageTitle}) => {
  return (
    <div className="relative">
    <div
      className="bg-cover bg-center h-[40vh] md:h-64 lg:h-80"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div className="absolute inset-0 bg-primary opacity-90"></div>

    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-white text-3xl font-semibold">{pageTitle}</p>
    </div>
  </div>
  );
};

export default Banner;
