import ReactGA from "react-ga4";

export const initGA = (): void => {
  ReactGA.initialize(import.meta.env.VITE_TRACKING_ID);
};

export const logPageView = (): void => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logButtonClick = (buttonName: string): void => {
  ReactGA.event({
    category: "Button",
    action: "Click",
    label: buttonName,
  });
};

export const logExternalLink = (url: string): void => {
  ReactGA.event({
    category: "External Link",
    action: "Click",
    label: url,
  });
};
