var elList = document.querySelector(".pokemon__list");

for (var pokemon of pokemons){

  var newItem = document.createElement("li");
  var newImg = document.createElement("img");
  var newSubbox = document.createElement("div");
  var newName = document.createElement("h2");
  var newText = document.createElement("p");


  newImg.textContent = pokemon.img;
  newName.textContent = pokemon.name;
  newText.textContent = pokemon.weaknesses.join(", ");



  
  newItem.setAttribute("class", "card mb-3 bg-info bg-opacity-25");
  newItem.setAttribute("style", "width: 18rem");
  newImg.setAttribute("src", pokemon.img);
  newImg.setAttribute("height", 286);
  newImg.setAttribute("class", "card-img");
  newImg.setAttribute("class", "card-img-top");
  newSubbox.setAttribute("class", "card-body text-center bg-light");
  newName.setAttribute("class", "card-title");
  newText.setAttribute("class", "card-text");
 



  
  newSubbox.appendChild(newName);
  newSubbox.appendChild(newText);
 newItem.appendChild(newImg);
 newItem.appendChild(newSubbox);
  elList.appendChild(newItem);
 
  
 
}