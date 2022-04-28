let meniu = {};
let url = "https://meniu-9992e-default-rtdb.europe-west1.firebasedatabase.app/";
let searched = { ingredients: "" };

function search() {
  let input = document.querySelector("[name='filtrare']");
  let searchVal = input.value;
  searched.ingredients = searchVal.toLowerCase();
  draw();
}

function draw() {
  let table = document.querySelector("#container2");
  let str = "";

  for (let [i, article] of Object.entries(meniu)) {
    if (article === null) {
      continue;
    }

    let pic;
    if (article.image === undefined) {
      pic =
        "https://gfsstore.com/wp-content/themes/gfsstore.com/images/no_image_available.png";
    } else {
      pic = article.image;
    }

    if (!article.ingredients.toLowerCase().includes(searched.ingredients)) {
      continue;
    }

    str += `
    <div class="foodItem">
      <img src="${pic}"/>
      <div class="foodDetails">
        <div class="foodName">
          <h4 class="name">${article.name}</h4>
          <h4 class="price">${article.price}</h4>
        </div>
        <div  onclick="getDataDetails(${i})" class="button" ">
          <input type="button" value="READ MORE" class="detalii"/>
        </div>
      </div>
    </div>`;
  }
  table.innerHTML = str;
}

async function getData() {
  document.querySelector("#loading").classList.remove("hidden");

  const response = await fetch(url + ".json");
  meniu = await response.json();

  document.querySelector("#loading").classList.add("hidden");

  draw();
}
