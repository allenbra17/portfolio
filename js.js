const ley = document.getElementById('flicker')

ley.addEventListener('webkitAnimationEnd', end); 

function end() {
    ley.parentNode.removeChild(ley);
    document.getElementById('fname').style.width = '100%';
  };