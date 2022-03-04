import { gsap } from 'gsap';
import { useEffect } from 'react';

function RoadmapSection() {

    useEffect(() => {
        const timeline = gsap.timeline()
        timeline.pause()
        timeline.to('.horizontal_bar', {
            width: '100%',
            duration: 0.7
        })
            .to('.sq_1', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_1', {
                opacity: 1,
                height: '62px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_1', {
                scale: 1,
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.3')
            .to('.sq_2', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_2', {
                opacity: 1,
                height: '62px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_2', {
                scale: 1,
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.3')
            .to('.sq_3', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_3', {
                opacity: 1,
                height: '62px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_3', {
                scale: 1,
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.3')
            .to('.sq_4', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_4', {
                opacity: 1,
                height: '62px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_4', {
                scale: 1,
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.3')
            .to('.sq_5', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_5', {
                opacity: 1,
                height: '62px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_5', {
                scale: 1,
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.3')
            .to('.sq_6', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_6', {
                opacity: 1,
                height: '62px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_6', {
                scale: 1,
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.3')


        gsap.to('.roadmap_section', {
            scrollTrigger: {
                trigger: '.roadmap_section',
                start: 'top 30%',
                end: 'bottom top',
                onEnter: () => timeline.play(),
                // onEnterBack: () => timeline.play(),
                // onLeave: () => timeline.reverse('0.2'),
                // onLeaveBack: () => timeline.reverse('0.2'),
                // markers: true
            }
        })
    }, [])

    return (
        <section className="section_py roadmap_section" id="roadmap">
            <h2 className="heading_md text-center">Roadmap</h2>

            <div className="md:w-[95%] mx-auto pt-[3%]" >
                <ol className="relative py-[200px] w-[calc(100%-220px)] mx-auto" >
                    {/* Horizonlat Bar --Start-- */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[0%] h-1 bg-white horizontal_bar"></div>
                    {/* Horizonlat Bar --End-- */}

                    {/* Single List Box 1 --Start-- */}
                    <li className="absolute w-[280px] h-[200px] left-0 bottom-0 ml-[-140px]" >
                        {/* Square --Start-- */}
                        <div className="w-5 h-5 bg-white top-0 scale-0 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute sq_1"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-1 bg-white h-[40px] absolute top-0 opacity-0 left-1/2 -translate-x-1/2 line_1"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="text-center space-y-0.5 absolute top-[80px] w-full scale-0 content_1">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>2022 Q1</p>
                            <p className="paragraph_sm text-base">launch of</p>
                            <p className="paragraph_sm text-base">• Whitepaper</p>
                            <p className="paragraph_sm text-base">• 16 initial character designs</p>
                            <p className="paragraph_sm text-base">• website</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List Box 1 --End-- */}

                    {/* Single List Box 2 --Start-- */}
                    <li className="absolute w-[280px] h-[200px] left-[20%] top-0 ml-[-140px]" >
                        {/* Square --Start-- */}
                        <div className="w-5 h-5 bg-white top-[100%] -translate-y-1/2 left-1/2 -translate-x-1/2 absolute sq_2 scale-0"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-1 bg-white h-[40px] opacity-0 line_2 absolute bottom-0 left-1/2 -translate-x-1/2"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="text-center space-y-0.5 absolute bottom-[80px] w-full scale-0 content_2">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>2022 Q2</p>
                            <p className="paragraph_sm text-base">launch of</p>
                            <p className="paragraph_sm text-base">• Marketing Champaign</p>
                            <p className="paragraph_sm text-base">• Special NFTs KOL spokespersons</p>
                            <p className="paragraph_sm text-base">• NFT SALES</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List Box 2 --End-- */}

                    {/* Single List Box 3 --Start-- */}
                    <li className="absolute w-[280px] h-[200px] left-[40%] bottom-0 ml-[-140px]" >
                        {/* Square --Start-- */}
                        <div className="w-5 h-5 bg-white top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute scale-0 sq_3"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-1 bg-white h-[40px] opacity-0 line_3 absolute top-0 left-1/2 -translate-x-1/2"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="text-center space-y-0.5 absolute top-[80px] w-full scale-0 content_3">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>2022 Q3</p>
                            <p className="paragraph_sm text-base">launch of</p>
                            <p className="paragraph_sm text-base">• Elysi Coin Whitelist</p>
                            <p className="paragraph_sm text-base">• Elysi COIN IDO</p>
                            <p className="paragraph_sm text-base">• Gameplay 1.0</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List Box 3 --End-- */}


                    {/* Single List Box 4 --Start-- */}
                    <li className="absolute w-[280px] h-[200px] left-[60%] top-0 ml-[-140px]" >
                        {/* Square --Start-- */}
                        <div className="w-5 h-5 bg-white top-[100%] -translate-y-1/2 left-1/2 -translate-x-1/2 absolute scale-0 sq_4"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-1 bg-white h-[40px] opacity-0 line_4 absolute bottom-0 left-1/2 -translate-x-1/2"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="text-center space-y-0.5 absolute bottom-[80px] w-full scale-0 content_4">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>2022 Q4</p>
                            <p className="paragraph_sm text-base">launch of</p>
                            <p className="paragraph_sm text-base">• Gameplay 2.0 - Season 1</p>
                            <p className="paragraph_sm text-base">• NFT marketplace</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List Box 4 --End-- */}


                    {/* Single List Box 5 --Start-- */}
                    <li className="absolute w-[280px] h-[200px] left-[80%] bottom-0 ml-[-140px]" >
                        {/* Square --Start-- */}
                        <div className="w-5 h-5 bg-white top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute scale-0 sq_5"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-1 bg-white h-[40px] opacity-0 line_5 absolute top-0 left-1/2 -translate-x-1/2"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="text-center space-y-0.5 absolute top-[80px] w-full scale-0 content_5">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>2023 Q1-Q2
                            </p>
                            <p className="paragraph_sm text-base">launch of</p>
                            <p className="paragraph_sm text-base">•  Gameplay 2.0 - Season 2</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List Box 5 --End-- */}



                    {/* Single List Box 6 --Start-- */}
                    <li className="absolute w-[280px] h-[200px] left-[100%] top-0 ml-[-140px]" >
                        {/* Square --Start-- */}
                        <div className="w-5 h-5 bg-white top-[100%] -translate-y-1/2 left-1/2 -translate-x-1/2 absolute scale-0 sq_6"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-1 bg-white h-[40px] opacity-0 line_6 absolute bottom-0 left-1/2 -translate-x-1/2"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="text-center space-y-0.5 absolute bottom-[80px] w-full scale-0 content_6">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>2024 Q1-Q2</p>
                            <p className="paragraph_sm text-base">VR /AR integration Beta</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List Box 6 --End-- */}


                </ol>
            </div>
        </section>
    )
}


export default RoadmapSection
