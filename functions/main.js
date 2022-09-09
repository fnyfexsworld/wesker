const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
  
  if (h >= 6 && h <12) {
      document.getElementById('goodwhat').innerHTML = "Bonjour !"
  }
  
  if (h >= 12 && h < 18) {
    document.getElementById('goodwhat').innerHTML = "Bon après-midi !"
  }
  
if (h >= 18) {
    document.getElementById('goodwhat').innerHTML = "Bonsoir !"
  }
  
  if (h >= 20 && h < 6) {
    document.getElementById('goodwhat').innerHTML = "Bon nuit !"
  }
}

function checkTime(i) {
  if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
  return i;
}
