//replace with your user:
const GITHUB_URL = "https://api.github.com/users/Myribi";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");
  
    profileName.innerText=data.name;
    profileImage.src=data.avatar_url;
  });


  const firework = document.getElementById('firework');

  firework.addEventListener('click', () => {
    const particles = [];
    const color = randomColor();
    
    const particle = document.createElement('span');
    particle.classList.add('particle', 'move');
    
    var { x, y } = randomLocation();
    if (x > 0) {
      x = Math.max(200, x);
    } else {
      x = Math.min(-200, x);
    }
    y = Math.max(200, Math.abs(y));
    x = x + 'px'
    y = y + 'px'
    particle.style.setProperty('--x', x);
    particle.style.setProperty('--y', y);
    particle.style.background = color;
    
    firework.appendChild(particle);
    
    particles.push(particle);
    
    setTimeout(() => {
    
      for(let i=0; i<100; i++) {
        const innerP = document.createElement('span');
        innerP.classList.add('particle', 'move');
        innerP.style.transform = `translate(${x}, ${y})`;
  
        const xs = Math.random() * 200 - 100 + 'px';
        const ys = Math.random() * 200 - 100 + 'px';
        innerP.style.setProperty('--x', `calc(${x} + ${xs})`);
        innerP.style.setProperty('--y', `calc(${y} + ${ys})`);
        innerP.style.animationDuration = Math.random() * 300 + 200 + 'ms';
        innerP.style.background = color;
        
        firework.appendChild(innerP);
        particles.push(innerP)
      }
      
      setTimeout(() => {
        particles.forEach(particle => {
          particle.remove();
        })
      }, 500)
    }, 500);
  });
  
  function randomLocation() {
    return {
      x: Math.random() * window.innerWidth - window.innerWidth / 2,
      y: Math.random() * window.innerHeight - window.innerHeight / 2,
    }
  }
  
  function randomColor() {
    return `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
  }
 
