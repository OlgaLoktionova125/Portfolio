import './Contacts.css';
import contacts from '../../images/contacts.png';
import whatsapp from '../../images/whatsapp.svg';
import telegram from '../../images/telegram.svg';
import mail from '../../images/mail.svg';
import { forwardRef } from 'react';

const Contacts = forwardRef((props, ref) => {    
    return(
        <section className='contacts' id='contacts' ref={ref}>
            <img className='contacts__img' src={contacts} alt='Три бумажных самолетика'></img>
            <div className='contacts__content'>
                <h2 className='contacts__heading'>Контакты</h2>
                <ul className='contacts__list'>
                    <li className='contacts__item'>
                        <a className='contacts__link' href='https://wa.me/79032518439' target='_blank' rel='noreferrer'>
                            <img className='contacts__image' src={whatsapp} alt='иконка вотсапп'></img>
                            <p className='contacts__text'>WhatsApp</p> 
                        </a>
                    </li>
                    <li className='contacts__item'>
                        <a className='contacts__link' href='https://t.me/Olga_222243' target='_blank' rel='noreferrer'>
                            <img className='contacts__image' src={telegram} alt='иконка телеграм'></img>
                            <p className='contacts__text'>Telegram</p>
                        </a>
                    </li>
                    <li className='contacts__item'>
                        <a className='contacts__link' href='mailto:olgaloktionova@yandex.ru' target='_blank' rel='noreferrer'>
                            <img className='contacts__image' src={mail} alt='иконка электронной почты'></img>
                            <p className='contacts__text'>Эл. почта</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
});

export default Contacts;