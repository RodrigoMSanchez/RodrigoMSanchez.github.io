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
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
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
            window.location.href = "/cv/";
          },
        },{id: "nav-beyond-research",
          title: "Beyond Research",
          description: "Cycling, the outdoors, and the occasional data question.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/beyond/";
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
          section: "News",},{id: "news-our-article-who-deserves-student-finance-appeared-in-the-journal-of-ethnic-and-migration-studies",
          title: 'Our article Who deserves student finance? appeared in the Journal of Ethnic and...',
          description: "",
          section: "News",},{id: "news-i-presented-my-work-on-the-local-welcoming-of-refugee-children-in-switzerland-at-the-swiss-political-science-association-annual-congress-in-zürich",
          title: 'I presented my work on the local welcoming of refugee children in Switzerland...',
          description: "",
          section: "News",},{id: "news-i-presented-who-likes-tracking-at-the-epss-annual-conference-in-belfast",
          title: 'I presented Who Likes Tracking? at the EPSS Annual Conference in Belfast.',
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
