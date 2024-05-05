import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Information(){
    return(
        <div className="infos">
        <SectionTitle text="languages"/>

        <div className="languages-info">
          <span>🇺🇸 EN - Basic</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓️</span>
          <span>Sistemas para internet - Centro Universitario de João Pessoa - Unipê</span>
        </div>
        <span></span>
      </div>
    )
}