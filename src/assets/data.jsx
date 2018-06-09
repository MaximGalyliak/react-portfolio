const projects = [
  {
    title: "Duel Game",
    img: require("./img/portfolio/duelGame.png"),
    description:
      "Interactive browser game that allows player to pick a hero and choose an opponent.",
    tools: "jQuery*css*html",
    link: {
      WEBSITE: "https://maximgalyliak.github.io/week-4-game/",
      REPO: "https://github.com/MaximGalyliak/week-4-game",
    },
  },
  {
    title: "Event Beast",
    img: require("./img/portfolio/EventBeast.png"),
    description:
      "How many times you looking for events in your area and wish you could see them on the map? The EventBeast does just that. Fill up your search area/city/adress and explore!",
    tools: "React*MaterialUi*Firebase*MeetUp, GoogleMaps and DarkWeather api's",
    link: {
      WEBSITE: "https://maximgalyliak.github.io/EventBeast/",
      REPO: "https://github.com/MaximGalyliak/EventBeast",
    },
  },
  {
    title: "Trivia",
    img: require("./img/portfolio/triviaGame.png"),
    description:
      "Fun quiz to check your knowlege of the Solar System. Player will be given 10 seconds to answer the question. Game made logic made utilizing javascript/jQuery timing events and timers.",
    tools: "jQuery*JavaScript*html*css",
    link: {
      WEBSITE: "https://maximgalyliak.github.io/TriviaGame/",
      REPO: "https://github.com/MaximGalyliak/TriviaGame",
    },
  },
  {
    title: "CLI-Store",
    img: require("./img/portfolio/cliStore.png"),
    description:
      "CLI store application whritten in JS for Nodejs that works with mySLQ database to process and hold data.",
    tools: "Node.js*mySQL*Inquirer.js",
    link: {
      REPO: "https://github.com/MaximGalyliak/mySQL-CLI-store",
    },
  },
  {
    title: "Friend finder",
    img: require("./img/portfolio/friendFiner.png"),
    description:
      "Full stack web app that follows MVC pattern. User can answer a series of questions to figure out who cant be his/her best match!",
    tools: "Node.js*Express*HTML* Bootsrap*jQuery*html",
    link: {
      REPO: "https://github.com/MaximGalyliak/friend-finder",
      WEBSITE: "https://friendfinder-maxg.herokuapp.com/",
    },
  },
  {
    title: "Tech isle",
    img: require("./img/portfolio/techNews.png"),
    description:
      "Full stack web app that follows MVC pattern. Scrapes articles from tech news website and puts it in mongodb database. Allows user to read them as well as leave comments.",
    tools: "Node.js*Express.js*mongoose*cheerio*request.js*Handlebars.js",
    link: {
      REPO: "https://github.com/MaximGalyliak/news-outlook",
      WEBSITE: "https://news-outlook.herokuapp.com/",
    },
  },
];

const bio = {
  title: "Maxim Galyliak",
  img: "",
  description:
    "My name is Maksym and I’m full-stack web developer with passion for quality software that improves everyday people lives. I got bachelor's degree in Computer Science and currently going through coding boot camp from UC Davis Extension.\n I'm also an expert in google search, reading documentation and proud user of Stack Overflow:)\n Located in Sacramento, California",
  skills:
    "html5, css3, JavaScript, JSX, React.js, Handlebars.js, jQuery, Node.js, Express.js, mySQL, MongoDB, Sequelize.js, Mongoose, Mocha, Chai, Nighmare.js, Visual Code, Sublime Text 3, Git - Git Bash/ GitHub, Various Api’s",
  link: {
    resume: require("./Resume.pdf"),
    Email: "mailto:mgalyliak@gmail.com",
    GitHub: "https://github.com/MaximGalyliak",
    LinkedIn: "https://www.linkedin.com/in/maksym-galyliak-95464551/",
    StackOverflow: "https://stackoverflow.com/users/7087529/adler11th",
  },
};

export { projects, bio };
