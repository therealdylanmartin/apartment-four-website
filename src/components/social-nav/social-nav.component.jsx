import { v4 as uuidv4 } from 'uuid';
import { SlIcon } from '@shoelace-style/shoelace/dist/react';

import './social-nav.styles.scss';

const SocialNav = ({ socialMediums }) => (
  <nav className="social-nav">
    <ul>
      {socialMediums.map(medium => (
        <li key={uuidv4()}>
          <a href={medium.path}>
            <SlIcon name={medium.type.toLowerCase()} />
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default SocialNav;