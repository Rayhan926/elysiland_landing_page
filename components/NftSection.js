import Button from "./Button"
import NftCard from "./NftCard"

const nftCard = [
    {
        imgSrc: "/nfts/Caesar_final-01_640x.png",
        imgAlt: 'Caesar',
        title: "Caesar"
    },
    {
        imgSrc: "/nfts/zeus_04-01-01_640x.png",
        imgAlt: 'Zeus',
        title: "Zeus"
    },
    {
        imgSrc: "/nfts/ODA-01_640x.png",
        imgAlt: 'ODA',
        title: "Oda Nobunaga"
    },
    {
        imgSrc: "/nfts/Guanyu-01_640x.png",
        imgAlt: 'Guanyu',
        title: "Guan yu"
    },
    {
        imgSrc: "/nfts/WaynaQhapaq_final-01_640x.png",
        imgAlt: 'Wayna Qhapaq',
        title: "Wayna Qhapaq"
    },
    {
        imgSrc: "/nfts/Muhammad_final-01_640x.png",
        imgAlt: 'Muhammad',
        title: "Muhammad"
    },
    {
        imgSrc: "/nfts/pharaoh_final-01_640x.png",
        imgAlt: 'Pharaoh',
        title: "Pharaoh"
    },
    {
        imgSrc: "/nfts/roosevelt_final-01_640x.png",
        imgAlt: 'Roosevelt',
        title: "Roosevelt"
    },
    {
        imgSrc: "/nfts/athena_cardfinal-01_640x.png",
        imgAlt: 'Athena',
        title: "Athena"
    },
    {
        imgSrc: "/nfts/cleopatra_cardfinal-01_640x.png",
        imgAlt: 'Cleopatra',
        title: "Cleopatra"
    },
    {
        imgSrc: "/nfts/marilyn_cardfinal-01_640x.png",
        imgAlt: 'Marilyn Monroe',
        title: "Marilyn Monroe"
    },
    {
        imgSrc: "/nfts/featheredserpent_cardfinal-01_640x.png",
        imgAlt: 'Feathered Serpent',
        title: "Feathered Serpent"
    },
    {
        imgSrc: "/nfts/teresa_cardfinal-01_640x.png",
        imgAlt: 'Mother Teresa',
        title: "Mother Teresa"
    },
    {
        imgSrc: "/nfts/mary_cardfinal-01_640x.png",
        imgAlt: 'Mary In Islam',
        title: "Mary In Islam"
    },
    {
        imgSrc: "/nfts/wuzetian_cardfinal-01_640x.png",
        imgAlt: 'Wu Zetian',
        title: "Wu Zetian"
    },
    {
        imgSrc: "/nfts/EmpressMS_cardfinal-01_640x.png",
        imgAlt: 'Empress Myeongseong',
        title: "Empress Myeongseong"
    },
]

function NftSection() {
    return (
        <>
            <section className="section_py">
                <div className="container text-center flex flex-col items-center">
                    <h2 className="heading_sm text_spacing">NFT</h2>
                    <p className="paragraph_sm">All Heroes are NFTs and players can mint their favourite heroes based on a pre-defined rarity percentage.</p>
                    <p className="paragraph_sm">There are also numerous NFT items players can equip to their heroes / decks.</p>
                    <p className="paragraph_sm text_spacing">Below are the initial 16 Heroes available for the first NFT sales launch.</p>
                    <Button />
                </div>
            </section>
            <section>
                {/* Nft Cards Grid --Start-- */}
                <div className="container !px-0">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {nftCard.map((card, index) => (
                            <NftCard key={index} {...card} />
                        ))}
                    </div>
                </div>
                {/* Nft Cards Grid --End-- */}
            </section>
        </>
    )
}

export default NftSection
