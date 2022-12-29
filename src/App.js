// Header, Footer, and Page components
import Header from './components/header/header.components';
import Home from './pages/home/home.page';
import Footer from './components/footer/footer.component';

// import Fontawesome icons for use
import { library as faLibrary } from '@fortawesome/fontawesome-svg-core';
import { faStar, faStarHalfStroke, faBars } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faTiktok, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';

// add imported FA icons to faLibrary
faLibrary.add(
  faStar,
  faStarHalfStroke,
  faBars,
  faStarEmpty,
  faEnvelope,
  faTiktok,
  faInstagram,
  faPinterestP
);

// Build app
const App = () => {
  // Use placeholder images for now
  const placeholderImage = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=';
  // Use dummy recipes object for now
  const recipes = [
    {
      id: 1,
      title: 'Recipe 1',
      image: {
        path: placeholderImage,
        altText: ''
      },
      totalTime: 45,
      rating: {
        score: 4.5,
        numScored: 43
      }
    },
    {
      id: 2,
      title: 'Recipe 2',
      image: {
        path: placeholderImage,
        altText: ''
      },
      totalTime: 30,
      rating: {
        score: 4,
        numScored: 21
      }
    },
    {
      id: 3,
      title: 'Recipe 3',
      image: {
        path: placeholderImage,
        altText: ''
      },
      totalTime: 55,
      rating: {
        score: 5,
        numScored: 10
      }
    },
    {
      id: 4,
      title: 'Recipe 4',
      image: {
        path: placeholderImage,
        altText: ''
      },
      totalTime: 35,
      rating: {
        score: 4.5,
        numScored: 13
      }
    },
    {
      id: 5,
      title: 'Recipe 5',
      image: {
        path: placeholderImage,
        altText: ''
      },
      totalTime: 45,
      rating: {
        score: 3.5,
        numScored: 2
      }
    },
    {
      id: 6,
      title: 'Recipe 6',
      image: {
        path: placeholderImage,
        altText: ''
      },
      totalTime: 30,
      rating: {
        score: 5,
        numScored: 23
      }
    },
    {
      id: 7,
      title: 'Recipe 7',
      image: {
        path: placeholderImage,
        altText: ''
      },
      totalTime: 75,
      rating: {
        score: 4,
        numScored: 17
      }
    },
    {
      id: 8,
      title: 'Recipe 8',
      image: {
        path: placeholderImage,
        altText: ''
      },
      totalTime: 50,
      rating: {
        score: 4.5,
        numScored: 7
      }
    },
    {
      id: 9,
      title: 'Recipe 9',
      image: {
        path: placeholderImage,
        altText: ''
      },
      totalTime: 40,
      rating: {
        score: 5,
        numScored: 23
      }
    },
    {
      id: 10,
      title: 'Recipe 10',
      image: {
        path: placeholderImage,
        altText: ''
      },
      totalTime: 25,
      rating: {
        score: 3,
        numScored: 3
      }
    },
    {
      id: 11,
      title: 'Recipe 11',
      image: {
        path: placeholderImage,
        altText: ''
      },
      totalTime: 45,
      rating: {
        score: 4.5,
        numScored: 13
      }
    },
    {
      id: 12,
      title: 'Recipe 12',
      image: {
        path: placeholderImage,
        altText: ''
      },
      totalTime: 60,
      rating: {
        score: 4,
        numScored: 51
      }
    }
  ]
  // Use dummy 'About Me' info
  const aboutInfo = {
    image: {
      path: placeholderImage,
      altText: 'Rachael Martin from Apartment Four'
    },
    description: 'My name is Rachael Martin and cooking is my passion. I design enticing plant-based recipes that any home cook can follow. I live in Madison with my lovely husband and three adorable kitties.',
    socialMediums: [
      {
        type: 'TikTok',
        path: 'https://tiktok.com',
        handle: 'fromapartmentfour',
        faCode: 'tiktok'
      },
      {
        type: 'Instagram',
        path: 'https://instagram.com',
        handle: 'fromapartmentfour',
        faCode: 'instagram'
      },
      {
        type: 'Pinterest',
        path: 'https://pinterest.com',
        handle: 'fromapartmentfour',
        faCode: 'pinterest-p'
      }
    ]
  }

  // Render the app with Header, Footer, and Pages inside Router element
  return (
    <>
      <Header />
      <Home recipes={recipes} aboutInfo={aboutInfo} />
      <Footer lines={['Follow Me']} socialMediums={aboutInfo.socialMediums} />
    </>
  )
}

export default App;
