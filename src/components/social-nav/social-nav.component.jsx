import { SlIcon } from '@shoelace-style/shoelace/dist/react';

import './social-nav.styles.scss';

const SocialNav = ({ socialMediums }) => (
  <nav className="social-nav">
    <ul>
      {socialMediums.map((medium, i) => (
        <li key={i}>
          <a href={medium.path}>
            <SlIcon name={medium.type.toLowerCase()} />
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default SocialNav;