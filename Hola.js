
    document.addEventListener("DOMContentLoaded", function() {
        var aboutButton = document.getElementById("aboutButton");
        var aboutContent = document.getElementById("aboutContent");

        aboutButton.onclick = function() {
            if (aboutContent.style.display === "none") {
                aboutContent.style.display = "block";
                setTimeout(function() {
                    aboutContent.style.opacity = "1";
                }, 100); // Menunggu sebentar sebelum muncul untuk memberikan efek animasi
            } else {
                aboutContent.style.opacity = "0";
                setTimeout(function() {
                    aboutContent.style.display = "none";
                }, 500); // Waktu yang sama dengan durasi animasi
            }
        };
    });
