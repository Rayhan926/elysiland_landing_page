import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TeamCard from './TeamCard';

const teams = [
    {
        title: 'NICK GU',
        linkedin: 'https://www.linkedin.com/in/nickgulikhang',
        subtitle: 'CO-FOUNDER, DESIGN LEAD',
        imgSrc: '/img/nick_480x.jpg',
        imgAlt: 'NICK GU'
    },
    {
        title: 'KENNY NGAN',
        linkedin: 'https://www.linkedin.com/in/kennycsngan',
        subtitle: 'CO-FOUNDER, PRODUCT LEAD',
        imgSrc: '/img/ngan_480x.jpg',
        imgAlt: 'KENNY NGAN'
    },
    {
        title: 'STEVEN FUNG',
        linkedin: 'https://www.linkedin.com/in/fclsteven',
        subtitle: 'CO-FOUNDER, TECH LEAD',
        imgSrc: '/img/steven_480x.jpg',
        imgAlt: 'STEVEN FUNG'
    },
    {
        title: 'LOK WONG',
        linkedin: 'https://www.linkedin.com/in/lok-wong-620431228',
        subtitle: 'CO-FOUNDER, TOKENOMICS LEAD',
        imgSrc: '/img/lok_480x.jpg',
        imgAlt: 'LOK WONG'
    },
    {
        title: 'YUKI KATO',
        linkedin: 'https://www.linkedin.com/in/yuki-kato-0337a392',
        subtitle: 'CO-FOUNDER, MARKETING LEAD',
        imgSrc: '/img/yuki_7a74966f-a3b5-46b3-b949-4d9ab4621bfa_480x.jpg',
        imgAlt: 'YUKI KATO'
    },
]

function TeamSection() {
    return (
        <section className="grid grid-cols-2 border-t border-b border_soft">
            <div className="px-[9vw] border-r border_soft py-[120px] grid items-center">
                <h2 className="heading_md" >Team</h2>
            </div>
            <div className="py-[120px] ml-[70px] pr-10 team_slider_wrapper" >
                <Swiper
                    spaceBetween={35}
                    slidesPerView={1.4}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        el: '.team_slider_pagination',
                        renderBullet: function (index, className) {
                            return `<span class="dot swiper-pagination-bullet"></span>`;
                        },
                    }}


                >
                    {teams.map((team, index) => (
                        <SwiperSlide key={index}><TeamCard {...team} /></SwiperSlide>
                    ))}
                </Swiper>

                <div className="team_slider_pagination flex items-center justify-center mt-8"></div>
            </div>
        </section>
    )
}

export default TeamSection
