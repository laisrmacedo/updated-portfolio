import { useEffect, useState } from "react";
import { Loading } from "./components/Loading";
import { Container } from "./components/Container";
import { GlobalContext } from "./context/GlobalContext";
import { GlobalStyle, AppContainer } from "./GlobalStyle";

function App() {
  const [loading, isLoading] = useState(true)
  setTimeout(() => isLoading(false), 3500)
  
  const language = window.location.pathname
  const defaultLanguage = "/pt"
  const BASE_URL = 'http://localhost:3000'
  // const BASE_URL = 'http://laisrmacedo.vercel.app'
  const [currentTheme, setCurrentTheme] = useState(false || JSON.parse(localStorage.getItem("theme")))
  
  useEffect(()=>{
    localStorage.setItem("theme", currentTheme)
  },[currentTheme])
  
  const context = {
    language,
    defaultLanguage,
    currentTheme,
    setCurrentTheme,
    BASE_URL
  }

  return (
    <GlobalContext.Provider value={context}>
      <GlobalStyle currentTheme={currentTheme}/>
      <AppContainer>
        {loading ?  
          <Loading/>
          :
          <Container/>
        }
      </AppContainer>
    </GlobalContext.Provider>
  );
}

export default App;
