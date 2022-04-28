meniu = {};
url = "https://meniu-9992e-default-rtdb.europe-west1.firebasedatabase.app/";

async function getDataDetails(index) {
  const response = await fetch(url + index + ".json");
  meniu = await response.json();
  let dialog = document.querySelector("#dialog");
  dialog.classList.remove("hidden");
  dialog.showModal();
  drawDetails();
}

function drawDetails() {
  document.querySelector(".name").innerText = meniu.name;

  let pic;
  if (meniu.image === undefined) {
    pic =
      "https://gfsstore.com/wp-content/themes/gfsstore.com/images/no_image_available.png";
  } else {
    pic = meniu.image;
  }
  document.querySelector("#pic").src = pic;
  document.querySelector(".price").innerHTML = meniu.price;
  document.querySelector("#ingredients").innerHTML = meniu.ingredients;
  document.querySelector("#quantity").innerHTML = meniu.quantity;
}

function exit() {
  dialog.classList.add("hidden");
}
