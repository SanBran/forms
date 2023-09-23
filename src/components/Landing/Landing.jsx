import CreateButton from "../Buttons/CreateButton"

function Landing() {
  return (
    <div className=' flex flex-col items-center lg:gap-10 gap-5 h-screen'>
        <h1 className='mx-auto lg:text-6xl text-3xl font-semibold '>Make forms as you want <br/> when you want</h1>
        <p className=' lg:text-xl text-xs'>Here yo can easily upload your forms without complications</p>
        <section className='rounded-3xl overflow-hidden flex bg-green-500 lg:w-3/5 w-4/5 h-3/5 shadow-md'>
            <div className='flex flex-col w-1/2 justify-center items-center '>
                <h1 className=' lg:text-6xl text-4xl font-semibold mb-7'>Let's  <br/>begin!</h1>
                <CreateButton/>
            </div>
            <img src="./woman-work.jpg" alt="form" className='w-1/2 ' />
        </section>
    </div>
  )
}

export default Landing