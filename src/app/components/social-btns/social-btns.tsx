import { GitIcon } from "../icons/git-icon"
import { LinkedinIcon } from "../icons/linkedin-icon"
import { InstaIcon } from "../icons/insta-icon"
import { WhatsappIcon } from "../icons/whatsapp-icon"

import "./social-btns.scss"

export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/gabrielestevo94/"><InstaIcon/></a>
            <a href=""><LinkedinIcon/></a>
            <a href=""><GitIcon/></a>
            <a href="https://wa.me/5583999887282"><WhatsappIcon/></a>
        </div>
    )
}