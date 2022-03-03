import Image from "next/image";

function NftCard({ imgSrc, imgAlt, title }) {
    return (
        <div className="p-[14px] border border-white/10" >
            <div className="overflow-hidden group relative">
                {/* Overly --Start-- */}
                <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300 px-6 text-center">
                    <p className="heading_sm !font-praebrg !text-[42px] !leading-[55px] translate-y-5 duration-300 group-hover:translate-y-0">{title}</p>
                </div>
                {/* Overly --End-- */}
                <div className="group-hover:scale-105 duration-[700ms]">
                    <Image width={300} height={481} layout="responsive" src={imgSrc} alt={imgAlt || title || 'Nft Card'} />
                </div>
            </div>
        </div>
    )
}

export default NftCard
