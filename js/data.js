// ─── SITE META ───────────────────────────────────────────────
export const meta = {
    name: 'Massimo Campagnaro',
    email: 'maxs.campagnaro@gmail.com',
    phone: '+39 349 8723 518',
    social: {
        github: 'https://github.com/massimocampagnaro',
        instagram: 'https://www.instagram.com/massimo_campagnaro',
        linkedin: 'https://www.linkedin.com/in/massimo-campagnaro-bb83a8294/',
        facebook: 'https://www.facebook.com/massimo.campagnaro.5',
    },
    cv: {
        en: 'files/MassimoCampagnaroCV_en.pdf',
        it: 'files/MassimoCampagnaroCV_it.pdf',
    },
    chessUrl: 'https://www.chess.com/member/maxeeno',
    formScriptUrl: 'https://lively-bush-ba6d.massimocampagnaro-portfolio.workers.dev',
};

// ─── TRANSLATIONS ────────────────────────────────────────────
export const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            portfolio: 'Portfolio',
            contact: 'Contacts',
        },
        lang: {
            en: 'English',
            it: 'Italian',
        },
        hero: {
            subtitle: 'Software Developer and CSE student',
            greeting: "Hi, I'm",
            location: 'from Italy',
        },
        about: {
            title: 'About Me',
            bio: 'Enthusiastic and dedicated Software Developer and Computer Science and Engineering student with a passion for technology, software development, and Artificial Intelligence.',
        },
        tabs: {
            education: 'Education',
            experience: 'Work Experience',
            hobbies: 'Hobbies',
        },
        skills: {
            title: 'My Skills',
        },
        portfolio: {
            title: 'My Projects',
            seeMore: 'See more',
            seeLess: 'See less',
        },
        contact: {
            title: 'Contact Me',
            namePlaceholder: 'Your Name',
            emailPlaceholder: 'Your Email',
            messagePlaceholder: 'Your Message',
            submit: 'Submit',
            downloadCV: 'Download CV',
            sendingMsg: 'Sending…',
            successMsg: 'Message sent successfully!',
            errorMsg: 'Something went wrong. Please try again.',
        },
    },

    it: {
        nav: {
            home: 'Inizio',
            about: 'Chi sono',
            skills: 'Competenze',
            portfolio: 'Progetti',
            contact: 'Contatti',
        },
        lang: {
            en: 'Inglese',
            it: 'Italiano',
        },
        hero: {
            subtitle: 'Sviluppatore Software e Ingegnere Informatico',
            greeting: 'Ciao, sono',
            location: "dall'Italia",
        },
        about: {
            title: 'Mi presento,',
            bio: "sono uno sviluppatore software e studente di Ingegneria Informatica entusiasta e dedicato con una passione per la tecnologia, lo sviluppo di software e l'Intelligenza Artificiale.",
        },
        tabs: {
            education: 'Educazione',
            experience: 'Esperienza Lavorativa',
            hobbies: 'Passioni',
        },
        skills: {
            title: 'Le mie Competenze',
        },
        portfolio: {
            title: 'I miei Progetti',
            seeMore: 'Vedi altri',
            seeLess: 'Vedi meno',
        },
        contact: {
            title: 'Contattami',
            namePlaceholder: 'Il tuo nome',
            emailPlaceholder: 'La tua email',
            messagePlaceholder: 'Il tuo messaggio',
            submit: 'Invia',
            downloadCV: 'Scarica il CV',
            sendingMsg: 'Invio in corso…',
            successMsg: 'Messaggio inviato con successo!',
            errorMsg: 'Qualcosa è andato storto. Riprova.',
        },
    },
};

// ─── EDUCATION ───────────────────────────────────────────────
export const education = [
    {
        title: {
            en: 'Computer Science & Engineering, Master Degree',
            it: 'Computer Science & Engineering, Laurea Magistrale',
        },
        url: 'https://www.polimi.it/en/education/laurea-magistrale-programmes/programme-detail/computer-science-and-engineering',
        institution: {
            en: 'Politecnico di Milano — Milan, Italy',
            it: 'Politecnico di Milano — Milano, Italia',
        },
        period: {from: '2025', to: 'present'},
        description: {
            en: "Currently pursuing a Master's degree in Computer Science and Engineering with a focus on Artificial Intelligence and Machine Learning. Courses include advanced algorithms, data structures, and software engineering principles.",
            it: "Attualmente in corso di laurea magistrale in Informatica e Ingegneria dell'Informazione con specializzazione in Intelligenza Artificiale e Machine Learning. Corsi di studio che includono algoritmi avanzati, strutture dati e principi di ingegneria del software.",
        },
    },
    {
        title: {en: 'Computer Engineering, Bachelor Degree', it: 'Ingegneria Informatica, Laurea Triennale'},
        url: 'https://lauree.dei.unipd.it/lauree/ingegneria-informatica/',
        institution: {
            en: 'Università degli Studi di Padova — Padua, Italy',
            it: 'Università degli Studi di Padova — Padova, Italia',
        },
        period: {from: '2021', to: '2025'},
        description: {
            en: "I've gained a deep understanding of hardware and software concepts, honed my skills in designing and optimizing complex systems, and I'm proficient in programming languages and technologies crucial to the field. For the last year I've done an internship at KanbanBOX while studying.",
            it: 'Ho acquisito una profonda comprensione dei concetti hardware e software e perfezionato le mie competenze nella progettazione di sistemi complessi.',
        },
    },
    {
        title: {en: 'Scientific High School', it: 'Liceo Scientifico delle Scienze Applicate'},
        url: 'https://www.fogazzaro.edu.it/pagine/liceo-scientificodelle-scienze-applicate',
        institution: {en: 'Liceo Don G. Fogazzaro — Vicenza, Italy', it: 'Liceo Don G. Fogazzaro — Vicenza, Italia'},
        period: {from: '2016', to: '2021'},
        description: {
            en: 'Obtained the basics of C++ programming, laying a strong foundation for my future in Computer Engineering.',
            it: 'Ho acquisito le basi della programmazione in C++, ponendo solide fondamenta per il mio futuro in Ingegneria Informatica.',
        },
    },
];

// ─── WORK EXPERIENCE ─────────────────────────────────────────
export const experience = [
    {
        title: {en: 'Software Developer', it: 'Sviluppatore Software'},
        url: 'https://www.kanbanbox.com/',
        institution: 'KanbanBOX',
        period: {from: '2024', to: 'present'},
        description: {
            en: "I started working at KanbanBOX as a final year university intern, and now work there indefinitely as I've found the development environment very satisfying. My responsibilities include developing new features, maintaining existing systems, and collaborating with cross-functional teams to deliver high-quality software solutions.",
            it: "Ho iniziato a lavorare a KanbanBOX come stage dell'ultimo anno di triennale, e ora lavoro lì a tempo indeterminato essendomi trovato molto bene come ambiente (di sviluppo 😉). Le mie responsabilità includono lo sviluppo di nuove funzionalità, il mantenimento dei sistemi esistenti e la collaborazione con team interfunzionali per fornire soluzioni software di alta qualità.",
        },
    },
    {
        title: {en: 'Deliveroo Rider', it: 'Rider Deliveroo'},
        url: 'https://riders.deliveroo.it/it/',
        institution: {en: 'Deliveroo · In free time', it: 'Deliveroo · Nel tempo libero'},
        period: {from: '2021', to: '2024'},
        description: {
            en: "As a future engineer, I've harnessed technology to optimize my delivery routes and ensure an efficient service. This hands-on experience deepened my appreciation for the impact of tech-driven solutions and allowed me to practice my cycling hobby when weather permitted.",
            it: 'Come futuro ingegnere, ho sfruttato la tecnologia per ottimizzare i percorsi di consegna e garantire un servizio efficiente. Questa esperienza ha approfondito il mio apprezzamento per le soluzioni tech e mi ha permesso di praticare il ciclismo.',
        },
    },
];

// ─── HOBBIES ─────────────────────────────────────────────────
export const hobbies = [
    {
        title: {en: 'Chess', it: 'Scacchi'},
        url: 'https://www.chess.com/member/maxeeno',
        description: {
            en: "Playing chess is one of my passions — it's relaxing and keeps the mind trained. I'm not playing that much at the moment, but if you want to challenge me, click the link!",
            it: 'Giocare a scacchi è una delle mie passioni — è rilassante e mantiene la mente allenata. Non gioco moltissimo ultimamente, ma se vuoi sfidarmi, clicca il link!',
        },
    },
    {
        title: {en: 'Cycling', it: 'Ciclismo'},
        description: {
            en: 'I like to go on bike rides, see new places and keep myself physically active.',
            it: 'Mi piace andare in bici, scoprire nuovi posti e mantenermi fisicamente attivo.',
        },
    },
    {
        title: {en: 'Basketball', it: 'Pallacanestro'},
        description: {
            en: 'I played basketball in a team until a few years ago, but lately I enjoy going to the court with friends.',
            it: 'Ho giocato a basket in una squadra fino a qualche anno fa, ultimamente mi piace andare al campetto con gli amici.',
        },
    },
    {
        title: {en: 'Programming', it: 'Programmazione'},
        description: {
            en: "Designing and coding are things that can keep me focused for hours. I'm passionate about creating something new and solving problems — the satisfaction of getting it to work is always greater than the frustration.",
            it: 'Progettare e programmare possono tenermi concentrato per ore. Sono appassionato di creare qualcosa di nuovo e risolvere problemi — la soddisfazione di riuscirci supera sempre la frustrazione.',
        },
    },
];

// ─── SKILLS ──────────────────────────────────────────────────
// icon: { type: 'fa', value: 'fa-brands fa-java' }  → Font Awesome class
//       { type: 'img', value: 'img/icon_c++.png', alt: 'C++' } → local image
export const skills = [
    {
        name: 'Java',
        icons: [{type: 'fa', value: 'fa-brands fa-java'}],
        description: {
            en: 'Frequently used at University, mainly for group projects. I master it well enough to produce complete applications.',
            it: "Usato frequentemente all'università, principalmente per progetti di gruppo. Lo padroneggio abbastanza da produrre applicazioni complete.",
        },
        links: [
            {label: {en: '👉 Java App', it: '👉 App Java'}, href: '#portfolio'},
        ],
    },
    {
        name: 'C++',
        icons: [{type: 'img', value: 'img/icon_c++.png', alt: 'C++'}],
        description: {
            en: "An important language for understanding how to program at a low level. I've used it for University projects and I'm using it in a personal one. I consider myself proficient enough to use it in all its facets.",
            it: "Un linguaggio fondamentale per capire la programmazione a basso livello. L'ho usato per progetti universitari e lo uso in uno personale. Mi considero abbastanza esperto da usarlo in tutte le sue sfaccettature.",
        },
        links: [
            {label: {en: '👉 University project', it: '👉 Progetto universitario'}, href: '#battleship'},
            {label: {en: '👉 Personal project', it: '👉 Progetto personale'}, href: '#armonia'},
        ],
    },
    {
        name: 'Other Languages',
        icons: [
            {type: 'img', value: 'img/postgresqldraw.png', alt: 'PostgreSQL'},
            {type: 'img', value: 'img/python.png', alt: 'Python'},
            {type: 'img', value: 'img/assembly.png', alt: 'Assembly'},
        ],
        description: {
            en: 'At University I learned the basics of PostgreSQL, Python and Assembly ARM. I used them for targeted tasks and plan to expand their use in future projects.',
            it: "All'università ho imparato le basi di PostgreSQL, Python e Assembly ARM, usati per compiti specifici, con piani per espanderli in progetti futuri.",
        },
        links: [
            {label: {en: '👉 Personal project', it: '👉 Progetto personale'}, href: '#armonia'},
        ],
    },
];

// ─── PROJECTS ────────────────────────────────────────────────
// featured: true  → always visible
// featured: false → hidden behind "See more"
export const projects = [
    {
        id: 'stockout_model',
        title: {en: 'Stockout Model', it: 'Modello per la rottura di stock'},
        image: 'img/stockout_model.png',
        description: {
            en: 'Neural network model for stockout prediction on which I based my bachelor thesis. Built with TensorFlow and trained on KanbanBOX historical data, to be integrated into the KanbanBOX application itself.',
            it: 'Modello neurale per la predizione della rottura di stock, su cui ho basato la mia tesi triennale. Costruito con TensorFlow e addestrato su dati storici di KanbanBOX, per poi essere integrato nel sistema stesso.',
        },
        link: {
            url: 'https://thesis.unipd.it/retrieve/5fdc6c74-a106-4bb6-8422-d86e71016321/Campagnaro_Massimo.pdf',
            type: 'external',
        },
        featured: true,
    },
    {
        id: 'klotski',
        title: {en: 'Klotski Game', it: 'Gioco Klotski'},
        image: 'img/klotski.png',
        description: {
            en: 'A Java application of the sliding puzzle game Klotski, developed with three other students for University. Features an AWS-backed puzzle solver and a random configuration generator.',
            it: "Applicazione Java del gioco Klotski sviluppata con altri tre studenti per l'università. Include un risolutore su server AWS e un generatore di configurazioni casuali.",
        },
        link: {url: 'https://massimocampagnaro.github.io/Klotski', type: 'external'},
        featured: true,
    },
    {
        id: 'armonia',
        title: {en: 'Armonia', it: 'Armonia'},
        image: 'img/armonia.png',
        description: {
            en: 'A personal project to build an app that repositions desktop icons according to saved layouts. C++ handles the logic, C# the UI. Still in development — repo not yet public.',
            it: "Progetto personale per sviluppare un'app che riposiziona le icone del desktop in base a layout salvati. C++ per la logica, C# per la UI. Ancora in sviluppo — repo non ancora pubblica.",
        },
        link: {url: 'https://github.com/massimocampagnaro/Armonia', type: 'external'},
        featured: true,
    },
    {
        id: 'site',
        title: {en: 'This Website!', it: 'Questo sito!'},
        image: 'img/deskfull.png',
        description: {
            en: 'My personal portfolio, designed and coded from scratch. I always wanted to build a good-looking portfolio site — and here it is 🙃',
            it: 'Il mio portfolio personale, progettato e codificato da zero. Ho sempre voluto costruire un sito portfolio e finalmente eccolo qui 🙃',
        },
        link: {url: 'https://massimocampagnaro.github.io/', type: 'external'},
        featured: true,
    },
    {
        id: 'battleship',
        title: {en: 'Battleship', it: 'Battaglia Navale'},
        image: 'img/battleship.png',
        description: {
            en: 'The classic Battleship game — playable from the command line... A group University project built with CMake.',
            it: 'Il classico gioco della Battaglia Navale — giocabile solo da riga di comando... Progetto di gruppo universitario sviluppato con CMake.',
        },
        link: {url: 'files/battleship.zip', type: 'download'},
        featured: false,
    },
];
