interface ImageProps {
    image: string;
   
  }
const ClientCard: React.FC<ImageProps> = ({image}) => {
  return (
    <div>
        <img className="cursor-pointer w-20 h-20" src={image} alt="" />
    </div>
  )
}

export default ClientCard