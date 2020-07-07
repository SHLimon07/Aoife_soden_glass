function navBarToggle() {
    var icon = document.querySelector('.buttonDiv');
    var menu = document.querySelector('.collaps');

    icon.classList.toggle('toggle');
    menu.classList.toggle('toggle');
}

main();

async function main()
{
	
}

async function fetching (type) {
	//this function fetches the api from google sheet as json 

	if(type==null)
		type='';
	else
		type = 'wp/v2/'+type;
	const response = await fetch('http://sajjad.jprkopat.com/semester2/glassart/wp-json/'+type);
	var dataSheet = await response.json();
	return dataSheet;
}
