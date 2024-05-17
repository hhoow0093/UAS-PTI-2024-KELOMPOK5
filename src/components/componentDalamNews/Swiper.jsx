import { Container } from 'react-bootstrap';
import './styleNews.css';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


export default function Swiper() {

    return (
        <Container>
        <main>
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
    <swiper-slide onClick={() => window.location.href = "https://www.kompas.com/stori/read/2021/08/19/102456479/masjid-raya-baiturrahman-aceh-sejarah-fungsi-dan-arsitekturnya?page=all"}>
        <div className="slide-text"><p className='namaTempat-swiper'>Masjid Raya Baiturrahman</p></div>
    </swiper-slide>
    <swiper-slide onClick = {() => window.location.href = "https://travel.kompas.com/read/2015/05/27/163800227/Tailana.Aceh.Singkil.Pulau.Tropis.Terindah.di.Nusantara"}>
        <div className="slide-text"><p className='namaTempat-swiper'>Pantai Tailana</p></div>
    </swiper-slide >
    <swiper-slide onClick = {() => window.location.href = "https://regional.kompas.com/read/2022/07/21/061000478/pantai-lampuuk-aceh-besar--daya-tarik-harga-tiket-dan-rute?page=all"}>
        <div className="slide-text"><p className='namaTempat-swiper'>Pantai Lampuuk</p></div>
    </swiper-slide>
    <swiper-slide onClick = {() => window.location.href = "https://www.kompas.com/tag/museum-negeri-aceh"}>
        <div className="slide-text"><p className='namaTempat-swiper'>Museum Negeri Aceh</p></div>
    </swiper-slide>
    <swiper-slide onClick = {() => window.location.href = "https://pesonaindonesia.kompas.com/read/2019/06/18/231553727/berkunjung-ke-rumah-cut-nyak-dhien-di-aceh"}>
        <div className="slide-text"><p className='namaTempat-swiper'>Museum Cut Nyak Dhien</p></div>
    </swiper-slide>
            </swiper-container>
        </main>
        </Container>
    )
    }