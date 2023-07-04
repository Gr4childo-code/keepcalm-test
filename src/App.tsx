import './App.scss';
import { Section } from './components/Section/Section';

import July1 from './assets/julia-d-FlNTu2Bj4Dg-unsplash (1).png';
import Taisia1 from './assets/taisiia-stupak-viq7xx1boxo-unsplash 1.png';
import July2 from './assets/julia-d-FlNTu2Bj4Dg-unsplash.png';

import Taisia2 from './assets/taisiia-stupak-viq7xx1boxo-unsplash 1 (1).png';
import { Scroll } from './components/Scroll/Scroll';

import slide1 from '@/assets/slider/slide1.png';
import slide2 from '@/assets/slider/slide2.png';
import slide3 from '@/assets/slider/slide3.png';
import slide4 from '@/assets/slider/slide4.png';
import slide5 from '@/assets/slider/slide5.png';
import slide6 from '@/assets/slider/slide6.png';
import slide7 from '@/assets/slider/slide7.png';
import slide8 from '@/assets/slider/slide8.png';

function App() {
  const SecText1 = [
    'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  ];
  const Sec1 = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    text: SecText1,
    img: July1
  };
  const Sec2 = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    text: SecText1,
    img: Taisia1
  };

  const Sec3 = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    text: SecText1,
    img: July2
  };
  const Sec4 = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    text: SecText1,
    img: Taisia2
  };

  const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

  return (
    <main>
      <Section SecUp={Sec1} SecDown={Sec2} titleExtra={'ut aliquip ex ea commodo consequat'} />
      <Scroll slides={slides} />

      <Section SecUp={Sec3} SecDown={Sec4} titleExtra={'ut aliquip ex ea commodo consequat'} />
    </main>
  );
}

export default App;
