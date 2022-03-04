import Image from "next/image"

function TeamCard({ title, subtitle, linkedin, imgSrc, imgAlt }) {
    return (
        <a href={linkedin} rel="noreferrer" className="block">
            <div className="overflow-hidden group relative">
                {/* Overly --Start-- */}
                <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/40 hidden flex-col items-center justify-center opacity-0 group-hover:opacity-100 duration-300 px-6 text-center md:flex">
                    <p className="heading_sm !font-praebrg !text-[42px] !leading-[55px] translate-y-5 duration-300 group-hover:translate-y-0">{title}</p>
                    <p className="heading_sm !font-praebrg !text-[42px] !leading-[55px] translate-y-5 duration-300 group-hover:translate-y-0">{subtitle}</p>
                </div>
                {/* Overly --End-- */}
                <div className="md:group-hover:scale-105 md:duration-[700ms]">
                    <Image width={480} height={480} layout="responsive" src={imgSrc} alt={imgAlt || name || 'Team Member'} />
                </div>

                <div className="h-[100px] md:hidden px-5 py-[25px]" >
                    <p className="heading_sm !font-praebrg !text-[19px] !leading-[25px]">{title}</p>
                    <p className="heading_sm !font-praebrg !text-[19px] !leading-[25px]">{subtitle}</p>
                </div>
            </div>
        </a>
    )
}

export default TeamCard
