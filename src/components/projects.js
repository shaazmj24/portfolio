import './style/projects.css'; 
import demo from "../pollstream.mp4"
import demo1 from "../passstore.mp4"

function Project() { 
    const stream = ` 
    Tech Stack: Python Flask · Flask-SocketIO · SQLAlchemy · JavaScript · HTML/CSS · Chart.js. 
    
    
    `; 
  return (
    <div class="projects">      
        <div class="card">  
            <h1 class="header">POLL STREAM</h1>
            <span class="stream">{stream}</span>
            <h1 class="demo2">DEMO</h1>
            <div class="videowrap">  
                <video class="demo" controls playsInline poster preload="metadata">  
                <source src={demo} type="video/mp4"/> 
                </video>
            </div>
        </div>
        <div class="card1">  
              <h1 class="store">PassStore</h1>
              <video class="demo1" controls playsInline poster="" preload="metadata">   
                <source src={demo1} type="video/mp4"/>
              </video>
        </div>
    </div>
  );
}

export default Project;

