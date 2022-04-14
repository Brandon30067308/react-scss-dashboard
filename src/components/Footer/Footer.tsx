import FooterStyles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer
      className={`${FooterStyles.container} w-100 flex justify-space-between 
      align-flex-start py-1-5 px-2`}
    >
      <div
        className={`${FooterStyles.linksContainer} flex column-gap-0-65 justify-flex-start`}
        style={{ flex: ".825" }}
      >
        <span className={`${FooterStyles.link} font-md text-muted pointer`}>
          Support
        </span>
        <span className={`${FooterStyles.link} font-md text-muted pointer`}>
          Help center
        </span>
        <span className={`${FooterStyles.link} font-md text-muted pointer`}>
          Privacy
        </span>
        <span className={`${FooterStyles.link} font-md text-muted pointer`}>
          Terms of Service
        </span>
      </div>
      <p
        className="font-md text-muted text-align-right"
        style={{ flex: ".175" }}
      >
        © 2021
      </p>
    </footer>
  );
};

export default Footer;
