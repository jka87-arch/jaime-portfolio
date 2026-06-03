import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__statement">
          my journey has been behavioral science,
          international runways, neural networks, and solutions design. the throughline is always people.
        </p>
        <div className="footer__links">
          <a href="mailto:jaimearrington57@gmail.com" className="footer__link">Email</a>
          <a href="https://www.linkedin.com/in/jaime-arrington-132443226" target="https://www.linkedin.com/in/jaime-arrington-132443226" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
          <a href="https://github.com/jka87-arch" target="https://github.com/jka87-arch" rel="noopener noreferrer" className="footer__link">GitHub</a>
        </div>
        <p className="footer__copy">© Jaime Arrington {new Date().getFullYear()}. all rights (and wrongs) reserved.</p>
      </div>
    </footer>
  );
}
