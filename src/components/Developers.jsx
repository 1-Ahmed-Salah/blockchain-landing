
import terminal from '../assets/terminal.png'

const Developers = () => {
  return (
    <div className='bg-black py-[60px]'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 items-start'>
        <div>
          <h2 className='text-[25px] font-medium text-white'>Superpowers for DEFI <span className='text-primary-yallow'>developers.</span></h2>
          <p className='mt-2 text-slate-300'>
            Checkout the <span className="blue">documentation</span>, the <span className="blue">quick start</span>  or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
        </div>
        <div className='flex justify-center w-full gap-[20px] mt-[20px] md:mt-0'>
            <img className='max-w-[350px] shadow-lg shadow-cyan-500/50' src={terminal} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Developers;