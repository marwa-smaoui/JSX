import React from "react";
import "./App.css";
import imageInSrc from "../src/imageInSrc.jpg";
import "./style.css";

function App() {
  return (
    <div className="App">

<div style = {{border: "solid 1px black", maxWidth: '100vw'}}>

 <h1 className = "title red"> Votre nom ici </h1>

 <br/>
 <img src={imageInSrc} alt="imageInSrc"/>

 <br/>

 <img src = "/imageInPublic.jpg" alt="imageInPublic"/>
  
</div>
<video  style ={{width:"320", height:"240",controls:"controls" }}>

 <source src="/myVideo.mp4" type="video/mp4"/>

</video>
</div>


  );
}
export default App;
