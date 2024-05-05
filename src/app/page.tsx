import Image from 'next/image';
import { Header } from './components/header/header'
import { Experience } from './components/experience/experience';
import { Information } from './components/information/information';
import { EmailIcon } from './components/icons/email-icon';
import "./styles/home.scss"
import { SocialBtns } from './components/social-btns/social-btns';

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      <Information/>
      <div className="buttons">
        <SocialBtns/>
        <a className='btn-primary' href='mailto:gabrielestevo92@gmail.com'>
          Contact me
          <EmailIcon/>
          </a>
      </div>
      
    </main>
  );
}
