import './style/projects.css'; 

function Project() { 
    const stream = ` 
    Tech Stack: Python Flask · Flask-SocketIO · SQLAlchemy · JavaScript · HTML/CSS · Chart.js. 
    
    
    `; 
  return (
    <div class="projects">      
        <div class="card">  
            <h1 class="header">POLL STREAM</h1>
            <span class="stream">{stream}</span>
            <h1 class="demo">DEMO</h1>
        </div>
        <div class="card1">  
              <h1 class="store">PassStore</h1>
        </div>
    </div>
  );
}

export default Project;

