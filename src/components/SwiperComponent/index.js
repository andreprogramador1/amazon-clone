import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './swiper.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function SwiperComponent() {

    const data = [
        'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/32/ConsumerElectronics/2020/BTS/Electronics/XCM_Manual_1293503_1505536_BR_br_br_ce_20_bts_electronics_pc_br_pt_3605063_1500x600_1X_pt_BR._CB411491761_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Alexa/GW/Agosto/W35/EchoStudio/DesktopHero_1500x600_EchoStudio._CB407832059_.jpg'
    ]
    
    return (
        <div className='swiper-container'>
            <Swiper
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            {data.map((item, i) => (
                <SwiperSlide><img className='image' src={item} /></SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}

export default SwiperComponent
