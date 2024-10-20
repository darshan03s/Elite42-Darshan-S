const cards = document.querySelector(".cards");

for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const info = document.createElement("div");
    info.classList.add("info");

    const img = document.createElement("img");
    img.src = "./images/bag.jpg";
    img.height = 200;
    img.width = 200;

    const h2 = document.createElement("h2");
    h2.innerHTML = "Bag";

    const para = document.createElement("p");
    para.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum labore quos odio accusamus, atque quae fugit dolores id sequi? In!";

    const button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    button.classList.add("add-to-cart");

    info.appendChild(para);
    info.appendChild(button);
    card.appendChild(h2);
    card.appendChild(img);
    card.appendChild(info);

    cards.appendChild(card);
}

