import Header from "../components/Header"
import SubscribeNewsLetterSection from "../components/SubscribeNewsLetterSection"
import Footer from "../components/Footer"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"

function ContactPage() {
    const { t } = useTranslation()
    return (
        <>
            <Head>
                <title>Contact Us - Elysiland Limited</title>
            </Head>
            <Header />
            <div className="mt-[70px] lg:mt-[83px]">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center h-full">
                    <div className="w-full h-[313px] md:h-full relative">

                        <div className="absolute top-1/2 -translate-y-1/2 px-[18px] justify-center md:justify-start md:px-[9vw] z-10 pointer-events-none bg-black/30 h-full w-full flex items-center">
                            <p className="heading_md">{t('common:contact_us')}</p>
                        </div>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.4078828986003!2d114.17631091529671!3d22.30040878532345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8cd3564f2088f666!2zMjLCsDE4JzAxLjUiTiAxMTTCsDEwJzQyLjYiRQ!5e0!3m2!1sen!2sbd!4v1646553246131!5m2!1sen!2sbd" width={'100%'} height={'100%'} style={{ border: 0, filter: "invert(90%)" }} allowFullScreen loading="lazy" />
                    </div>
                    <div className="w-full py-[50px] px-[25px] md:py-[150px] md:px-[80px]">
                        <p className="paragraph_sm font-scouser-ste text-[20px] leading-[22px] mb-7">{t('common:leave_us_a_message')}</p>
                        <form className="space-y-7" >
                            <div>
                                <input type="text" placeholder={t('common:name')} className="_input w-full" />
                            </div>
                            <div>
                                <input type="email" placeholder={t('common:email')} className="_input w-full" />
                            </div>
                            <div>
                                <textarea placeholder={t('common:message')} className="_input w-full !h-[130px]"></textarea>
                            </div>

                            <div className="!mt-9">
                                <button
                                    type="submit"
                                    className="flex items-center bg-white px-[24px] md:px-[30px] gap-3 h-[44px] md:h-[54px] text-[22px] md:text-[23px] font-praebrg font-medium relative group box_shadow_sm md:box_shadow_lg"
                                >
                                    <span className="md:duration-200 md:mr-[-20px] md:group-hover:mr-0" >{t('common:send')}</span>
                                    <span className="duration-200 ml-[-10px] group-hover:ml-0 opacity-0 group-hover:opacity-100 hidden md:inline" >
                                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" style={{ width: 21, height: 12 }} viewBox="0 0 21 10"><path d="M21.000,5.000 L15.000,10.000 L15.000,6.000 L-0.000,6.000 L-0.000,4.000 L15.000,4.000 L15.000,0.000 L21.000,5.000 Z"></path></svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <SubscribeNewsLetterSection />
            <Footer />
        </>
    )
}

export default ContactPage
