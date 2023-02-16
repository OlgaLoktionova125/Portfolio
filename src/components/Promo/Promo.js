import './Promo.css';
import photo from '../../images/photo.jpg';
import { forwardRef } from 'react';

const Promo = forwardRef((props, ref) => {
    return(
        <section className='promo' ref={ref} id='promo'>
            <div className='promo__content'>
                <p className='promo__hello'>Здравствуйте! Меня зовут Ольга</p>
                <p className='promo__frontDev'>Фронтенд-разработчик</p>            
                <div className='promo__buttons'>
                    <a className='promo__button' href='#contacts'>Контакты</a>
                    <a className='promo__button' href='#projects'>Проекты</a>
                </div>
            </div>
            <img className='promo__image' src={photo} alt='ноутбук'></img>
        </section>
    )
});

export default Promo;