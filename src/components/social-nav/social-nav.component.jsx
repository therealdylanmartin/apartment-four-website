import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialNav = ({ socialMediums }) => {
  let currentKey = 0;

  return (
    <nav className="social-nav">
      <ul>
        {socialMediums.map(medium => {
          currentKey++;

          return (
            <li key={currentKey}>
              <a href={medium.path}>
                <FontAwesomeIcon icon={`fa-brands fa-${medium.faCode}`} />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SocialNav;