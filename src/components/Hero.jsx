
import heroVideo from '../assets/video.mp4'

function Hero() {
  return (
    <div className="w-full h-[100vh] relative">
        
        <video src={heroVideo} className='object-cover w-full h-full absolute -z-10'  autoPlay loop muted />
       
        <div className='text-white h-full w-full flex flex-col gap-[9px] items-center justify-center text-center'>
            <h1 className='text-[40px] font-medium'>
                Decentralized <br /> <span className='text-primary-yallow'>Trading</span> Protocol
            </h1>
            <p className='text-slate-300 font-medium text-xl'>
                Guaranteed liquidity trading for millions of users and top Ethereum applications.
            </p>

            <div className='mt-[20px] flex gap-[20px] font-medium'>
                <a className='btn w-[120px] h-[40px] text-center leading-[40px] text-slate-950 rounded-[30px] uppercase cursor-pointer'>Use Defi</a>
                <a className='border-primary-yallow text-white border border-solid w-[120px] h-[40px] text-center leading-[40px] rounded-[30px] cursor-pointer'>FAQ</a>
            </div>
        </div>

    </div>
  )
}

export default Hero