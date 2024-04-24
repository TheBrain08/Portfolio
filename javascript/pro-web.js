const ID = Object.assign(document.createElement('span'), {
    id: 'popupProjectID'
});

const title = Object.assign(document.createElement('span'), {
    id: 'popupTitle'
});

let whichProject;

const Projects = [{
        ID: "01",
        title: " Chatroom",
        headlines: [{ headline: " Login" }, { headline: " User activity and Chat" }, { headline: " User Settings" },
            { headline: " Groups" }, { headline: " News" }, { headline: " Send News" }, { headline: " User administartion" }
        ],
        texte: [{
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }],
        imgs: [{
                src: "../img/WEB/Chatroom/Login.png"
            },
            {
                src: "../img/WEB/Chatroom/Chat&Activity.png"
            },
            {
                src: "../img/WEB/Chatroom/Settings.png"
            },
            {
                src: "../img/WEB/Chatroom/Groups.png"
            },
            {
                src: "../img/WEB/Chatroom/News.png"
            },
            {
                src: "../img/WEB/Chatroom/SendNews.png"
            },
            {
                src: "../img/WEB/Chatroom/UserAdministartion.png"
            }
        ],
        stack: ["HTML", "CSS", "Javascript", "PHP"]
    },
    {
        ID: "01",
        title: " Chatroom",
        headlines: [{ headline: " Login" }, { headline: " User activity and Chat" }, { headline: " User Settings" },
            { headline: " Groups" }, { headline: " News" }, { headline: " Send News" }, { headline: " User administartion" },
        ],
        texte: [{
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, natus. Et iure sed aut voluptatum a, vitae minima commodi excepturi"
        }],
        imgs: [{
                src: "../img/WEB/Chatroom/Login.png"
            },
            {
                src: "../img/WEB/Chatroom/Chat&Activity.png"
            },
            {
                src: "../img/WEB/Chatroom/Settings.png"
            },
            {
                src: "../img/WEB/Chatroom/Groups.png"
            },
            {
                src: "../img/WEB/Chatroom/News.png"
            },
            {
                src: "../img/WEB/Chatroom/SendNews.png"
            },
            {
                src: "../img/WEB/Chatroom/UserAdministartion.png"
            }
        ],
        stack: ["HTML", "CSS", "Javascript", "PHP"]
    }
];

function loadPopupContent(project) {
    switch (project) {
        case "Chatroom":
            whichProject = 0;
            break;
        default:
            whichProject = 1;
            break;
    }

    const popupContentContainer = document.querySelector('.modal-content .row .col-12');
    popupContentContainer.innerHTML = ""; // Leeren des Inhalts

    if (Projects[whichProject].headlines) {
        const projectID = Object.assign(document.createElement('span'), {
            className: 'fw-semibold numbers',
            textContent: Projects[whichProject].ID
        });

        const projectTitle = Object.assign(document.createElement('span'), {
            id: 'popupTitle',
            textContent: Projects[whichProject].title
        });

        const projectHeadlines = Object.assign(document.createElement('p'), {
            className: 'Headlines fw-lighter'
        });
        projectHeadlines.append(projectID, projectTitle);

        const headlineWrapper = Object.assign(document.createElement('div'), {
            className: 'row popupTextBlock'
        });

        Projects[whichProject].headlines.forEach((headline, index) => {
            const formattedIndex = (index + 1 < 10) ? "0" + (index + 1) : (index + 1);

            const headlineID = Object.assign(document.createElement('span'), {
                className: 'fw-semibold numbers popupDescriptionID',
                textContent: formattedIndex
            });

            const headlineText = Object.assign(document.createElement('span'), {
                className: 'popupHeadlines',
                textContent: headline.headline
            });

            const headlineParagraph = Object.assign(document.createElement('p'), {
                className: 'HeadlinesSecond fw-lighter'
            });
            headlineParagraph.append(headlineID, headlineText);

            const textParagraph = Object.assign(document.createElement('p'), {
                className: 'popupText',
                textContent: Projects[whichProject].texte[index].text
            });

            const image = Object.assign(document.createElement('img'), {
                src: Projects[whichProject].imgs[index].src,
                alt: "",
                className: 'popupImg img-fluid d-block d-sm-block d-md-block d-xl-none d-xxl-none'
            });

            const col1 = Object.assign(document.createElement('div'), {
                className: 'col-12 col-sm-12 col-md-12 col-xl-6'
            });
            col1.append(headlineParagraph, textParagraph, image);

            const image2 = image.cloneNode(true);
            image2.classList.remove('d-block', 'd-sm-block', 'd-md-block', 'd-xl-none', 'd-xxl-none');
            const col2 = Object.assign(document.createElement('div'), {
                className: 'col-6 col-sm-0 col-md-0 col-xl-6'
            });
            col2.appendChild(image2);

            const row = Object.assign(document.createElement('div'), {
                className: 'row popupTextBlock'
            });
            row.append(col1, col2);

            headlineWrapper.appendChild(row);
        });

        const stackHTML = Object.assign(document.createElement('p'), {
            className: 'fw-semibold',
            textContent: 'Stack: '
        });

        Projects[whichProject].stack.forEach((tech, index) => {
            const techSpan = Object.assign(document.createElement('span'), {
                className: 'ms-4 text-secondary',
                textContent: tech
            });
            stackHTML.appendChild(techSpan);
        });

        const buttonsContainer = Object.assign(document.createElement('div'), {});

        const gitButton = Object.assign(document.createElement('button'), {
            className: 'btn rounded',
            textContent: 'Go to Git'
        });

        const siteButton = Object.assign(document.createElement('button'), {
            className: 'btn rounded',
            textContent: 'Visit Site'
        });

        buttonsContainer.append(gitButton, siteButton);

        popupContentContainer.append(projectHeadlines, headlineWrapper, stackHTML, buttonsContainer);
    }
}