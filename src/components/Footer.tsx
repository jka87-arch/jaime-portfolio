import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__statement">
          my path has never been straight. it's been behavioral science,
          runways, neural networks, and now this. the throughline is always people.
        </p>
        <div className="footer__links">
          <a href="mailto:hello@jaimearrington.com" className="footer__link">Email</a>
          <a href="https://linkedin.com/in/jaimearrington" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
          <a href="https://github.com/jaimearrington" target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a>
        </div>
        <p className="footer__copy">© Jaime Arrington {new Date().getFullYear()}. all rights (and wrongs) reserved.</p>
      </div>
    </footer>
  );
}
