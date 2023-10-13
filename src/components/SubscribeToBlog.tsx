const SubscribeToBlog = () => {
  return (
    <section className="px-4 bg-[#dff3fb] font-poppins max-w-[900px] mx-auto flex flex-col justify-center items-center gap-3 py-[60px] rounded-md my-5 w-[90%]" >
    <h3 className="xl:text-4xl md:text-3xl text-xl font-medium" >Subscribe to Our Blog</h3>
    <p className="text-sm text-center" >Stay up to date with the latest marketing, sales, and service tips and news.</p>
    <div className="w-[90%] md:w-[60%] flex items-center border-top-left-2 mx-auto" >
      <input type="text" className="px-3 py-2 outline-none flex-1" />
      <button className="px-3 py-2 bg-[#14a7e5] text-white rounded-tr-lg rounded-br-lg" >Subscribe</button>
    </div>
  </section>
  )
}

export default SubscribeToBlog