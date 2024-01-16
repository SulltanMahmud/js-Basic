function startAction() {
  let loadingOverlay = document.getElementById("loadingOverlay");
  loadingOverlay.style.display = "flex";

  let progressBar = document.getElementById("progressBar");
  progressBar.style.width = "0";

  loadingProgress();
}

function loadingProgress() {
  time = 5;
  let duration = document.getElementById("progressBar");
  duration.style.animationDuration = time + "s";
  setTimeout(function () {
    let overlay = document.getElementById("loadingOverlay");
    overlay.style.display = "flex";

    let header = document.querySelector(".header");
    header.style.backgroundColor = "black";
    header.style.color = "#fff";
  }, time * 1000);
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
