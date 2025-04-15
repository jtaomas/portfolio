import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function wrapper({prop}) {
    return(
        <a className='wrapper' href={prop.link}  target= {prop.newtab ? "_blank" : "_self"}>
            <div className='top'>
                <h1 className='header'>{prop.heading}</h1>
                <i><FontAwesomeIcon icon={faArrowRight} size='2x'/></i>
            </div>
            
            <h2 className='desc'>{prop.description}</h2>
        </a>
    )
}

export default wrapper