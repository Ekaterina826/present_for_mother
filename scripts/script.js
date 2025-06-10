document.addEventListener("DOMContentLoaded", () => {
  const colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#ffbe76",
    "#a55eea",
    "#ff7675",
    "#74b9ff",
  ];
  const container = document.getElementById("balloons-container");
  const card = document.querySelector(".birthday-card");

  function createBalloon() {
    const balloon = document.createElement("div");
    balloon.className = "balloon";

    // Случайные параметры
    const size = Math.random() * 30 + 30; // 30-60px
    const left = Math.random() * 100; // 0%-100%
    const color = colors[Math.floor(Math.random() * colors.length)];
    const delay = Math.random() * 5; // Задержка 0-5 сек

    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.2}px`;
    balloon.style.left = `${left}%`;
    balloon.style.backgroundColor = color;
    balloon.style.animationDelay = `${delay}s`;

    // Обтекание карточки
    if (left > 10 && left < 200) {
      // Если шарик в центре (где карточка)
      balloon.style.zIndex = "0"; // Пусть летит ПОД карточкой
    }

    container.appendChild(balloon);

    // Удаление после анимации
    balloon.addEventListener("animationend", () => {
      balloon.remove();
    });
  }

  // Создаем шарик каждые 200мс (меньше шариков = меньше хаоса)
  setInterval(createBalloon, 200);

  // Первые шарики
  for (let i = 0; i < 3; i++) {
    setTimeout(createBalloon, i * 100);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "images/фото1.jpg",
    "images/фото2.jpg",
    "images/фото3.jpg",
    "images/фото4.jpg",
    "images/фото5.jpg",
    "images/фото6.jpg",
    "images/фото7.jpg",
    "images/фото8.jpg",
  ];
  const imgElement = document.getElementById("slideshow-image");
  let current = 0;

  function showNextImage() {
    imgElement.classList.remove("visible");

    setTimeout(() => {
      current = (current + 1) % images.length;
      imgElement.src = images[current];
      imgElement.classList.add("visible");
    }, 600);
  }

  setInterval(showNextImage, 4000);
});
