import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';


function ScrollAnimationSection() {

    const scroll_animation_section_ref = useRef(null)

    useEffect(() => {

        const sectionHeight = scroll_animation_section_ref.current.clientHeight
        const windowHeight = window.innerHeight

        setTimeout(() => {
            gsap.to('.right_images_wrapper', {
                scrollTrigger: {
                    trigger: '.right_images_wrapper',
                    pin: true,
                    start: 'top top',
                    end: `+=${sectionHeight - windowHeight}`,
                }
            })

            gsap.to('.img_1', {
                scrollTrigger: {
                    trigger: '.box_1',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                },
                height: windowHeight - 2
            })

            gsap.to('.img_2', {
                scrollTrigger: {
                    trigger: '.box_2',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                },
                height: windowHeight - 2
            })

            gsap.to('.img_3', {
                scrollTrigger: {
                    trigger: '.box_3',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                },
                height: windowHeight - 2
            })
        }, 200);

    }, [])

    return (
        <section className="grid grid-cols-2 border-t border-b border_soft" ref={scroll_animation_section_ref}>

            {/* Text Box Container --Start-- */}
            <div className="animaton_text_boxs_wrapper" >
                <div className="px-[9vw] border-r border_soft h-screen flex flex-col justify-center box_1">
                    <h3 className="heading_md  text_spacing" >Soldier Types</h3>
                    <p className="paragraph_sm" >Based on different Soldier Types, players can put their decks together in countless combinations.</p>
                </div>
                <div className="px-[9vw] border-r border_soft h-screen flex flex-col justify-center box_2">
                    <h3 className="heading_md  text_spacing" >Elements</h3>
                    <p className="paragraph_sm" >All Heroes has their respective Element attributes which can be critical when facing specific enemies.</p>
                </div>
                <div className="px-[9vw] border-r border_soft h-screen flex flex-col justify-center box_3">
                    <h3 className="heading_md  text_spacing" >PVE</h3>
                    <p className="paragraph_sm" >Players can train their heroes / decks and explore their decks’ fighting strength. At PVE, heros/ decks can be levelled up for better attributes and chances of dropping various NFTs assets.</p>
                </div>
                <div className="px-[9vw] border-r border_soft h-screen flex flex-col justify-center">
                    <h3 className="heading_md  text_spacing" >PVP</h3>
                    <p className="paragraph_sm" >Players can challenge each other to get to the top of the list for substantial USDC rewards.</p>
                </div>
            </div>
            {/* Text Box Container --End-- */}

            {/* Fixed Images Container --Start-- */}
            <div className="h-[calc(100vh-2px)] relative right_images_wrapper" >
                <div className="absolute top-0 left-0 h-full w-full">
                    <img src="/img/Soldier-Types-02-crop_1080x.png" className="w-full h-full object-cover" alt="" />
                </div>

                {/* Img Box 1 --Start-- */}
                <div className="absolute top-0 left-0 h-0 w-full overflow-hidden img_1 bg-dark-blue">
                    <img src="/img/element-signs-final_02_1860x.png" className="w-full h-[calc(100vh-2px)] object-cover absolute top-0 left-0" alt="" />
                </div>
                {/* Img Box 1 --End-- */}

                {/* Img Box 2 --Start-- */}
                <div className="absolute top-0 left-0 h-0 w-full overflow-hidden img_2 bg-dark-blue">
                    <img src="/img/PVE.jpg" className="w-full h-[calc(100vh-2px)] object-cover absolute top-0 left-0" alt="" />
                </div>
                {/* Img Box 2 --End-- */}

                {/* Img Box 3 --Start-- */}
                <div className="absolute top-0 left-0 h-0 w-full overflow-hidden img_3 bg-dark-blue">
                    <img src="/img/new_dessertcity_final_01.png" className="w-full h-[calc(100vh-2px)] object-cover absolute top-0 left-0" alt="" />
                </div>
                {/* Img Box 3 --End-- */}


            </div>
            {/* Fixed Images Container --End-- */}
        </section>
    )
}

export default ScrollAnimationSection
