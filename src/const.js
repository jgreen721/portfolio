export const characterCountDesktop =
  "/samples/charactercount/character-count-desktop.png";
export const characterCountMobile =
  "/samples/charactercount/character-count-mobile.png";

export const connectFourDesktop = "/samples/connectfour/connectfourdesktop.png";
export const connectFourMobile = "/samples/connectfour/connectfourmobile.png";

export const financeTrackerDesktop =
  "/samples/financetracker/financetracker.png";
export const financeTrackerMobile =
  "/samples/financetracker/financetrackermobile.png";

export const codingConfDesktop = "/samples/codingconf/codingconfdesktop.png";
export const codingConfMobile = "/samples/codingconf/codingconfmobile.png";

export const dessertsDesktop = "/samples/desserts/dessertui.png";
export const dessertsMobile = "/samples/desserts/dessertsmobile.png";
export const notificationsDesktop =
  "/samples/notifications/notifications-desktop.png";
export const notificationsMobile =
  "/samples/notifications/notificationsmobile.png";

import { FaReact, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";
export const samples = [
  {
    id: 1,
    title: "connect-four",
    img: connectFourDesktop,
    mobileImg: connectFourMobile,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam maiores doloremque soluta.",
    link: "https://connectfour-fechallenge.vercel.app/",
    isFocused: false,
    offsetX: 0,
    technologies: [{ id: 1, name: "react" }],
  },
  {
    id: 2,
    title: "character-counting",
    img: characterCountDesktop,
    mobileImg: characterCountMobile,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam maiores doloremque soluta quaerat deleniti distinctio, sunt placeat. Commodi, corrupti quibusdam?",

    link: "https://character-counter-fechallenge.vercel.app/",
    isFocused: false,
    offsetX: 1,
    technologies: [{ id: 1, name: "react", color: "react-blue" }],
  },
  {
    id: 3,
    title: "finance-tracker",
    img: financeTrackerDesktop,
    mobileImg: financeTrackerMobile,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam maiores.",

    link: "https://personal-finance-firebase.vercel.app/login",
    isFocused: false,
    offsetX: 2,
    technologies: [
      { id: 1, name: "html", color: "html-orange" },
      { id: 2, name: "css", color: "css-blue" },
      { id: 3, name: "js", color: "js-yellow" },
    ],
  },
  {
    id: 4,
    title: "coding-conf",
    img: codingConfDesktop,
    mobileImg: codingConfMobile,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",

    link: "https://jgreen721.github.io/frontend_challenges/ticketgenerator-challenge/",
    isFocused: true,
    offsetX: 3,
    technologies: [
      { id: 1, name: "html", color: "html-orange" },
      { id: 2, name: "css", color: "css-blue" },
      { id: 3, name: "js", color: "js-yellow" },
    ],
  },

  {
    id: 5,
    title: "notifications",
    img: notificationsDesktop,
    mobileImg: notificationsMobile,
    description: "Lorem ipsum dolor sit, amet consectetur.",

    link: "https://jgreen721.github.io/frontend_challenges/notificationAppRedo/",
    isFocused: false,
    offsetX: 4,
    technologies: [
      { id: 1, name: "react", color: "react-blue" },
      { id: 2, name: "css", color: "css-blue" },
    ],
  },
  {
    id: 6,
    title: "desserts",
    img: dessertsDesktop,
    mobileImg: dessertsMobile,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam maiores doloremque soluta quaerat.",

    link: "https://nextjs-deserts-cart.vercel.app/",
    isFocused: false,
    offsetX: 5,
    technologies: [
      { id: 1, name: "html", color: "html-orange" },
      { id: 2, name: "css", color: "css-blue" },
      { id: 3, name: "js", color: "js-yellow" },
    ],
  },
];

export const googleChromeImg = "./desktop-icons/googlechrome.png";
export const terminalImg = "./desktop-icons/terminalicon.png";
export const vscodeImg = "./desktop-icons/vscode.png";
export const quicktimeImg = "./desktop-icons/quicktime.png";
export const avatarImg = "./avatar.png";

export const desktopIcons = [
  {
    id: 1,
    title: "google chrome",
    img: googleChromeImg,
    className: "google-chrome-icon",
  },
  {
    id: 2,
    title: "terminal",
    img: terminalImg,
    className: "terminal-icon",
  },
  {
    id: 3,
    title: "vscode",
    img: vscodeImg,
    className: "vscode-icon",
  },
  {
    id: 4,
    title: "quicktime",
    img: quicktimeImg,
    className: "quicktime-icon",
  },
];
