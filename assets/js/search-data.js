// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-investigación",
          title: "Investigación",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/es/investigacion/";
          },
        },{id: "nav-forschung",
          title: "Forschung",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/de/forschung/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-informes-de-política",
          title: "Informes de política",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/es/informes/";
          },
        },{id: "nav-politikberichte",
          title: "Politikberichte",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/de/politikberichte/";
          },
        },{id: "nav-policy-reports",
          title: "Policy Reports",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/policy-reports/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/es/cv/";
          },
        },{id: "nav-lebenslauf",
          title: "Lebenslauf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/de/lebenslauf/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-fuera-de-la-investigación",
          title: "Fuera de la investigación",
          description: "Ciclismo, aire libre y alguna que otra pregunta a los datos.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/es/aficiones/";
          },
        },{id: "nav-neben-der-forschung",
          title: "Neben der Forschung",
          description: "Velofahren, draussen sein und ab und zu eine Frage an die Daten.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/de/neben-der-forschung/";
          },
        },{id: "nav-beyond-research",
          title: "Beyond Research",
          description: "Cycling, the outdoors, and the occasional data question.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/beyond/";
          },
        },{id: "nav-contacto",
          title: "Contacto",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/es/contacto/";
          },
        },{id: "nav-kontakt",
          title: "Kontakt",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/de/kontakt/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-i-received-a-lives-young-scholar-grant-to-field-a-survey-of-swiss-teachers-education-policy-preferences",
          title: 'I received a LIVES Young Scholar Grant to field a survey of Swiss...',
          description: "",
          section: "News",},{id: "news-ich-habe-ein-lives-young-scholar-grant-erhalten-um-eine-befragung-von-schweizer-lehrpersonen-zu-ihren-bildungspolitischen-präferenzen-durchzuführen",
          title: 'Ich habe ein LIVES Young Scholar Grant erhalten, um eine Befragung von Schweizer...',
          description: "",
          section: "News",},{id: "news-recibí-una-lives-young-scholar-grant-para-realizar-una-encuesta-sobre-las-preferencias-de-política-educativa-del-profesorado-suizo",
          title: 'Recibí una LIVES Young Scholar Grant para realizar una encuesta sobre las preferencias...',
          description: "",
          section: "News",},{id: "news-our-article-who-deserves-student-finance-appeared-in-the-journal-of-ethnic-and-migration-studies",
          title: 'Our article Who deserves student finance? appeared in the Journal of Ethnic and...',
          description: "",
          section: "News",},{id: "news-unser-artikel-who-deserves-student-finance-ist-im-journal-of-ethnic-and-migration-studies-erschienen",
          title: 'Unser Artikel Who deserves student finance? ist im Journal of Ethnic and Migration...',
          description: "",
          section: "News",},{id: "news-nuestro-artículo-who-deserves-student-finance-apareció-en-el-journal-of-ethnic-and-migration-studies",
          title: 'Nuestro artículo Who deserves student finance? apareció en el Journal of Ethnic and...',
          description: "",
          section: "News",},{id: "news-i-presented-my-work-on-the-local-welcoming-of-refugee-children-in-switzerland-at-the-swiss-political-science-association-annual-congress-in-zürich",
          title: 'I presented my work on the local welcoming of refugee children in Switzerland...',
          description: "",
          section: "News",},{id: "news-ich-habe-meine-arbeit-zur-lokalen-aufnahme-geflüchteter-kinder-in-der-schweiz-am-jahreskongress-der-schweizerischen-vereinigung-für-politische-wissenschaft-in-zürich-vorgestellt",
          title: 'Ich habe meine Arbeit zur lokalen Aufnahme geflüchteter Kinder in der Schweiz am...',
          description: "",
          section: "News",},{id: "news-presenté-mi-trabajo-sobre-la-acogida-local-de-niños-refugiados-en-suiza-en-el-congreso-anual-de-la-asociación-suiza-de-ciencia-política-en-zúrich",
          title: 'Presenté mi trabajo sobre la acogida local de niños refugiados en Suiza en...',
          description: "",
          section: "News",},{id: "news-i-presented-who-likes-tracking-at-the-epss-annual-conference-in-belfast",
          title: 'I presented Who Likes Tracking? at the EPSS Annual Conference in Belfast.',
          description: "",
          section: "News",},{id: "news-ich-habe-who-likes-tracking-an-der-epss-annual-conference-in-belfast-vorgestellt",
          title: 'Ich habe Who Likes Tracking? an der EPSS Annual Conference in Belfast vorgestellt....',
          description: "",
          section: "News",},{id: "news-presenté-who-likes-tracking-en-la-epss-annual-conference-en-belfast",
          title: 'Presenté Who Likes Tracking? en la EPSS Annual Conference, en Belfast.',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
