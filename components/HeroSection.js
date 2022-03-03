import Button from "./Button"

function HeroSection() {
    return (
        <section className="min-h-[110vh] flex flex-col items-end justify-end bg-dark-blue px-[9vw] pb-[22vh] bg-no-repeat" style={{
            backgroundImage: "url('/img/main_background_5npc.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%'
        }} >
            <h1 className="heading_lg mb-[30px]">ONWARDS TO GLORY</h1>
            <Button />
        </section>
    )
}

export default HeroSection
