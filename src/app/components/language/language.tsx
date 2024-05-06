import Image from "next/image"
import "./language.scss"

interface LanguageProps{
    image: string,
    name: string,
    time: string
}

export function Language({ image, name, time }: LanguageProps){
    let nameClass: string = "experience-measure measure-" + time;

    return(
        <div className="experience-time">
            <div className="experience-language">
                <Image
                     src= { image }
                    alt= { name }
                    width={40}
                    height={40}
                    priority
                    />
                <div className="experience-unit">
                    <div className= { nameClass }>
                        <span>{ time ? parseInt(time) > 1 ? time + " Years" : time + " Year":""}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}