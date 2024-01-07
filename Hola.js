//Bagian Catalog Search

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const mangaContainer = document.getElementById("mangaContainer");
  const recommendedMangaText = document.getElementById("recommendedMangaText");
  const carousel = document.getElementById("carouselExampleAutoplaying");
  const mangaHeading = document.getElementById("manga");

  const manga = [
      {
          id: 1,
          image: 'Image/Onepiece.jpg',
          title: 'One Piece',
      },
      {
        id: 2,
        image: 'Image/Naruto1.jpg',
        title: 'Naruto',
      },
      {
        id: 3,
        image: 'Image/Kaguya-Sama2.png',
        title: 'Kaguya-Sama',
      },
      {
        id: 4,
        image: 'Image/NisekoiHd3.jpg',
        title: 'Nisekoi',
      },
      {
        id: 5,
        image: 'Image/Noragami3.jpg',
        title: 'Noragami',
      },
      {
        id: 6,
        image: 'Image/The Angel Next Door 2.jpg',
        title: 'Angel Next Door',
      },
      {
        id: 7,
        image: 'Image/YouLieInApril.jpg',
        title: 'Your Lie In April',
      },
      {
        id: 8,
        image: 'Image/Komi_San2.jpg',
        title: 'Komi-San',
      },
      {
        id: 9,
        image: 'Image/SpyxFamily4.jpg',
        title: 'Spy x Family',
      },
      {
        id: 10,
        image: 'Image/Shiro.Seijo.to.Kuro.Bokushi.1.jpg',
        title: 'Saint Cecilia',
      },
    ];

    const displayItem = (items) => {
      if (items.length > 0) {
        mangaContainer.innerHTML = `<div class="row row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 mt-2">${items
          .map((item) => {
            const { image, title, id } = item;
            return `
              <div class='col'>
                <div class='card bg-dark' style='width: 13rem; border: 1px solid white'>
                  <img src='${image}' class='card-img-top bg-dark' style='height: 280px;' alt='${title}'>
                  <div class='card-body bg-dark text-light'>
                    <h5 class='card-title text-center'>${title}</h5>
                    <div class='d-flex justify-content-center'>
                      <a href='manga${id}.html' class='btn btn-outline-light mt-3'>Open</a>
                    </div>
                    <span class='position-absolute top-0 start-0 ms-1 translate-middle badge rounded-pill bg-black text-white' style='font-size: 1em;'>
                      ${id}
                    </span>
                  </div>
                </div>
              </div>`;
          })
          .join("")}</div>`;
      } else {
        mangaContainer.innerHTML = '<p class="text-light">No manga found</p>';
      }
    };
  
    const displaySearchResults = () => {
      const searchData = searchInput.value.trim().toLowerCase();
      const filterData = manga.filter((item) => item.title.toLowerCase().includes(searchData));
    
      if (searchData === "") {
        // Jika search bar kosong, tampilkan seluruh daftar manga
        recommendedMangaText.style.display = "block";
        carousel.style.display = "block";
        mangaContainer.style.display = "block";
        mangaHeading.innerText = "Manga"; // Kembalikan teks ke semula
        displayItem(manga); // Perbarui dengan seluruh daftar manga
      } else if (filterData.length > 0) {
        recommendedMangaText.style.display = "none";
        carousel.style.display = "none";
        mangaContainer.style.display = "block";
        mangaHeading.innerText = "Manga Results"; // Ganti teks sesuai keinginan Anda
        displayItem(filterData);
      } else {
        recommendedMangaText.style.display = "none";
        carousel.style.display = "none";
        mangaContainer.style.display = "none";
        mangaHeading.innerText = "Manga Not Found";
      }
    };
  
    searchInput.addEventListener("input", displaySearchResults);
  });



    document.addEventListener("DOMContentLoaded", function() {
        var aboutButton = document.getElementById("aboutButton");
        var aboutContent = document.getElementById("aboutContent");

        aboutButton.onclick = function() {
            if (aboutContent.style.display === "none") {
                aboutContent.style.display = "block";
                setTimeout(function() {
                    aboutContent.style.opacity = "1";
                }, 100); 
            } else {
                aboutContent.style.opacity = "0";
                setTimeout(function() {
                    aboutContent.style.display = "none";
                }, 500); 
            }
        };
    });

    //End here

    //Bagian About Us

    document.addEventListener("DOMContentLoaded", function () {
      const scrollingContainer = document.getElementById("scrolling-container");
      scrollingContainer.style.transform = `translateX(-50%)`;
  
      let isAnimating = false;
      let scrollCount = 0;
  
      window.addEventListener("scroll", function () {
        if (isAnimating) return;
  
        const scrollPosition = window.scrollY;
        const windowWidth = window.innerWidth;
  
        // Hentikan animasi dan tengahkan gambar di layar kecil (md ke bawah)
        if (windowWidth <= 768) {
          scrollingContainer.style.transition = 'none';
          scrollingContainer.style.transform = 'translateX(3%)';
          return;
        }
  
        // Jika layar di antara ukuran md dan sm, lakukan perhitungan scrollCount
        if (windowWidth > 768 && windowWidth <= 992) {
          if (scrollCount < 4) {
            scrollCount++;
          } else {
            isAnimating = true;
            scrollingContainer.style.transition = 'transform 0.5s ease';
            scrollingContainer.style.transform = `translateX(calc(-50% + ${scrollPosition}px))`;
  
            // Setelah animasi selesai, kembalikan kondisi
            setTimeout(function () {
              isAnimating = false;
              scrollingContainer.style.transition = 'none';
              scrollCount = 0;
            }, 500);
          }
        } else {
          // Jika layar lebih kecil dari ukuran md atau lebih besar dari sm, lakukan animasi langsung
          scrollingContainer.style.transition = 'transform 0.5s ease';
          scrollingContainer.style.transform = `translateX(calc(-50% + ${scrollPosition}px))`;
        }
      });
    });


    document.addEventListener("DOMContentLoaded", function () {
      const imageLinks = document.querySelectorAll('.image-link');
    
      imageLinks.forEach(function (imageLink) {
        imageLink.addEventListener('click', function () {
          const href = imageLink.getAttribute('data-href');
          window.open(href, '_blank');
        });
      });
    });





    //Game

    var gameStarted = false;

    function toggleColor(answer) {
        if (gameStarted) {
            return;
        }

        var yButton = document.getElementById('yButton');
        var nButton = document.getElementById('nButton');
        var optionsList = document.getElementById('optionsList');
        var gameOptions = document.getElementById('gameOptions');

        if (answer === 'Y') {
          alert('Game Dimulai');
            optionsList.style.display = 'none';
            gameOptions.style.display = 'block';
            gameStarted = true;
        } else if (answer === 'N') {
            var confirmResult = confirm('Apakah kamu yakin?');
            if (confirmResult) {
                alert('Kamu Tidak Seru.');
                window.location.href = 'LandingPage.html';
            } else {
                alert('Yey Kamu Masih Disini.');
            }
        }
    }

    function answerQuestion(answer) {
        alert('Jawaban Anda: ' + answer);
        // Logika lain sesuai kebutuhan
    }

    var questions = [
      { imageSrc: 'Image/Naruto2.jpg', questionText: 'Apa Judul Anime diatas:', correctAnswer: 'Naruto' },
      { imageSrc: 'Image/Noragami.jpg', questionText: 'Apa Judul Anime diatas:', correctAnswer: 'Noragami' },
      { imageSrc: 'Image/NisekoiHd1.png', questionText: 'Apa Judul Anime diatas:', correctAnswer: 'Nisekoi' },
      { questionText: 'Siapakah pencipta Naruto:', correctAnswer: 'Masashi Kishimoto' }, // Pertanyaan keempat dengan jawaban dinamis
      { questionText: 'Siapakah pencipta One Piece:', correctAnswer: 'Eiichiro Oda' },
  ];
  
  var currentQuestionIndex = 0;
  
  // Tampilkan pertanyaan pertama saat halaman dimuat
  displayQuestion();
  
  function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    document.getElementById('questionImage').src = currentQuestion.imageSrc;
    document.getElementById('questionText').innerText = currentQuestion.questionText;

    // Pertanyaan keempat memiliki dua opsi jawaban
    if (currentQuestionIndex === 3) {
        // Ganti jawaban pada pertanyaan keempat
        questions[3].correctAnswer = 'Masashi Kishimoto';

        // Atur teks dan nilai pada option4
        var option4 = document.getElementById('option4');
        option4.querySelector('a').innerText = 'Masashi Kishimoto';
        option4.querySelector('button').setAttribute('onclick', "answerQuestion('Masashi Kishimoto')");
        var option3 = document.getElementById('option3');
        option3.querySelector('a').innerText = 'Eiichiro Oda';
        option3.querySelector('button').setAttribute('onclick', "answerQuestion('Eiichiro Oda')");
    }
}

  function answerQuestion(answer) {
      var currentQuestion = questions[currentQuestionIndex];
  
      if (answer === currentQuestion.correctAnswer) {
          alert('Jawaban Benar! Lanjutkan ke pertanyaan berikutnya.');
          currentQuestionIndex++;
  
          if (currentQuestionIndex < questions.length) {
              displayQuestion();
          } else {
              alert('Anda telah menyelesaikan semua pertanyaan. Terima kasih!');
              window.location.href = 'Index.html';
          }
      } else {
          alert('Jawaban Salah. Coba lagi!');
      }
  }
  
  
  

    
    