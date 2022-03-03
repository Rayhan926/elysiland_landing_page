// import Link from "next/link"
// import { useRouter } from "next/router"
// import useTranslation from 'next-translate/useTranslation'
import Button from "../components/Button"

import Header from "../components/Header";
import NftSection from "../components/NftSection";
import HeroSection from "../components/HeroSection";
import GameSection from "../components/GameSection";
import MarketPlaceSection from "../components/MarketPlaceSection";
import TeamSection from "../components/TeamSection";
import SubscribeNewsLetterSection from "../components/SubscribeNewsLetterSection";
import Footer from "../components/Footer";

// function Home() {
//   const router = useRouter()

//   const { t } = useTranslation()
//   return (
//     <div>

//       <div className="p-20 bg-blue-900 space-y-5 flex flex-col items-center justify-center">
//         <h1
//           className="heading_sm"
//         >
//           {t('common:greet')}
//         </h1>
//         <h1
//           className="heading_md"
//         >
//           {t('common:greet')}
//         </h1>

//         <Button />
//       </div>

//       <ul className="flex flex-col gap-4">
//         {router.locales.map(locale => (
//           <Link href={router.asPath} locale={locale} >
//             <a>{locale}</a>
//           </Link>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Home


function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <NftSection />
      <GameSection />
      <MarketPlaceSection />
      <TeamSection />
      <SubscribeNewsLetterSection />
      <Footer />
    </>
  )
}

export default Home
