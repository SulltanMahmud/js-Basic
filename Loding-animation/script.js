 function showLoading() {
   var loadingOverlay = document.getElementById("loadingOverlay");
   var progressBar = document.getElementById("progressBar");

   // Toggle the display property to show/hide the loading overlay
   loadingOverlay.style.display =
     loadingOverlay.style.display === "none" ||
     loadingOverlay.style.display === ""
       ? "flex"
       : "none";

   // Reset the progress bar width when showing
   if (loadingOverlay.style.display === "flex") {
     progressBar.style.width = "0";
     simulateProgress();
   }
 }

 function simulateProgress() {
   var progressBar = document.getElementById("progressBar");
   var width = 0;
   var interval = setInterval(function () {
     if (width >= 100) {
       clearInterval(interval);
       // Hide the overlay after the progress is complete
       document.getElementById("loadingOverlay").style.display = "none";
     } else {
       width += 1;
       progressBar.style.width = width + "%";
     }
   }, 20);
 }
