document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const popupTitle = document.getElementById("popup-title");
  const popupDescription = document.getElementById("popup-description");
  const closeBtn = document.querySelector(".close-btn");
  const overlay = document.getElementById("popup");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const imgSrc = card.querySelector("img").src;
      const title = card.querySelector("h3").textContent;
      const description = card.querySelector("p").textContent;

      popupImg.innerHTML = `<img src="${imgSrc}" alt="${title}">`;
      popupTitle.textContent = title;
      popupDescription.textContent = description;

      popup.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      popup.style.display = "none";
    }
  });
});
