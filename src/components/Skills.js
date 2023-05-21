import React from 'react'
import SkillCards from './SkillCards'

export default function Skills(props) {
  const skillArray = [
    {
      key: 1,
      name: 'HTML',
      level: 'Expert',
      detail: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."
    },
    {
      key: 2,
      name: 'CSS',
      level: 'Expert',
      detail: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
    },
    {
      key: 3,
      name: 'JavaScript',
      level: 'Expert',
      detail: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."
    },
    {
      key: 4,
      name: 'Bootstrap',
      level: 'Expert',
      detail: "TBootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components."
    },
    {
      key: 5,
      name: 'ReactJS',
      level: 'Expert',
      detail: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js."
    },
    {
      key: 6,
      name: 'NodeJS',
      level: 'Expert',
      detail: "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser. "
    }

  ]


  return (
    <>
      <h1 id='skill' className={`mt-4 fw-bolder text-center text-${props.mode.color}`}>Skills</h1>

      <div id='skill-container' className={`card-container d-flex text-${props.mode.color}`} style={{ 'height': '50vh', 'width': '130vw' }}>
        {skillArray.map(element => {
          return <SkillCards mode={props.mode} key={element.key} name={element.name} level={element.level} detail={element.detail} />
        })}
      </div>

    </>
  )
}
