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
          <span>Profissional da área de Desenvolvimento Web há 2 anos. Nesse período, desenvolvi habilidades técnicas com destaque para React, JavaScript, CSS, Nodejs e Testes Unitários. Tenho vários projetos pessoais desenvolvidos e um deles é o Convite de Casamento, uma aplicação web full stack autoral que já foi utilizada para facilitar a organização da lista de convidados de dois casamentos, sendo aprovada pelos usuários. Além disso, sou formada em Engenharia Civil pela UFCG, área de estudo que me fez desenvolver habilidades como resolução de problemas, atenção aos detalhes, gerenciamento de tempo, pensamento lógico e analítico, trabalho em equipe, comunicação eficiente e  criatividade. </span>
        </PhotoBox>
        :
        <>
        <PhotoBox>
          <figure>
            <img src={myself}/>
          </figure>
          <span>Sou Desenvolvedora Frontend e há 2 anos estou aprimorando minhas habilidades. Nesse processo, destaco a minha dedicação durante 6 meses intensivos no curso de Programação Web Full Stack Integral da Labenu, onde desenvolvi habilidades técnicas de frontend e backend. Entre elas estão React, CSS, JavaScript, Api Restful, HTTP, Jest, Node.JS, TypeScript, SQL, Git, Github, Testes unitários e UI Design, além de mais de 1000 horas de experiência prática, guiadas por metodologias ágeis. </span>
        </PhotoBox>
        
        <p>Atualmente, faço parte da equipe Docunder, uma plataforma de documentação técnica funcional e colaborativa que permitirá a criação, a edição, o compartilhamento e a organização eficiente de documentos técnicos. Nesse projeto, faço parte da equipe front-end e auxilio no back-end. Estamos utilizando ferramentas como NextJS, TypeScript, Tailwind CSS, Docker, NodeJS, Prisma e Figma. A equipe é multifuncional e inclui profissionais de design de UX/UI, gerenciamento de produtos, design de produtos, metodologias ágeis e desenvolvimento.</p>
        
        <p>Até então, tenho vários projetos pessoais desenvolvidos. Um deles é o Wedding Invitation, uma aplicação web full stack, autoral e que é utilizada em situações reais para facilitar a organização da lista de convidados de casamentos. Nesse projeto, são utilizadas tecnologias como React, Styled-Components, React Router, Axios e integração de API, além de NodeJS, Typescript, Express e PostgreSQL.</p>

        <p>Sou graduada em Engenharia Civil, área de estudo que me identifiquei durante grande parte da minha vida. Isso porque tenho grande interesse pelas ciências exatas, pela solução de problemas e pelo processo de construção e materialização de ideais. Durante e após a graduação, tive várias oportunidades de aprender mais sobre o trabalho em equipe, a comunicação eficiente, o pensamento crítico e criativo, além de desenvolver a inteligência emocional e a resiliência.</p>

        <p>Em 2021 decidi iniciar a transição de carreira para a Programação e, hoje, estou dedicada exclusivamente aos estudos sobre o Desenvolvimento Web. A decisão foi baseada na percepção de que esta área de estudo poderia ser mais adaptável à determinadas mudanças recentes na minha vida pessoal. Além disso, encontrei na Programação um novo universo de possibilidades, um espaço convidativo onde ao mesmo tempo que me sinto confortável, sinto também o empolgante incômodo do novo e enorme desafio a ser enfrentado. Felizmente, este ambiente desconhecido e intimidador está se tornando progressivamente familiar.</p>
        </>
        )
        :
        (textSize === 0 ? 
        <PhotoBox>
          <figure>
            <img src={myself}/>
          </figure>
          <span>I have been a front-end developer for 2 years. During this time, I have developed strong technical skills, particularly in React, JavaScript, CSS, Node.js, and unit testing. I have completed several personal projects, including a full-stack web application called Wedding Invitation. This project has been used to help organize guest lists for two weddings and received positive feedback from users. Additionally, I hold a degree in Civil Engineering from UFCG, where I developed skills such as problem-solving, attention to detail, time management, logical and analytical thinking, teamwork, effective communication, and creativity.</span>
        </PhotoBox>
        :
        <>
        <PhotoBox>
          <figure>
            <img src={myself}/>
          </figure>
          <span>I'm a Full-Stack Web Developer and I've been improving my skills for over 2 years. In this process, I'd like to highlight my dedication to Labenu's Full-Stack Web Programming course for 6 intensive months, where I developed frontend and backend technical skills. These include React, CSS, JavaScript, Api Restful, HTTP, Jest, Node.JS, TypeScript, SQL, Git, Github, Unit Testing and UI Design, as well as over 1000 hours of practical experience, guided by agile methodologies.</span>
        </PhotoBox>

        <p>I'm currently part of the Docunder team, a functional and collaborative technical documentation platform that will enable the efficient creation, editing, sharing and organization of technical documents. In this project, I'm part of the front-end team and help with the back-end. We are using tools such as NextJS, TypeScript, Tailwind CSS, Docker, NodeJS, Prisma and Figma. The team is cross-functional and includes professionals from UX/UI design, product management, product design, agile methodologies and development.</p>

        <p>To date, I have developed several personal projects. One of them is Wedding Invitation, a full-stack, authored web application that is used in real-life situations to facilitate the organization of wedding guest lists. This project uses technologies such as React, Styled-Components, React Router, Axios and API integration, as well as NodeJS, Typescript, Express and PostgreSQL. </p>

        <p>I have a degree in Civil Engineering, a field of study that I have identified with for most of my life. This is because I have a great interest in the exact sciences, problem-solving and the process of building and materializing ideals. During and after graduation, I had several opportunities to learn more about teamwork, effective communication, critical and creative thinking, as well as developing emotional intelligence and resilience. </p>

        <p>In 2021, I decided to start the career transition to Programming and, today, I am dedicated exclusively to studying Web Development. The decision was based on the realization that this area of study could be more adaptable to certain recent changes in my personal life. What's more, I found in Programming a new universe of possibilities, an inviting space where, at the same time as feeling comfortable, I also felt the exciting discomfort of the new and enormous challenge to be faced. Fortunately, this unfamiliar and intimidating environment is becoming progressively familiar. </p>
        </>
        )
      }
      <aside>
        {language === defaultLanguage ? 
        <>
          <h4 className="degrade">#buscandoEmprego</h4>
          <a href="https://drive.google.com/file/d/1JZn5Z5vKZtX6MF-pXAt3xyv7Jz7aoBa_/view?usp=sharing" target="_blank">Currículo 📄</a>
        </>
        :
        <>
          <h4 className="degrade">#openToWork</h4>
          <a href="https://drive.google.com/file/d/1QHhCD98djfXezrVHhlZNsHE14eqZ4Nxk/view?usp=sharing" target="_blank">View full CV 📄</a>
        </>
        }
      </aside>
      <Recommendation/>
    </Container>
  )
}