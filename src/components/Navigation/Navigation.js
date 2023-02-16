import './Navigation.css';

function Navigation({isMainActive, isProjectsActive, isAboutMeActive, isContactsActive}) {

    return(
        <nav className='navigation'>
            <ul className='navigation__list'>
                <li className='navigation__item'><a href='#main' className={`navigation__link ${isMainActive ? 'navigation__link_active' : ''}`}>Главная</a></li>
                <li className='navigation__item'><a href='#projects' className={`navigation__link ${isProjectsActive ? 'navigation__link_active' : ''}`}>Проекты</a></li>
                <li className='navigation__item'><a href='#aboutMe' className={`navigation__link ${isAboutMeActive ? 'navigation__link_active' : ''}`}>Обо мне</a></li>
                <li className='navigation__item'><a href='#contacts' className={`navigation__link ${isContactsActive ? 'navigation__link_active' : ''}`}>Контакты</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;