
const Emetrics = () => {
  return (

    <div  className="font-poppins grid place-items-center h-[100vh]  w-full" >
    <form className="mt-4 max-w-md w-full shadow-md border p-5">
      <h3 className="font-bold my-4 text-primary text-xl text-center " >Request A Free Pulse for E-metrics</h3>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-normal text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          // Add your name input handling logic here
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-sm font-normal text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          // Add your phone number input handling logic here
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="company"
          className="block text-sm font-normal text-gray-700"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          // Add your company input handling logic here
        />
      </div>
      {/* <div className="mb-4">
        <label
          htmlFor="solution"
          className="block text-sm font-normal text-gray-700"
        >
          Solution
        </label>
        <select
          id="solution"
          name="solution"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full text-sm"
          // Add your solution dropdown handling logic here
        >
          <option value="Org360">Org360</option>
          <option value="E-metric Suite">E-metric Suite</option>
          <option value="Sequential Jobs">Sequential Jobs</option>
        </select>
      </div> */}
      <div className="mt-4 grid place-items-center">
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-lightblue focus:outline-none focus:ring focus:ring-blue-300"
          // Add your form submission logic here
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default Emetrics