import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutAnkit extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about Ankit" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Ankit's education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Ankit's skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Ankit's projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Ankit's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
                <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex justify-center items-center'>
    <a
        href="https://github.com/Ankitverma0902"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-blue-500 hover:underline"
    >
        Follow me on GitHub
    </a>
</div>

            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutAnkit;

export const displayAboutAnkit = () => {
    return <AboutAnkit />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Ankit Verma Logo" />
            </div>

            <div className="mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>My name is <span className="font-bold">Ankit Verma</span>,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">CyberSecurity Analyst</span></div>
            </div>

            <div className="mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>

            <ul className="mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className="list-pc">
                    I'm a <span className="font-medium">graduate student</span> currently pursuing Computer Science with a specialization in Information Security at Chandigarh University. I actively practice on <u className='cursor-pointer'><a href="https://tryhackme.com/" target="_blank" rel="noreferrer">TryHackMe</a></u>, and I’m currently looking for full-time frontend or cybersecurity roles! (Reach me at <a className='text-underline' href='mailto:iamankit0902@gmail.com'><u>iamankit0902@gmail.com</u></a> 🙂)
                </li>
                <li className="mt-3 list-building">
                    I enjoy building awesome software that solves practical problems.
                </li>
                <li className="mt-3 list-time">
                    When I’m not coding my next project, I love reading books, playing cricket, or watching.
                </li>
                <li className="mt-3 list-star">
                    I’m also passionate about Security & Computer Vision!
                </li>
            </ul>
        </>
    );
}

function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Chandigarh University
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2022 - 2026</div>
                    <div className=" text-sm md:text-base">Computer Science with specialization in Information Security</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 7.57 </div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup>
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2022</div>
                    <div className=" text-sm md:text-base">Maths, Physics, Chemistry</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentage &nbsp; 80%</div>
                </li>
                <li className="list-disc">
                    <div className=" text-lg md:text-xl mt-4 text-left font-bold leading-tight">
                        Class 10<sup>th</sup>
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2018</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentage &nbsp; 72%</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            <ul className="tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className="list-arrow mt-4 leading-tight tracking-tight">
                    Experienced in building secure full-stack applications with a focus on cybersecurity and responsive UI/UX.
                </li>
                <li className="list-arrow mt-4 leading-tight tracking-tight">
                    <div>Specialized in <strong className="text-ubt-gedit-orange">ethical hacking, secure authentication systems, and vulnerability scanning tools.</strong></div>
                </li>
                <li className="list-arrow mt-4 leading-tight tracking-tight">
                    <div>Core strengths include these languages, tools, and frameworks:</div>
                </li>
            </ul>

            <div className="w-full md:w-10/12 flex mt-4">
                <div className="text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className="text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>

            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="C++" />
                        <img className="m-1" src="https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white" alt="Java" />
                        <img className="m-1" src="https://img.shields.io/badge/C-00599C?style=flat&logo=c&logoColor=white" alt="C" />
                        <img className="m-1" src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" alt="Python" />
                        <img className="m-1" src="https://img.shields.io/badge/JavaScript-F7DF1C?style=flat&logo=javascript&logoColor=black" alt="JavaScript" />
                        <img className="m-1" src="https://img.shields.io/badge/HTML5-E44D27?style=flat&logo=html5&logoColor=white" alt="HTML5" />
                        <img className="m-1" src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3" />
                        <img className="m-1" src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="MySQL" />
                        <img className="m-1" src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="MongoDB" />
                        <img className="m-1" src="https://img.shields.io/badge/Linux-0078D6?style=flat&logo=linux&logoColor=white" alt="Linux" />
                        <img className="m-1" src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white" alt="Git" />
                    </div>
                </div>

                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white" alt="React" />
                        <img className="m-1" src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js" />
                        <img className="m-1" src="https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white" alt="Flask" />
                        <img className="m-1" src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white" alt="Bootstrap" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
                        <img className="m-1" src="https://img.shields.io/badge/OWASP_ZAP-FF5733?style=flat&logo=owasp&logoColor=white" alt="OWASP ZAP" />
                        <img className="m-1" src="https://img.shields.io/badge/Nmap-4CAF50?style=flat&logo=gnome-terminal&logoColor=white" alt="Nmap" />
                    </div>
                </div>
            </div>

            <ul className="tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className="list-arrow mt-4 leading-tight tracking-tight">
                    <span>Certified in:</span> 
                    <strong className="ml-1">Cisco Ethical Hacking</strong>, 
                    <strong className="ml-1">Google Cybersecurity</strong>, 
                    <strong className="ml-1">Oracle Generative AI</strong>
                </li>
                <li className="list-arrow mt-4 leading-tight tracking-tight">
                    <span>Strong in OS environments like</span>
                    <img className="inline ml-1" src="https://img.shields.io/badge/Linux-0078D6?style=plastic&logo=linux&logoColor=white" alt="Linux" />
                    <span>and Windows!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Two-Factor Authentication System",
            date: "2024",
            link: "https://github.com/Ankitverma0902/2FA-System",
            description: [
                "Built a secure web app using 2FA via email/authenticator apps. Implemented session management, OTP verification, and brute-force protection."
            ],
            domains: ["security", "authentication", "node.js", "react"]
        },
        {
            name: "Car and Bike Rental Website",
            date: "2024",
            link: "https://github.com/Ankitverma0902/car-bike-rental",
            description: [
                "Developed a full-stack platform for renting vehicles with user auth, live availability, and integrated payment gateway."
            ],
            domains: ["javascript", "react", "node.js", "mongodb"]
        },
        {
            name: "Automated Vulnerability Scanner",
            date: "2024",
            link: "https://github.com/Ankitverma0902/vulnerability-scanner",
            description: [
                "Web-based tool combining Nmap and OWASP ZAP to scan networks and web apps for security vulnerabilities."
            ],
            domains: ["python", "owasp-zap", "nmap", "flask"]
        }
    ];

    const tag_colors = {
        "javascript": "yellow-400",
        "firebase": "orange-500",
        "mongodb": "green-600",
        "react": "blue-400",
        "node.js": "green-700",
        "python": "yellow-600",
        "flask": "gray-500",
        "nmap": "purple-400",
        "owasp-zap": "red-500",
        "authentication": "blue-600",
        "security": "red-600"
    };

    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            {project_list.map((project, index) => {
                const projectName = project.link.split('/').pop();
                return (
                    <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                        <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className='flex justify-center items-center'>
                                    <div className="text-base md:text-lg mr-2">{project.name}</div>
                                    <iframe
                                        src={`https://ghbtns.com/github-btn.html?user=Ankitverma0902&repo=${projectName}&type=star&count=true`}
                                        frameBorder="0"
                                        scrolling="0"
                                        width="150"
                                        height="20"
                                        title={`${project.name}-star`}
                                    ></iframe>
                                </div>
                                <div className="text-gray-300 font-light text-sm">{project.date}</div>
                            </div>

                            <ul className="tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                {project.description.map((desc, i) => (
                                    <li key={i} className="list-disc mt-1 text-gray-100">{desc}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                {project.domains && project.domains.map((domain, idx) => (
                                    <span
                                        key={idx}
                                        className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain] || 'gray-300'} text-${tag_colors[domain] || 'gray-300'} m-1 rounded-full`}
                                    >
                                        {domain}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                );
            })}
        </>
    );
}

function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Ankit CyberSecurity.pdf" title="Ankit Verma resume" frameBorder="0"></iframe>
    )
}