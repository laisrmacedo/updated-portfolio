import { useContext, useEffect, useState } from "react"
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
  /* border: 1px solid red; */
  /* position: sticky;
  top: 0; */

  img{
    height: 20px;
    /* position: relative;
    z-index: 0; */
  }

  a {
    font-size: 20px;
    font-weight: 200;
    text-decoration: none;
  }

`

export const ConfigureScreen = () => {
  const { language, currentTheme, setCurrentTheme, BASE_URL } = useContext(GlobalContext)

  // console.log(localStorage.getItem("theme"))

  return(
    <Div>
      <span onClick={() => setCurrentTheme(!currentTheme)}>
        {currentTheme ? <img src={sun}/> : <img src={moon}/>}
        
      </span>
      <p >
        {language === '/pt' ? 
          <a href={BASE_URL + '/en'}>EN</a>
          : 
          <a href={BASE_URL + '/pt'}>PT</a> 
        }

        
        

      </p>
    </Div>
  )
}