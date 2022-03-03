import Button from "./Button"

function GameSection() {
    return (
        <section className="section_py">
            <div className="container text-center flex flex-col items-center">
                <h2 className="heading_sm text_spacing">Game</h2>
                <p className="paragraph_sm">There are multiple ways for players to engage in gameplay at Elysiland.</p>
                <p className="paragraph_sm text_spacing">Through playing, players can earn USDC or various NFT items as well as levelling up their heroes / decks.</p>
                <Button />
            </div>
        </section>
    )
}

export default GameSection
