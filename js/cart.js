
cartMain();

async function cartMain() {

    //getting the art shop posts
    var cartData = getCartData();

    if(cartData.length==0)
        empty();

    //initializing the data to hmtl
    initContent(cartData);

}


function empty () {
    // body... 
    var no = document.createElement('h1');
    no.innerHTML = 'No Resutls';
    no.style.textAlign = 'center';
    no.style.color = '#d8d8d8';  
    document.querySelector('.productDivs').appendChild(no);
}

function getCartData () {
    // body... 

    var inCart = localStorage.getItem("inCart");
    inCart = JSON.parse(inCart);

    var cartList = localStorage.getItem("cartList");
    cartList = JSON.parse(cartList);

    var cartData = [];

    for(i=0;i<cartList.length;i++)
    {
        cartData.push(inCart[cartList[i]]);
    }

    return cartData;
}

function initContent (cartData) {
    // body... 

    var sz = cartData.length;
    var mainDiv = document.querySelector('.productDivs');
    for(var i=0;i<sz;i++)
    {
        createItem(cartData[i],mainDiv);
    }
}

function createItem (data,div) {
    // body... 

    itemId = data.id;

    var productDiv = document.createElement('div');
    productDiv.classList.add('product');
    
    var imageLink = document.createElement('a');
    imageLink.href = "shopItem.html?id="+itemId;
    
    var image = document.createElement('img');
    image.src = getImageSource(data);
    
    var contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    
    var titleDiv = document.createElement('div');
    titleDiv.classList.add('title');

    var title = document.createElement('a');
    title.innerHTML = data.title.rendered;
    title.href = "shopItem.html?id="+itemId;

    var priceDiv = document.createElement('div');
    priceDiv.classList.add('price');

    var price = document.createElement('span');
    price.innerHTML = getContent(data).querySelector('.price').outerHTML;

    var quantityDiv = document.createElement('div');
    quantityDiv.classList.add('quantity');

    var quantity = document.createElement('span');
    quantity.innerHTML = "Quantity: " + data.cart;

    var textDiv = document.createElement('div');
    textDiv.classList.add('text');

    var text = document.createElement('span');
    text.innerHTML = data.excerpt.rendered;

    //now appending the child elements to their parents
    div.appendChild(productDiv);
    productDiv.appendChild(imageLink);
    imageLink.appendChild(image);
    productDiv.appendChild(contentDiv);
    contentDiv.appendChild(titleDiv);
    titleDiv.appendChild(title);
    contentDiv.appendChild(priceDiv);
    priceDiv.appendChild(price);
    contentDiv.appendChild(quantityDiv);
    quantityDiv.appendChild(quantity);
    contentDiv.appendChild(textDiv);
    textDiv.appendChild(text);
}
