import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss"

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Experience"/>
            <p>1 year working as web developer freelancer</p>
            <div className="experience-time">
                <div className="experience-language">
                    <Image
                    src="/python.png"
                    alt= "Python"
                    width={40}
                    height={40}
                    priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>1 year</span>
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                    src="/django.png"
                    alt= "Django"
                    width={40}
                    height={40}
                    priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>1 year</span>
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                        src="/js.png"
                        alt= "JavaScript"
                        width={40}
                        height={40}
                        priority
                        />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>1 year</span>
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                        src="/ts.png"
                        alt= "TypeScript"
                        width={40}
                        height={40}
                        priority
                        />
                    <div className="experience-unit">
                        <div className="experience-measure measure-m">
                            <span>Starting</span>
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                        src="/react.png"
                        alt= "React"
                        width={40}
                        height={40}
                        priority
                        />
                    <div className="experience-unit">
                        <div className="experience-measure">
                            <span>Starting</span>
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                        src="/next.png"
                        alt= "Next"
                        width={40}
                        height={40}
                        priority
                        />
                    <div className="experience-unit">
                        <div className="experience-measure">
                            <span>Starting</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}