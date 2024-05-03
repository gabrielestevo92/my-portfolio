import Image from 'next/image' 
import "./header.scss"
export function Header(){
    return(
        <div className="header">
            
            <div>
            <h1>Hi, i'm Gabriel 👋</h1>
            <h2>Front-end Developer</h2>
            </div>
            <Image
            src="/perfil.jpeg"
            alt="Me"
            width={305}
            height={300}
            priority
            />
        </div>
    )
}