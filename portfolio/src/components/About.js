import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import myself from "../assets/myself.png";
import { GlobalContext } from "../context/GlobalContext"
import { useScrollObserver } from "../hooks/useScrollObserver";
import { Recommendation } from "./Recommendation";


const Container = styled.section`
  gap: 20px;
  position: relative;

  >div{
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 16px;
    h3{
      display: none;
      @media screen and (max-width: ${(props) => (props.bp + 'px')}){
        display: flex;
        margin-right: auto;
      }
    }
  }
  aside{
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4{
      font-weight: 700;
      font-size: 20px;
    }
    a{
      text-transform: uppercase;
      font-size: 14px;
    }
  }

  span{
    font-size: 16px;
    font-weight: 200;
    line-height: 24px;
    text-align: justify;
  }  
`

const PhotoBox = styled.span`
  figure{
    float: left;
    width: 94px;
    height: 135px;
    border-radius: 12px;
    margin-right: 16px;
    margin-top: 4px;
    img{
      object-fit: cover;
      height: 120%;
      width: 100%;
    }
  }
`

export const About = () => {
  const [textSize, setTextSize] = useState(0)
  const { language, defaultLanguage, mobileBreakPoint } = useContext(GlobalContext)

  const targetRef = useRef(null);
  useScrollObserver(targetRef);

  return(
    <Container id="about" bp={mobileBreakPoint} ref={targetRef}>
      <div>
        <h3>{language === defaultLanguage ? 'Sobre mim' : 'About'}</h3>
        <button onClick={() => setTextSize(0)} className="smallBtn">{language === '/pt'? 'Curto' : 'Short'}</button>
        <button onClick={() => setTextSize(1)} className="smallBtn">{language === '/pt'? 'Longo' : 'Long'}</button>
      </div>
      {language === '/pt' ?
        (textSize === 0 ? 
        <PhotoBox>
          <figure>
            <img src={myself}/>
          </figure>
          <span>Desenvolvedora Web Full Stack formada pelo bootcamp de Programação da Labenu, onde desenvolvi habilidades técnicas de frontend e backend. Entre meus conhecimentos, posso destacar JavaScript, TypeScript, React, NodeJS, SQL e Jest. Graduada em Engenharia Civil, vivenciei experiências acadêmicas e profissionais em canteiro de obra e escritório de projetos, o que aprimorou habilidades como a comunicação eficiente, gestão de tempo, criticidade e trabalho em equipe.</span>
        </PhotoBox>
        :
        <>
        <PhotoBox>
          <figure>
            <img src={myself}/>
          </figure>
          <span>Sou Desenvolvedora Web Full-Stack formada pelo bootcamp de Programação Web Full Stack Integral da Labenu, onde desenvolvi habilidades técnicas de frontend e backend. Entre elas estão HTML, CSS, JavaScript, React, Styled-Components, React Hooks, REST, Api Restful, HTTP, Jest, Node.JS, Knex, TypeScript, MySQL, AWS, SQL, Git, Github, Testes unitários e UI Design, além de mais de 1000 horas de experiência prática, guiadas por metodologias ágeis (Kanban/Scrum).</span>
        </PhotoBox>
        
        <p>Sou graduada em Engenharia Civil, área de estudo que me identifiquei durante grande parte da minha vida. Isso porque tenho grande interesse pelas ciências exatas, pela solução de problemas e pelo processo de construção e materialização de ideais. Durante e após a graduação, tive várias oportunidades de aprender mais sobre o trabalho em equipe, a comunicação eficiente, o pensamento crítico e criativo, além de, constantemente, desenvolver a inteligência emocional e a resiliência. </p>
        
        <p>Em 2021 decidi iniciar a transição de carreira para a Programação e, hoje, estou dedicada exclusivamente aos estudos sobre o Desenvolvimento Web. A decisão foi baseada na percepção de que esta área de estudo poderia ser mais adaptável à determinadas mudanças recentes na minha vida pessoal. Além disso, encontrei na Programação um novo universo de possibilidades, um espaço convidativo onde ao mesmo tempo que me sinto confortável, sinto também o empolgante incômodo do novo e enorme desafio a ser enfrentado. Felizmente, este ambiente desconhecido e intimidador está se tornando progressivamente familiar. </p>
        </>
        )
        :
        (textSize === 0 ? 
        <PhotoBox>
          <figure>
            <img src={myself}/>
          </figure>
          <span>Full Stack Web Developer graduated from Labenu's Programming bootcamp, where I developed technical skills in both frontend and backend. Among my knowledge, I can highlight JavaScript, TypeScript, React, NodeJS, SQL, and Jest. With a degree in Civil Engineering, I have experienced academic and professional opportunities in construction sites and project offices, which enhanced skills such as effective communication, time management, critical thinking, and teamwork.</span>
        </PhotoBox>
        :
        <>
        <PhotoBox>
          <figure>
            <img src={myself}/>
          </figure>
          <span>I am a Full-Stack Web Developer, having completed Labenu's Full-Stack Web Development bootcamp. Throughout the program, I honed my skills in both frontend and backend development. I am well-versed in technologies such as HTML, CSS, JavaScript, React, Styled-Components, React Hooks, REST, RESTful APIs, HTTP, Jest, Node.js, Knex, TypeScript, MySQL, AWS, SQL, Git, GitHub, Unit Testing, and UI Design. With over 1000 hours of practical experience under my belt, guided by agile methodologies like Kanban/Scrum, I am confident in my abilities.</span>
        </PhotoBox>

        <p>Before pursuing a career in web development, I graduated in Civil Engineering, a field that fascinated me for many years. This background instilled in me a passion for exact sciences, problem-solving, and the process of turning ideas into reality through construction. Throughout my academic and professional journey, I honed essential skills such as effective communication, critical and creative thinking, teamwork, emotional intelligence, and resilience.</p>

        <p>In 2021, I made the exciting decision to transition into programming, and since then, I have been fully dedicated to studying Web Development. I found the programming world to be a captivating realm filled with endless possibilities. While it presented a new and significant challenge, I embraced it wholeheartedly. Over time, this initially unfamiliar and intimidating environment has become increasingly familiar and comfortable.</p>
        </>
        )
      }
      <aside>
        {language === defaultLanguage ? 
        <>
          <h4 className="degrade">#buscandoEmprego</h4>
          <a href="https://drive.google.com/file/d/1FDfQA03a5_llIOPaFcFgMCJcMZBTC0ag/view?usp=sharing" target="_blank">Currículo 📄</a>
        </>
        :
        <>
          <h4 className="degrade">#openToWork</h4>
          <a href="https://drive.google.com/file/d/1pIbpkeWbu3yzYVtbhEdtW3iCfqfpbUrT/view?usp=sharing" target="_blank">View full CV 📄</a>
        </>
        }
      </aside>
      <Recommendation/>
    </Container>
  )
}