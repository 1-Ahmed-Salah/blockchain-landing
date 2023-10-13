
const Subscribe = () => {
    return (
      <div className='px-4 py-16 bg-black text-white text-center'>
          <div className="container">
            <h2 className="text-[25px] font-medium">Join Our DeFi Community</h2>
            <div className='py-4 flex items-center justify-center'>
                <input className='p-3 rounded-3xl mr-4' type="email" placeholder='Enter your email' />
                <a className='btn w-[120px] h-[50px] text-center leading-[50px] text-slate-950 font-medium rounded-[30px] cursor-pointer inline-block'>Sign Up</a>
            </div>
            <div className='flex items-center justify-center py-2 '>
                <input className='mr-2 ' type="checkbox"/>
                <p>Yes, I agree to receive email communications from DeFi.</p>
          </div>
          </div>
      </div>
    )
}
  
export default Subscribe