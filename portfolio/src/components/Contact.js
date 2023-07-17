import styled from "styled-components";
import background from  "../assets/contact-background.jpeg"
import whatsapp from  "../assets/whatsapp.png"
import email from  "../assets/email.png"
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Container = styled.section`
  position: relative;
  min-height: 450px; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  
  .background{
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 12px;

    img{
      opacity: 0.15;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  
  .content{
    /* border: 1px solid red; */
    position: absolute;
    padding: 30px;
    max-width: 90%;
    border-radius: 12px;
    background: transparent;
    p, h3{
      background: transparent;
      text-align: center;
      padding: 0 50px;
      @media screen and (max-width: ${(props) => (props.bp + 'px')}){
        padding: 0;
        margin-top: 20px;
      }
    }

  }

  .invite{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    font-size: min(6vw, 40px);
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
  }

  .social-contact{
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    a{
      background: transparent;
    }
    
    img{
      background: transparent;
      max-width: 60px;
      filter: brightness(0.8);
      @media screen and (max-width: ${(props) => (props.bp + 'px')}){
        max-width: 50px;
      }
    }
  }

`
export const Contact = () => {
  const { language, defaultLanguage, mobileBreakPoint } = useContext(GlobalContext)

  return(
    <Container id="contact" bp={mobileBreakPoint}>
      <div className="background">
        <img src={background}/>
      </div>
      <div className="content">
        {language === defaultLanguage ? 
          <>
            <span className="degrade invite">Comece uma conversa</span>
            <p>Se você precisa de uma página web personalizada, deseja compartilhar ideias ou quer conhecer o meu trabalho, sinta-se à vontade para entrar em contato comigo e retornarei o mais breve possível.</p>
          </>
          :
          <>
            <span className="degrade invite">start a conversation</span>
            <p>If you need a customized web page, want to share ideas or want to get to know my work, feel free to contact me and I will get back to you as soon as possible.</p>
          </>
        }
        <span className="social-contact">
          <a href="mailto:laisrodriguesmacedo@gmail.com" target="_blank">
            <img src={email}/>
          </a>
          <a href="https://wa.me/+4901747781517" target="_blank">
            <img src={whatsapp}/>
          </a>
        </span>
      </div>
    </Container>
  )
}