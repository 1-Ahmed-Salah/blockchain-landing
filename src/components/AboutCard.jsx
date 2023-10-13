
function AboutCard({icon, title, text}) {
  return (
    <div className="border border-slate-300 py-[30px] px-[14px] rounded-lg flex flex-col justify-between gap-4">
        <div className="w-[50px] h-[50px] bg-gradient-to-r from-primary-yallow to-[#ff6600] flex items-center justify-center rounded-full mx-auto">{icon}</div>
        <div className="ml-[30px]">
            <h3 className="text-[19px] font-medium">{title}</h3>
            <p className="text-[14px] font-semibold text-slate-300 mt-[9px]">
                {text}
            </p>
        </div>
    </div>
  )
}

export default AboutCard