import './Skills.scss';

function Skills() {
    return(
        <section className='skills'>
            <h2 className='skills__heading'>Мой стек технологий</h2>
            <ul className='skills__list'>
                <li className='skills__skill'>HTML</li>
                <li className='skills__skill'>CSS</li>
                <li className='skills__skill'>Sass</li>
                <li className='skills__skill'>JavaScript</li>
                <li className='skills__skill'>React.js</li>
                <li className='skills__skill'>Node.js</li>
                <li className='skills__skill'>Express.js</li>
                <li className='skills__skill'>MongoDB</li>
                <li className='skills__skill'>Webpack</li>
                <li className='skills__skill'>Figma</li>
            </ul>
        </section>
    )
}

export default Skills;