interface ImageProps {
  image: string;
  blueText?:boolean;
  header:string;
  mainText:string;
  
}

const QuickInfo: React.FC<ImageProps> = ({image,blueText,header,mainText}) => {
  return (
    <div className="max-w-md" >
        <img src={image} alt="" />
        <h4  className={` ${blueText ? "text-[#1D9BF0;]":"text-primary"} text-3xl font-bold  my-3`} >
       {header}
        </h4>
        <p className="border-l text-gray-400 border-black px-4 -mx-4 text-sm md:text-base text-justify leading-1 my-1" >
       {mainText}
        </p>
    </div>
  )
}

export default QuickInfo