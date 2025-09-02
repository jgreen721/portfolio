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

export const notificationsDesktop =
  "/samples/notifications/notifications-desktop.png";
export const notificationsMobile =
  "/samples/notifications/notificationsmobile.png";

export const samples = [
  {
    id: 1,
    title: "connect-four",
    img: connectFourDesktop,
    mobileImg: connectFourMobile,
    link: "https://connectfour-fechallenge.vercel.app/",
    isFocused: true,
    offsetX: 0,
  },
  {
    id: 2,
    title: "character-counting",
    img: characterCountDesktop,
    mobileImg: characterCountMobile,
    link: "https://character-counter-fechallenge.vercel.app/",
    isFocused: false,
    offsetX: 1,
  },
  {
    id: 3,
    title: "finance-tracker",
    img: financeTrackerDesktop,
    mobileImg: financeTrackerMobile,
    link: "https://personal-finance-firebase.vercel.app/login",
    isFocused: false,
    offsetX: 2,
  },
  {
    id: 4,
    title: "coding-conf",
    img: codingConfDesktop,
    mobileImg: codingConfMobile,
    link: "https://jgreen721.github.io/frontend_challenges/ticketgenerator-challenge/",
    isFocused: false,
    offsetX: 3,
  },

  {
    id: 5,
    title: "notifications",
    img: notificationsDesktop,
    mobileImg: notificationsMobile,
    link: "https://jgreen721.github.io/frontend_challenges/notificationAppRedo/",
    isFocused: false,
    offsetX: 4,
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
