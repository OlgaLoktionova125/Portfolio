import './Navigation.scss';
import { useState } from 'react';

function Navigation({isMainActive, isProjectsActive, isAboutMeActive, isContactsActive}) {

    const [isOpen, setIsOpen] = useState(false);

    function openMenu() {
        setIsOpen(true);
    }

    function closeMenu() {
        setIsOpen(false);
    }

    return(
        <nav className='navigation'>
            <ul className={`navigation__list ${!isOpen ? 'navigation__list_inactive' : ''}`}>
                <li className='navigation__item'>
                    <a href='#main' className={`navigation__link ${isMainActive ? 'navigation__link_active' : ''}`} onClick={closeMenu}>
                        Главная
                    </a>
                </li>
                <li className='navigation__item'>
                    <a href='#projects' className={`navigation__link ${isProjectsActive ? 'navigation__link_active' : ''}`} onClick={closeMenu}>
                        Проекты
                    </a>
                </li>
                <li className='navigation__item'>
                    <a href='#aboutMe' className={`navigation__link ${isAboutMeActive ? 'navigation__link_active' : ''}`} onClick={closeMenu}>
                        Обо мне
                    </a>
                </li>
                <li className='navigation__item'>
                    <a href='#contacts' className={`navigation__link ${isContactsActive ? 'navigation__link_active' : ''}`} onClick={closeMenu}>
                        Контакты
                    </a>
                </li>
            </ul>
            <button className={`navigation__close-button ${!isOpen ? 'navigation__close-button_inactive':''}`} onClick={closeMenu}></button>
            <button className={`navigation__button ${!isOpen ? 'navigation__button_active' : ''}`} onClick={openMenu}></button>
        </nav>
    )
}

export default Navigation;