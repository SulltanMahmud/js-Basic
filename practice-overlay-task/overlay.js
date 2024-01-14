



function startAction() 

{
  let header = document.querySelector(".header");
  header.style.backgroundColor = "black";
  header.style.color = "#fff";

  let loadingOverlay = document.getElementById("loadingOverlay");
  loadingOverlay.style.display = "flex";

  let progressBar = document.getElementById("progressBar");
  progressBar.style.width = "0";
  // progressBar.style.transform-origin = "left";

  simulateProgress();
}

function simulateProgress() {
  let progressBar = document.getElementById("progressBar");
  let width = 0;
  let interval = setInterval(function () {
    if (width >= 100) {
      clearInterval(interval);
      document.getElementById("loadingOverlay").style.display = "none";
    } else {
      width += 1;
      progressBar.style.width = width + "%";
    }
  }, 20);
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
