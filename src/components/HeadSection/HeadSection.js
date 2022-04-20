import React,{useContext} from 'react'
import { HeadSectionMain } from './StyledHeadSection';
import { ToggleModeContext } from '../../App';
import lightMode from '../../assets/lightMode.svg';
import darkMode from '../../assets/darkMode.svg';

const HeadSection = ({heading}) => {
const {themeToggler,theme}=useContext(ToggleModeContext);
  return (
    <HeadSectionMain>

            <div className="first-section d-flex justify-content-between ">
                <h3 className='heading'>{heading}</h3>
                <span>
                    {
                        theme==='light'?( <img src={darkMode} onClick={themeToggler} alt="darkMode" />):( <img src={lightMode} onClick={themeToggler} alt="lightMode" />)
                    }
                   
                </span>
            </div>
    </HeadSectionMain>
  )
}

export default HeadSection