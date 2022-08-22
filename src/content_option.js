import Profile from './ProfilePicture/profile.png';
import Wikipedia from './PortfolioPicture/wiki.png';
import Retroland from './PortfolioPicture/retro.png';
import Imc from './PortfolioPicture/imc.png';

const logotext = "SAKOGLU CUNEYT";
const meta = {
    title: "Sakoglu Cuneyt",
    description: "I’m Sakoglu Cuneyt data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "Je suis Sakoglu Cuneyt",
    animated: {
        first: "Développeur full stack junior",
        second: "Bienvenue sur mon portfolio",
        third: "Bonne visite",
    },
    description: "Passionné par le développement web et le développement mobile, j'aime travailler avec différentes technologies  telles que ReactJS, React Native, NodeJS, ExpressJS, MongoDB, MySQL, Symfony, PHP, JQuery, JavaScript, etc.",
    your_img_url:  Profile,
    
};

const dataabout = {
    title: "Quelques mots sur moi",
    aboutme: <p className="text-justify"> Je suis technicien de support de proximité depuis 2016.
    J'ai pu évoluer jusqu'a devenir technicien de support de proximité confirmé et reférent. Ayant fait le tour et ne pouvant évoluer qu'en dehors de la technique j'ai décidé de devenir developpeur web afin d'apprendre encore et de rester dans la technique car c'est ce qui me passionne. Pendant mes années de technicien j'ai été ammené à faire des scripts afin de faciliter les installations à distance d'applications pour mes collègues du HelpDesk. J'ai vite pris gout à developper des scripts et je me sentait utile. C'est donc tout naturellement qu'aujourd'hui je suis en formation afin de devenir Developpeur Web Full Stack."</p>
};
const worktimeline = [{
        jobtitle: "Developpeur Web et mobile Full Stack",
        where: "Next Formation",
        date: "2022",
    },
    {
        jobtitle: "Technicien de support de proximité confirmé",
        where: "Helpline",
        date: "2016 - 2021",
    },
    {
        jobtitle: "Auto-entrepreneur",
        where: "Sccm",
        date: "2015-2016",
    },
];

const skills = [{
        name: "Symfony",
        value: 50,
    },
    {
        name: "Bootstrap",
        value: 70,
    },
    {
        name: "Javascript",
        value: 40,
    },
    {
        name: "ReactJS",
        value: 20,
    },
    {
        name: "Jquery",
        value: 40,
    },
    {
        name: "HTML",
        value: 70,
    },
    {
        name: "CSS",
        value: 50,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "https://www.boyden.com/img/tiles/6501032D/soumettre-votre-cv-400x400.jpg",
        description: "Mon premier CV réalisé avec Bootstrap.",
        link: "https://master.d5jizjzr30xjw.amplifyapp.com/",
    },

    {
        img: Imc,
        description: "Calcul de l'IMC avec Javascript.",
        link: "https://master.ddd8jqbhg2x5u.amplifyapp.com/",
    },

    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Projet à venir",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Projet à venir",
        link: "#",
    },
    {
        img: Retroland,
        description: "RetroLand, plateforme d'emulateurs et de roms de console retro developpé avec ReactJS.",
        link: "https://main.d2x1geeqsnm9ja.amplifyapp.com/",
    },

    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Projet à venir",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Projet à venir",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Projet à venir",
        link: "#",
    },
    {
        img:  Wikipedia,
        description: "Recherche Wikipedia developer avec Javascript.",
        link: "https://master.dh1on8wgeriei.amplifyapp.com/",
    },

    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Projet à venir",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Projet à venir",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Projet à venir",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "cuneyt.tai@gmail.com",
    YOUR_FONE: "0750817918",
    description: "N'hésitez pas à me contacter pour toute question ou suggestion.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_k1xfljh",
    YOUR_TEMPLATE_ID: "template_zytffv6",
    YOUR_USER_ID: "blMs1L7Yq4Hw81WyD",
};

const socialprofils = {
    github: "https://github.com/cino77940",
    // facebook: "https://www.facebook.com/cino.stankovic",
    linkedin: "https://www.linkedin.com/in/cuneyt-sakoglu/",
    // twitter: "https://twitter.com/cino77940",
    // youtube: "https://www.youtube.com/channel/UCa2gGOYvhQDQTkhnBUFJK_Q",
    // twitch: "https://twitch.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
