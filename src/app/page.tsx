
import { Header } from './components/header/header'
import { Experience } from './components/experience/experience';
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      <div className="infos">
        <h3>Languages</h3>
        <div className="languages-info">
          <span>🇺🇸 EN - Basic</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <h3>Education</h3>
        <div className="educational-info">
          <span>🎓️</span>
          <span>Sistemas para internet - Centro Universitario de João Pessoa - Unipê</span>
        </div>
        <span></span>
      </div>
      <div className="buttons">
        <div className="social">

        </div>
        <button>Contact me</button>
      </div>
      
    </main>
  );
}
