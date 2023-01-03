import SectionHeading from '../section-heading/section-heading.component';
import SocialNav from '../social-nav/social-nav.component';

import './footer.styles.scss';

const Footer = ({ lines, socialMediums }) => {

  return (
    <footer>
      <div className="footer__social">
        <SectionHeading lines={lines} centered={true} />
        <SocialNav socialMediums={socialMediums} />
      </div>
      <nav className="footer__nav">
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
        <p className="footer__text">&copy; {new Date().getFullYear()} Apartment Four</p>
      </nav>
    </footer>
  )
}

export default Footer;