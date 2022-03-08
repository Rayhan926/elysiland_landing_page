import useTranslation from "next-translate/useTranslation"
import { useEffect, useRef, useState } from "react"
import { IoCloseSharp } from 'react-icons/io5';

let Is_hidden_announcement_bar;
if (typeof window !== 'undefined') {
    try {
        Is_hidden_announcement_bar = JSON.parse(localStorage.getItem('is_hidden_announcement_bar'))
    } catch (error) {
        Is_hidden_announcement_bar = false;
    }
}

function AnnouncementBar() {
    const { t } = useTranslation()
    const announcementRef = useRef(null)
    const [isBarHidden, setisBarHidden] = useState(Is_hidden_announcement_bar)

    useEffect(() => {
        const topHeader = document.querySelector('#top_header')
        const barHeight = announcementRef.current?.clientHeight

        if (isBarHidden) {
            topHeader.style.marginTop = '0'
            // return;
        }

        if (document.documentElement.scrollTop <= 20 && !isBarHidden) {
            topHeader.style.marginTop = barHeight + 'px'
        }

        window.addEventListener('scroll', (e) => {
            const barHeight = announcementRef.current?.clientHeight
            if (document.documentElement.scrollTop <= 20) {
                if (!isBarHidden) {
                    topHeader.style.marginTop = barHeight + 'px'
                }
                topHeader.classList.remove('hide_sticky_header')
                topHeader.classList.remove('show_sticky_header')
            }
        })
    }, [announcementRef, isBarHidden])



    const hideBarHandler = () => {
        setisBarHidden(true)
        document.querySelector('#top_header').style.marginTop = 0
        localStorage.setItem('is_hidden_announcement_bar', JSON.stringify(true))
    }

    if (isBarHidden) return null;

    return (
        <div className="text-center relative bg-[#232838]" id="announcement_bar" ref={announcementRef}>
            <p className="paragraph_sm text-[21px] leading-[34px]">{t('common:announcement_text')}</p>

            <div className="absolute top-1/2 right-3 -translate-y-1/2 text-white/90 hover:text-white cursor-pointer" onClick={hideBarHandler}>
                <IoCloseSharp size={22.5} />
            </div>
        </div>
    )
}

export default AnnouncementBar
