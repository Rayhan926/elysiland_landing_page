function MarketPlaceSection() {
    return (
        <>
            <section className="section_py">
                <div className="container text-center flex flex-col items-center">
                    <h2 className="heading_sm text_spacing">MARKETPLACE</h2>
                    <p className="paragraph_sm text_spacing">Marketplace will be launched along with the start of season 2 game play.</p>
                </div>
            </section>
            <div className="h-screen w-full flex flex-col items-center justify-center bg-no-repeat text-center" style={{
                backgroundImage: "url('/img/Marketplace.jfif')",
                backgroundSize: 'cover'
            }}>
                <p className="text_spacing paragraph_sm">Coming Soon</p>
                <h2 className="heading_lg w-[80%] mx-auto">
                    ALL NFT ITEMS CAN BE TRADED AT THE MARKETPLACE
                </h2>
            </div>
        </>
    )
}

export default MarketPlaceSection
