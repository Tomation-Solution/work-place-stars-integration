import email from '../assets/reachout/email.svg'
import map from '../assets/reachout/map.svg'
import phone from '../assets/reachout/phone.svg'

const ReachOut = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 max-w-[90%] mx-auto md:max-w-[100%] my-[100px]" >
        <div className="container ml-0 md:ml-[50px]" >
            <h3 className='text-left text-primary text-5xl font-bold my-10' >REACH  <span className='text-[#4285F4]' > OUT</span></h3>
           
            <div className="space-y-9 text-base" >
                <div className="flex items-center gap-2 flex-wrap " >
                    <p className="text-primary capitalize">1601-1   U.S.A Location: <span> 1601-1 N Main St #3159, Jacksonville, FL 3220</span></p>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-7" >
                    <div className="flex  items-center gap-3 font-semibold text-sm" >
                        <img src={phone} className="w-5 h-5" alt="" />
                        <aside>
                            <p>PHONE</p>
                            <p>+1 469 583 392</p>
                        </aside>
                    </div>
                    <div className="flex items-center gap-4 font-semibold text-sm">
                    <img src={email} className="w-5 h-5" alt="" />
                        <aside>
                            <p>EMAIL</p>
                            <p className="text-lightblue font-light" >info@workplacestars.com</p>
                        </aside>
                    </div>
                </div>
              
            </div>
        </div>
        <div className="relative grid place-items-center" >
            <div className="hidden md:inline-flex absolute w-1/2 bg-primary  h-full right-0" >
                
            </div>
            <img src={map} className="w-3/4 h-[350px] my-7  z-[2]" alt="" />
        </div>
    </section>
  )
}

export default ReachOut