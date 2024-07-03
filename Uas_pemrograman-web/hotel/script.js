function showHotelDetail(name, image, description, facilities, price) {
  // Set the hotel details in the popup
  document.getElementById("popupHotelName").innerText = name;
  document.getElementById("popupHotelImage").src = image;
  document.getElementById("popupHotelDescription").innerText = description;

  const facilitiesList = document.getElementById("popupHotelFacilities");
  facilitiesList.innerHTML = "";
  facilities.forEach((facility) => {
    const li = document.createElement("li");
    li.innerText = facility;
    facilitiesList.appendChild(li);
  });

  // Set the price
  document.getElementById("popupHotelPrice").innerText = price;

  // Show the popup
  document.getElementById("hotelPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("hotelPopup").style.display = "none";
}

function redirectToBooking() {
  window.location.href = "/booking/index.html";
}
