function startAction() {
  let time = 5;
  let loadingOverlay = document.getElementById("loadingOverlay");
  loadingOverlay.style.display = "flex";

  let progressBar = document.getElementById("progressBar");
  progressBar.style.width = "0";

  loadingProgress(time);
}

function loadingProgress(t) {

 
   

  let duration = document.getElementById("progressBar");
  duration.style.animationDuration = t + "s";
  setTimeout(function () {
    let overlay = document.getElementById("loadingOverlay");
    overlay.style.display = "flex";
    display = document.getElementById("loadingOverlay")
    display.style.display = 'none';

    let header = document.querySelector(".header");
    header.style.backgroundColor = "black";
    header.style.color = "#fff";
  }, t * 1000);
}

function resetAll() {
  let header = document.querySelector(".header");
  header.style.backgroundColor = "#fff";
  header.style.color = "#000";

  let loadingOverlay = document.getElementById("loadingOverlay");
  loadingOverlay.style.display = "none";

  let progressBar = document.getElementById("progressBar");
  progressBar.style.width = "0";
}


 