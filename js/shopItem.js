var inCart;
var itemId;
var itemData;
var cartList;

shopItemMain();

async function shopItemMain() {

    //getting the id of the item post
    itemId = getId();

    //getting the data of that post from cms
    itemData = await fetching('posts/'+itemId);

    initHTML(itemData);

    //getting the object from local storage
    initCart();

}

function initCart () {
    // body... 
    inCart = localStorage.getItem("inCart");
    inCart = JSON.parse(inCart);

    cartList = localStorage.getItem("cartList");
    cartList = JSON.parse(cartList);

    if(inCart == undefined)
    {
        localStorage.setItem("inCart", "{}");
        inCart = localStorage.getItem("inCart");
        inCart = JSON.parse(inCart);
    }

    if(cartList == undefined)
    {
        localStorage.setItem("cartList", "[]");
        cartList = localStorage.getItem("cartList");
        cartList = JSON.parse(cartList);
    }
}

function change (num) {
    // body...
    var now = document.querySelector('.quantity').innerHTML;
    now = new Number(now);

    now += num;
    if(now>0)
        document.querySelector('.quantity').innerHTML = now; 
}

function addToCart () {
    // body... 

    var quantity = document.querySelector('.addToCart .quantity').innerHTML;
    quantity = new Number(quantity);

    if(inCart[itemId]==undefined)
    {
        cartList.push(itemId);
        itemData.cart=quantity;
    }
    else 
    {
        itemData.cart= new Number(inCart[itemId].cart) + quantity ;
    }
    itemData.price = getContent(itemData).querySelector('.price').innerHTML;
    inCart[itemId]=itemData;

    cartList = JSON.stringify(cartList);
    localStorage.setItem("cartList", cartList);

    inCart = JSON.stringify(inCart);
    localStorage.setItem("inCart", inCart);

    inCart = JSON.parse(inCart);
    cartList = JSON.parse(cartList);

    alert('added ' + quantity + ' ' + itemData.title.rendered + ' to cart');
}

function getId () {
    // body... 
    var url = window.location;
    var usp = new URLSearchParams(url.search);

    return usp.get('id').toString();
}

function initHTML (data) {
    // body... 

    var cBody = document.querySelector('.contentBody');
    var title = cBody.querySelector('.title span');
    var price = cBody.querySelector('.price span');
    var image = cBody.querySelector('.gallery img');
    var details = cBody.querySelector('.details');

    title.innerHTML = data.title.rendered;

    content = getContent(data);

    image.src = content.querySelector('img').src;
    price.innerHTML = content.querySelector('.price').outerHTML;

    getDetails(content,details);

}

function getDetails (content, div) {
    // body... 

    var text = content.querySelectorAll('p');

    for(var i=0;i<text.length;i++)
    {
        div.appendChild(text[i]);
    }
}
