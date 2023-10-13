import AboutCard from './AboutCard'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';

function About() {
  return (
    <div className="bg-black py-[160px]">
        <div className="container text-white">
            <div className="w-full text-center">
                <h2 className="text-[25px] font-medium">A Growing Protocol Ecosystem</h2>
                <p className="mt-[20px] px-[40px] md:px-[140px] text-[19px] font-semibold text-slate-300">
                    The Defi protocol system empowers developers, liquidity providers,
                    and traders to participate in a financial marketplace that is open
                    and accessible to all.
                </p>  
            </div>

            <div className="py-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <AboutCard icon={<SiHiveBlockchain size={25} />} title={'Reliable, tamper-proof network'} text={'Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and availabledata/APIs to any smart contract.'}/>
                <AboutCard icon={<SiFsecure size={25} />} title='Seamless connection to any API' text='Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.' />
                <AboutCard icon={<SiStrapi size={25} />} title='Proven, ready-made solutions' text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.' />
                <AboutCard icon={<VscServerProcess size={25} />} title='Secure off-chain computation' text='Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.' />
            </div>

        </div>
    </div>
  )
}

export default About