import React from "react";
import Project from "./Project";
const projects = [
  {id:1,
    name: "Mail Box Client Application",
    img: {},
    githublink: "https://github.com/ROHITHMN5783/Mailbox_Client-Application",
    demolink: "",
  },
  {id:2,
    name: "Ecommerce Application",
    img: {},
    githublink: "https://github.com/ROHITHMN5783/ecommerceapp",
    demolink: "",
  },
  {id:3,
    name: "Food Restaurant Application",
    img: {},
    githublink: "https://github.com/ROHITHMN5783/Restaurant-app",
    demolink: "",
  },
  {id:4,
    name: "Expense Tracker Application",
    img: {},
    githublink: "https://github.com/ROHITHMN5783/expenseapptracker",
    demolink: "",
  },
  {id:5,
    name: "Travelling Tour Application",
    img: {},
    githublink: "https://github.com/ROHITHMN5783/Travelling-Website",
    demolink: "",
  },
  {id:6,
    name: "Voting Application",
    img: {},
    githublink: "https://github.com/ROHITHMN5783/Votingapp",
    demolink: "",
  },
  {id:7,
    name: "To-Do-list Application",
    img: {},
    githublink: "https://github.com/ROHITHMN5783/TodoApp",
    demolink: "",
  },
  {id:8,
    name: "To-Do-List Using Next Js",
    img: {},
    githublink: "https://github.com/ROHITHMN5783/todolist-using-nextjs",
    demolink: "",
  },
  
];
const ProjectList = () => {
  return (
    <div>
      <Project project={projects}/>
    </div>
  );
};

export default ProjectList;
