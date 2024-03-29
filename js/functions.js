//Evento para el icono del menu
const menuIcon = document.querySelector(".header__icon:first-child");
const menu = document.getElementsByClassName("menu")[0];
const closeIcon = document.querySelector(".menu__icon:last-child img");

menuIcon.addEventListener("click", () => {    
    menu.classList.toggle("hide");

});

closeIcon.addEventListener("click", () => {
    menu.classList.toggle("hide");
});

//Evento para desplegar el carrito
const cartIcon = document.getElementsByClassName("header__icon")[1];
const cart = document.querySelector(".cart");

cartIcon.addEventListener("click", ()=>{
    cart.classList.toggle("hideCart");
});


//Evento para agregar al carrito
const addButtons = document.getElementsByClassName("products__button");

const closeCart = document.querySelector(".heading .cart__icon");

closeCart.addEventListener("click", () => {
    cart.classList.toggle("hideCart");
})

//Obteniendo los datos del elemento agregado al carrito
const getInfo = (element) => {
    const info = [];
    const product = element.parentElement;
    const source = product.querySelector("img").getAttribute("src");
    const title = product.querySelector("h3").textContent;
    const price = product.querySelector("p").textContent;
    info.push(source);
    info.push(title);
    info.push(price);
    return info;
}

//Crea un elemento cart__product
const createInCart = (info) => {
    const product = document.createElement("div");
    product.setAttribute("class", "cart__product");

    const cartImage = document.createElement("img");
    cartImage.setAttribute("src", info[0]);
    cartImage.setAttribute("alt","Libro")
    cartImage.setAttribute("class", "cart__img")

    const cartTitle = document.createElement("p");
    cartTitle.setAttribute("class", "cart__product--name")
    cartTitle.textContent = info[1]

    const cartPrice = document.createElement("p");
    cartPrice.setAttribute("class","cart__price");
    cartPrice.textContent = info[2];

    const cartTrashIcon = document.createElement("i");
    cartTrashIcon.setAttribute("class","cart__icon");    

    const cartTrashImage = document.createElement("img");
    cartTrashImage.setAttribute("src","assets/delete.png");
    cartTrashImage.setAttribute("alt","Icono quitar");
    cartTrashImage.setAttribute("class","cart__img--delete-icon");

    cartTrashIcon.append(cartTrashImage);

    product.append(cartImage,cartTitle, cartPrice, cartTrashIcon);
        

    return product;
}

for (let addButton of addButtons) {
    addButton.addEventListener("click", () => {
        const info = getInfo(addButton);
        const book = createInCart(info);
        const cart = document.querySelector(".cart");        
        cart.appendChild(book);
       
                 
    });
}



