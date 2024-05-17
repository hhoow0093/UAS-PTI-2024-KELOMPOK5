import { Container } from 'react-bootstrap';
import './styleTrivia.css';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


export default function SwiperTempat() {

    return (
        <Container>
                    <swiper-container space-between="5" slides-per-view="3"  navigation="true" class="full-screen-swiper"
breakpoints={
    JSON.stringify({
        0: {
            slidesPerView: 1,
            clickable: true,
        },
        320: {
            slidesPerView: 1,
            clickable: true,
        },
        640:{
            slidesPerView: 1,
            clickable: true,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 5,
            clickable: true,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 5,
            clickable: true,
        }
    })
}>
    <swiper-slide onClick={() => window.location.href = "/kunjungan"}>
        <div className="slide-text"><p className='namaTempat-swiper'>Masjid Raya Baiturrahman</p></div>
    </swiper-slide>
    <swiper-slide onClick = {() => window.location.href = "/kunjungan2"}>
        <div className="slide-text"><p className='namaTempat-swiper'>Pantai Tailana</p></div>
    </swiper-slide >
    <swiper-slide onClick = {() => window.location.href = "/kunjungan3"}>
        <div className="slide-text"><p className='namaTempat-swiper'>Pantai Lampuuk</p></div>
    </swiper-slide>
    <swiper-slide onClick = {() => window.location.href = "/kunjungan4"}>
        <div className="slide-text"><p className='namaTempat-swiper'>Museum Negeri Aceh</p></div>
    </swiper-slide>
    <swiper-slide onClick = {() => window.location.href = "/kunjungan5"}>
        <div className="slide-text"><p className='namaTempat-swiper'>Museum Cut Nyak Dhien</p></div>
    </swiper-slide>
            </swiper-container>
        </Container>


        
    )
    }