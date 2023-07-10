import { create } from 'zustand';

interface LanguageState {
  home1: string
  home2: string
  home3: string
  home4: string
  home5: string
  projects1: string
  about1: string
  about2: string
  about3: string
  about4: string
  notFound1: string
  notFound2: string
  español: (value: string) => void
  english: (value: string) => void
}

const useLanguageStore = create<LanguageState>((set) => ({
  //Default state
  home1: "Front-end developer",
  home2: "Welcome to my portfolio! I'm passionate about crafting innovative digital experiences through code, and transforming complex ideas into elegant solutions. Focused in front-end development, attentive to innovations and interested in improving my back-end knowledge through practice in working groups.",
  home3: "Whether it's creating interactive websites or optimizing the performance of existing code, I approach each project with enthusiasm.",
  home4: "Let's create something extraordinary together!",
  home5: "Skills acquired",
  projects1: "Projects",
  about1: "About me",
  about2: "Hello! It's nice to meet you, and I appreciate you taking the time to explore my work. Do not hesitate to communicate through the following means of contact.",
  about3: "Let's make your ideas come true!",
  about4: "Contact",
  notFound1: "404 Error Page",
  notFound2: "Sorry we can't find the page.",

  english: () => set((state) => ({
    home1: "Front-end developer",
    home2: "Welcome to my portfolio! I'm passionate about crafting innovative digital experiences through code, and transforming complex ideas into elegant solutions. Focused in front-end development, attentive to innovations and interested in improving my back-end knowledge through practice in working groups.",
    home3: "Whether it's creating interactive websites or optimizing the performance of existing code, I approach each project with enthusiasm.",
    home4: "Let's create something extraordinary together!",
    home5: "Skills acquired",
    projects1: "Projects",
    about1: "About me",
    about2: "Hello! It's nice to meet you, and I appreciate you taking the time to explore my work. Do not hesitate to communicate through the following means of contact.",
    about3: "Let's make your ideas come true!",
    about4: "Contact",
    notFound1: "404 Error Page",
    notFound2: "Sorry we can't find the page.",
  })),

  español: () => set((state) => ({
    home1: "Desarrollador front-end",
    home2: "¡Bienvenido a mi portafolio! Me apasiona crear experiencias digitales innovadoras a través del código y transformar ideas complejas en soluciones elegantes. Enfocado en el desarrollo front-end, atento a las innovaciones e interesado en mejorar mis conocimientos de back-end a través de la práctica en grupos de trabajo.",
    home3: "Ya sea creando sitios web interactivos u optimizando el rendimiento del código existente, abordo cada proyecto con entusiasmo.",
    home4: "¡Creemos algo extraordinario juntos!",
    home5: "Habilidades adquiridas",
    projects1: "Proyectos",
    about1: "Acerca de mí",
    about2: "¡Hola! Es un placer conocerte y agradezco que te tomes el tiempo para explorar mi trabajo. No dude en comunicarse a través de los siguientes medios de contacto.",
    about3: "¡Hagamos realidad tus ideas!",
    about4: "Contactos",
    notFound1: "Página de error 404",
    notFound2: "Lo sentimos, no podemos encontrar la página."
  })),
}))

export default useLanguageStore
