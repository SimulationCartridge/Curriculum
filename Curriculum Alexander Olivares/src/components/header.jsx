import React from "react";
import CodeTyping from "./codetyping";

function Header () {
    return(
        <header className="header-container">  
        <div className="textos">  
          <h1 className="name">Alexander Olivares</h1>
          <h3 className="academic-title">Ing. Redes y Software</h3>
          <h4 className="subtitles">Diseñador Web Jr/ Product Operations Analyst</h4>
          <CodeTyping />
          </div> 
        </header>
    
    )
}

export default Header;