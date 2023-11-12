import React from "react"

const Curriculum = () => {
    return (
        <section className="curriculum">
            <div className="software-skills">
                <h3 className="cv-titles">Software skills</h3>
            <ul className="card-container">
                <li>HMTL5</li>
                <li>CSS</li>
                <li>Java</li>
                <li>React</li>
                <li>Git</li>
            </ul>
            </div>
            <div className="experience">
            <h3 className="cv-titles">Experiencia</h3>
            <ul className="card-container">
                <li>Kavak</li>
                <li>Oyster</li>
                <li>Sabadell</li>
            </ul>
            </div>
            <div className="soft-skills">
            <h3 className="cv-titles">Soft Skills</h3>
            <ul className="card-container">
                <li>Autodidacta</li>
                <li>Responsable</li>
                <li>Creativo</li>
                <li>Analitico</li>
            </ul>
            </div>
            <div className="education">
            <h3 className="cv-titles">Eduacion</h3>
            <ul className="card-container">
                <li>Unitec - Ing Redes y software</li>
                <li>Codeacademy - Front-end</li>
                <li>Coderhouse - Product Manager</li>
            </ul>
            </div>
            <div className="languages">
            <h3 className="cv-titles">Idiomas</h3>
            <ul className="card-container">
                <li>Ingles</li>
            </ul>
            </div>
        </section>
    )
}


export default Curriculum;
