import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import styled from "styled-components";
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

const Div = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  padding-right: 40px;

  img{
    height: 20px;
  }

  a {
    font-size: 20px;
    font-weight: 200;
    text-decoration: none;
  }
`

export const ConfigureScreen = () => {
  const { language, defaultLanguage, currentTheme, setCurrentTheme, BASE_URL } = useContext(GlobalContext)

  return(
    <Div>
      <span onClick={() => setCurrentTheme(!currentTheme)}>
        {currentTheme ? <img src={sun}/> : <img src={moon}/>}
      </span>
      <p >
        {language === defaultLanguage ? 
          <a href={BASE_URL + '/en'}>EN</a>
          : 
          <a href={BASE_URL + '/pt'}>PT</a> 
        }
      </p>
    </Div>
  )
}