import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import lorexImage from '/images/Lorex.jpg'
import lslBanner from '/images/LSL6.jpg'
import FabricRoll from '/images/PPFabricRoll1.jpg'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const slides = [
  {
    title: 'Premium PP Woven Packaging Solutions',
    description: 'Engineered fabrics and bags that combine strength, durability, and customization for diverse industries.',
    image: lorexImage,
  },
  {
    title: 'Built for Industrial Strength',
    description: 'From agriculture to logistics, our products ensure safe handling and dependable performance.',
    image: lslBanner,
  },
  {
    title: 'Trusted by Modern Manufacturers',
    description: 'We support businesses with tailored packaging that elevates branding and operational efficiency.',
    image: FabricRoll,
  },
]

function HeroSlider() {
  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="h-[50vh] min-h-[350px] sm:h-[60vh] sm:min-h-[450px] lg:h-[80vh] lg:min-h-[620px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `linear-gradient(90deg, rgba(4,24,60,0.92), rgba(6,31,74,0.55)), url(${slide.image})` }}
            >
              <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="max-w-2xl text-white"
                >
                  <p className="mb-4 inline-block rounded-full border border-gold/50 bg-white/10 px-4 py-2 text-sm font-medium tracking-[0.25em] text-gold">
                    AURIX POLYPACK
                  </p>
                  <h1 className="mb-5 text-2xl font-bold leading-tight sm:text-4xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mb-8 max-w-xl text-sm sm:text-base lg:text-lg text-slate-200">{slide.description}</p>
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    <Link to="/products" className="rounded-full bg-gold px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-primary transition hover:bg-lightGold">
                      View Products
                    </Link>
                    <Link to="/quote" className="rounded-full border border-white/70 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-white/10">
                      Get Quote
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSlider
