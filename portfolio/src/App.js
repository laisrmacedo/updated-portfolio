import { useEffect, useState } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { GlobalStyle, AppContainer } from "./GlobalStyle";
import { HomeScreen } from "./components/HomeScreen";
import { AnimatedText } from "./components/AnimatedText";
import { Main } from "./components/Main";

function App() {
  const [loading, isLoading] = useState(true)
  setTimeout(() => isLoading(false), 3500)
  
  const language = window.location.pathname
  const defaultLanguage = "/pt"
  const mobileBreakPoint = 480
  const BASE_URL = 'http://localhost:3000'
  // const BASE_URL = 'http://laisrmacedo.vercel.app'
  const [currentTheme, setCurrentTheme] = useState(false || JSON.parse(localStorage.getItem("theme")))
  const [visibleId, setVisibleId] = useState("btn-about");

  useEffect(()=>{
    localStorage.setItem("theme", currentTheme)
    console.log(currentTheme)
  },[currentTheme])
  
  const context = {
    language,
    defaultLanguage,
    currentTheme,
    setCurrentTheme,
    BASE_URL,
    mobileBreakPoint,
    visibleId,
    setVisibleId
  }

  return (
    <GlobalContext.Provider value={context}>
      <GlobalStyle currentTheme={currentTheme}/>
      <AppContainer>
        <div id="background-homescreeen">
          <img src="https://images.pexels.com/photos/4006143/pexels-photo-4006143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
          <AnimatedText/>
        </div>
        <div id="main-content">
          <HomeScreen/>
          <Main/>
        </div>
      </AppContainer>
    </GlobalContext.Provider>
  );
}

export default App;
