import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import styled from "styled-components";
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'
import { SocialMedia } from "./SocialMedia";

const Div = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: end;
  @media screen and (max-width: ${(props) => (props.bp + 'px')}){
    justify-content: space-between;
  }
  
  .hidden{
    display: none;
    @media screen and (max-width: ${(props) => (props.bp + 'px')}){
      display: ${(props) => (props.hidden? 'none' : 'flex')};
    }
  }
  
  .theme-language{
    display: flex;
    gap: 20px;
  }

  img{
    height: 20px;
  }

  a {
    font-size: 20px;
    font-weight: 200;
    text-decoration: none;
  }
`

export const ConfigureScreen = (props) => {
  const { language, defaultLanguage, currentTheme, setCurrentTheme, BASE_URL, mobileBreakPoint } = useContext(GlobalContext)

  return(
    <Div bp={mobileBreakPoint} hidden={props.hidden}>
      <span className="hidden">
        <SocialMedia/>
      </span>
      <div className="theme-language">
        <span onClick={() => setCurrentTheme(!currentTheme)}>
          {currentTheme ? <img className="moon" src={moon}/> : <img src={sun}/>}
        </span>
        <p >
          {language === defaultLanguage ? 
            <a href={BASE_URL + '/en'}>EN</a>
            : 
            <a href={BASE_URL + '/pt'}>PT</a> 
          }
        </p>
      </div>
    </Div>
  )
}