

latestNewsMain();

async function latestNewsMain() {

    //getting the id of the news post
    var itemId = getId();

    //getting the data of that post from cms
    var itemData = await fetching('posts/'+itemId);

    initHTML(itemData);

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
