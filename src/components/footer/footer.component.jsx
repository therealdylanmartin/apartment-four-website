import SectionHeading from '../section-heading/section-heading.component';
import SocialNav from '../social-nav/social-nav.component';

const Footer = ({ lines, socialMediums }) => {

  return (
    <footer>
      <SectionHeading lines={lines} centered={true} />
      <SocialNav socialMediums={socialMediums} />
      <nav className="footer-nav">
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </nav>
      <p className="footer-tex">&copy; {new Date().getFullYear()} Apartment Four</p>
    </footer>
  )
}

export default Footer;