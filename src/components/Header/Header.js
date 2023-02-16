import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({isMainActive, isProjectsActive, isAboutMeActive, isContactsActive}) {
    return(
        <header className='header'>
            <Navigation isMainActive={isMainActive} isProjectsActive={isProjectsActive} isAboutMeActive={isAboutMeActive} isContactsActive={isContactsActive}/>
        </header>
    )
}

export default Header;