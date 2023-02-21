import './Projects.css';
import { projects } from '../../utils/projects';
import { forwardRef, useState } from 'react';
import arrow from '../../images/arrow.svg';

const Projects = forwardRef(({screen}, ref) => {

    const [isMouseDownLeft, setIsMouseDownLeft] = useState(false);
    const [isMouseDownRight, setIsMouseDownRight] = useState(false);
    const [index, setIndex] = useState(2);
    const length = projects.length - 1;

    function handleMouseDownLeft() {
        setIsMouseDownLeft(true);
    }

    function handleMouseDownRight() {
        setIsMouseDownRight(true);
    }

    function handleLeftClick() {
        setIsMouseDownLeft(false);
        if (index > 0) setIndex(index - 1);
        if (index === 0) setIndex(length);
    }

    function handleRightClick() {
        setIsMouseDownRight(false);
        if (index < length) setIndex(index + 1);
        if (index === length) setIndex(0);
    }

    return(
        <section className='projects' id='projects' ref={ref}>
            <h2 className='projects__heading'>МОИ ПРОЕКТЫ</h2>
            {screen > 1279 && 
                <>
                    <div className='projects__content'>
                        <button className={`projects__button projects__button_left ${isMouseDownLeft ? 'projects__button_mousedown' : ''}`} 
                                onMouseDown={handleMouseDownLeft} 
                                onClick={handleLeftClick}>
                        </button>
                        <a href={projects[index].link} target='_blank' rel='noreferrer'><img className='projects__image' src={projects[index].image} alt='скриншот проекта'></img></a>
                        <button className={`projects__button projects__button_right ${isMouseDownRight ? 'projects__button_mousedown' : ''}`} 
                                onMouseDown={handleMouseDownRight} 
                                onClick={handleRightClick}>
                        </button>
                    </div>
                    <p className='projects__description'>{projects[index].description}</p>
                </>
            }
            {screen <= 1279 &&
                <ul className='projects__list'>
                    {projects.map((project, i) => 
                        (<li className='projects__item' key={i}>
                            <a className='projects__link' href={project.link} target='_blank' rel='noreferrer'>
                                <p className='projects__text'>{project.name}</p>
                                <img className='projects__image'src={arrow} alt='стрелка'></img>
                            </a>
                        </li>)
                    )}
                </ul>
            }
        </section>
    )
});

export default Projects;