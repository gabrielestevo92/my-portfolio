import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss"
import { Language } from "../language/language";

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Experience"/>
            <p>1 year working as web developer freelancer</p>
            <Language image="/python.png" name="python" time="1"/>
            <Language image="/django.png" name="Django" time="1"/>
            <Language image="/js.png" name="JavaScript" time="1"/>
            <Language image="/ts.png" name="TypeScript" time=""/>
            <Language image="/react.png" name="React" time=""/>
            <Language image="/next.png" name="Next" time=""/>            
        </div>
    )
}