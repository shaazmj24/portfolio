import './App.css'; 
import profile from "./profile.PNG";  //assign image to variable called profile

function App() {
    const aboutMe = ` 
    Hey, I'm Shaaz, a 2nd year Computer science student at Simon Fraser University (SFU).  
    
    Proficient in building diverse and user-friendly full-stack products using tools like 
    React, Flask (Python), object-oriented Java, SQLAlchemy, and Socket.IO. Focused on 
    integrating AI and machine learning into web development, with the long-term goal of 
    becoming a machine learning engineer and creating innovative AI products.
    
    `; 
  return (
    <div className="App">  
        <h1>About me</h1> 
        <img src={profile}/>  
        <p>{aboutMe}</p>
    </div>
  );
}

export default App;


