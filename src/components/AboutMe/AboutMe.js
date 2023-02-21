import './AboutMe.css';
import laptop from '../../images/laptop.png'
import { forwardRef } from 'react';

const AboutMe = forwardRef((props, ref) => {
    return(
        <section className='aboutMe' id='aboutMe' ref={ref}>
            <div className='aboutMe__content'>
                <h2 className='aboutMe__heading'>Немного о себе...</h2>
                <p className='aboutMe__text'>Меня зовут Локтионова Ольга. Я начинающий фронтенд-разработчик.
                                             Недавно я окончила курсы по "веб-разработке" и сделала, в процессе обучения,
                                             несколько проектов. Подробнее с ними можете ознакомиться на &nbsp; 
                                             <a href='https://github.com/OlgaLoktionova125' target='_blank' rel='noreferrer' className='aboutMe__link'>  
                                             GitHub.
                                             </a>
                </p>
                <p className='aboutMe__text'>Для меня писать код это как заниматься магией. Ведь подобно волшебникам,
                                             которые с помощью заклинаний творят чудеса, программисты с помощью кода создают
                                             целые вселенные.
                </p>
            </div>
            <img className='aboutMe__image' src={laptop} alt='Моя фотография'></img>
        </section>
    )
});

export default AboutMe;