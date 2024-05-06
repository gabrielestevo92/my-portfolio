import { GitIcon } from "../icons/git-icon"
import { LinkedinIcon } from "../icons/linkedin-icon"
import { InstaIcon } from "../icons/insta-icon"
import { WhatsappIcon } from "../icons/whatsapp-icon"

import "./social-btns.scss"

export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/gabrielestevo94/"><InstaIcon/></a>
            <a href="https://www.linkedin.com/in/gabriel-estev%C3%A3o-nunes-764570207/"><LinkedinIcon/></a>
            <a href="https://github.com/gabrielestevo92"><GitIcon/></a>
            <a href="https://wa.me/5583999887282"><WhatsappIcon/></a>
        </div>
    )
}