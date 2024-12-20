const sections = document.querySelectorAll(".section")
const links = document.querySelectorAll(".link")

window.onscroll = () =>{
	sections.forEach(item =>{
		let top = window.scrollY
		let ofset = item.offsetTop - 150;
		let height = item.offsetHeight
		let id = item.getAttribute("id")

		if(top >= ofset && top < ofset + height){
			links.forEach(item2 =>{
				item2.classList.remove("active")
				let href = item2.getAttribute("href")
				if(href == "#" + id){
					item2.classList.add("active")
				}
			})
		}
	})
}


let hiddenMenu = document.querySelector(".hiddenMenu")

function bars() {
	console.log(hiddenMenu.style.animationName)
	if (hiddenMenu.style.display == "grid") {
		hiddenMenu.style.animationName = "hide";

		setTimeout(() => {
			hiddenMenu.style.display = "none";
		}, 700);
	} else {
		hiddenMenu.style.display = "grid";
		hiddenMenu.style.animationName = "unhide";
	}
}

//slide

const slide_arr = [
{
	"text1" : "Special Thanks",
	"text2" : "Flexslider",
	"text3" : "Feel free to look around and customize to suit your needs.",
	"image" : "slide/img1.jpg",
	"buttext" : "Our services"
},
{
	"text1" : "hello, this is web & mobile studio",
	"text2" : "clean design and easy to customize",
	"text3" : "Feel free to look around and customize to suit your needs.",
	"image" : "slide/img2.jpg",
	"buttext" : "Our works"
},
{
	"text1" : "Flex Slider, CSS Flexbox",
	"text2" : "work on all modern browsers",
	"text3" : "see caniuse.com for browser compatibility information",
	"image" : "slide/img3.jpg",
	"buttext" : "see about us"
}
]

let i = 0;
setInterval(function(){
	img.src = slide_arr[i].image;
    text1.textContent = slide_arr[i].text1;
    text2.textContent = slide_arr[i].text2;
    text3.textContent = slide_arr[i].text3;
    but.textContent = slide_arr[i].buttext;
    i++;
    if (i == slide_arr.length) {
        i = 0;
    }
},3000)


//studio
var texts = document.getElementsByClassName("studio_text")
const studio_texts = ["Welcome to CRYSTAL Design","Digital Studio in Bangkok","Crystal is free web template for everyone. Feel free to use it for your website. Please spread a word about templatemo to your friends. Integer lorem magna, gravida vitae metus a, euismod faucibus nisi. In sed nulla magna. Nulla in mauris ullamcorper, cursus lorem lobortis, pellentesque enim. Ut vel pellentesque est. Maecenas sed malesuada tellus."]
for (let i = 0; i < texts.length; i++) {
	texts[i].innerHTML = studio_texts[i]
}
var images = document.getElementsByClassName('img2')
const studio_arr_pic = ["studio/img1.jpg","studio/img2.jpg","studio/img3.jpg","studio/img4.jpg"]

for (let i = 0; i < images.length; i++) {
	images[i].src = studio_arr_pic[i]
}

//team
team_info.innerHTML = "Mauris mattis vitae libero eget iaculis. Donec et augue quis quam porttitor consectetur ut nec sem. Integer sagittis viverra quam quis ultricies. Aenean risus nisl, consequat at nunc id, tincidunt tristique mauris."


const person = [
{
	"img":"team/img1.jpg",
	"name":"tracy",
	"profession":"designer"
},
{
	"img":"team/img2.jpg",
	"name":"mary",
	"profession":"developer"
},
{
	"img":"team/img3.jpg",
	"name":"julia",
	"profession":"director"
},
{
	"img":"team/img4.jpg",
	"name":"linda",
	"profession":"manager"
},
]

var person_iamges = document.getElementsByClassName("person_img")
var person_name = document.getElementsByClassName("name")
var person_prof = document.getElementsByClassName("prof")
for (let i = 0; i < person.length; i++) {
	person_iamges[i].src = person[i].img
	person_name[i].innerHTML = person[i].name
	person_prof[i].innerHTML = person[i].profession
}

//services
services_info.innerHTML = "Mauris mattis vitae libero eget iaculis. Donec et augue quis quam porttitor consectetur ut nec sem. Integer sagittis viverra quam quis ultricies. Aenean risus nisl, consequat at nunc id, tincidunt tristique mauris."


const services_arr = [
{
	"icon":"fa-solid fa-gear",
	"name":"WEB DEVELOPMENT",
	"text":"In suscipit, purus id ultrices sodales, nunc mi porta nibh, bibendum maximus sem mi id metus. Suspendisse faucibus suscipit diam."
},
{
	"icon":"fa-solid fa-earth-americas",
	"name":"DOMAIN HOSTING",
	"text":"In suscipit, purus id ultrices sodales, nunc mi porta nibh, bibendum maximus sem mi id metus. Suspendisse faucibus suscipit diam."
},
{
	"icon":"fa-solid fa-desktop",
	"name":"WEB DESIGN"	,
	"text":"In suscipit, purus id ultrices sodales, nunc mi porta nibh, bibendum maximus sem mi id metus. Suspendisse faucibus suscipit diam."
},
{
	"icon":"fa-solid fa-heart",
	"name":"SOCIAL MEDIA",
	"text":"In suscipit, purus id ultrices sodales, nunc mi porta nibh, bibendum maximus sem mi id metus. Suspendisse faucibus suscipit diam."
},
{
	"icon":"fa-solid fa-laptop",
	"name":"RESPONSIVE THEMES",
	"text":"In suscipit, purus id ultrices sodales, nunc mi porta nibh, bibendum maximus sem mi id metus. Suspendisse faucibus suscipit diam."
},
{
	"icon":"fa-solid fa-envelope",
	"name":"EMAIL HOSTING",
	"text":"In suscipit, purus id ultrices sodales, nunc mi porta nibh, bibendum maximus sem mi id metus. Suspendisse faucibus suscipit diam."
},
]


var services_grid = document.getElementsByClassName("services_grid")[0]
var box = document.getElementsByClassName("box")

for (let i = 0; i < box.length; i++) {
	let current = box[i].children
	let klor_icon = current[0].children[0]

	klor_icon.className = services_arr[i].icon

	let box_text = current[1].children
	box_text[0].innerHTML = services_arr[i].name
	box_text[1].innerHTML = services_arr[i].text
}


//back
back_info_text.innerHTML = "Mauris mattis vitae libero eget iaculis. Donec et augue quis quam porttitor consectetur ut nec sem. Integer sagittis viverra quam quis ultricies. Aenean risus nisl, consequat at nunc id, tincidunt tristique mauris."

//work
work_info_text.innerHTML = "Mauris mattis vitae libero eget iaculis. Donec et augue quis quam porttitor consectetur ut nec sem. Integer sagittis viverra quam quis ultricies. Aenean risus nisl, consequat at nunc id, tincidunt tristique mauris."

const work_images = [
	"work/img1.jpg",
	"work/img2.jpg",
	"work/img3.jpg",
	"work/img4.jpg",
	"work/img5.jpg",
	"work/img6.jpg",
]


let pic = document.getElementsByClassName("pic")

for (let k = 0; k < pic.length; k++) {
	pic[k].src = work_images[k];
}

//priceing
price_info_text.innerHTML = "Please tell your friends about templatemo.com website. Thank you for supporting us. Donec et augue quis quam porttitor consectetur ut nec sem. Integer sagittis viverra quam quis ultricies. Aenean risus nisl, consequat at nunc id, tincidunt tristique mauris."

const price_arr = [
{
    "name": "Starter",
    "pricePerMonth": "20$",
    "storage": "100 GB",
    "bandwidth": "500 GB",
    "designs": 50,
    "supportment": "1 Year"
},
{
    "name": "business",
    "pricePerMonth": "50$",
    "storage": "200 GB",
    "bandwidth": "2,000 GB",
    "designs": 200,
    "supportment": "2 Year"
},
{
    "name": "professional",
    "pricePerMonth": "75$",
    "storage": "600 GB",
    "bandwidth": "3,000 GB",
    "designs": 300,
    "supportment": "3 Year"
},
{
    "name": "advenced",
    "pricePerMonth": "120$",
    "storage": "1500 GB",
    "bandwidth": "10,000 GB",
    "designs": 500,
    "supportment": "Lifetime"
}
]


let price_grid_item = document.getElementsByClassName("price_grid_item")

for (let i = 0; i < price_grid_item.length; i++) {
	if (i % 2 == 0) {
		price_grid_item[i].style.background = " #333333";
	}
	else{
		price_grid_item[i].style.background = "#5d962c";
	}
	let element = price_grid_item[i].children
	let j = 0;
	for(let key in price_arr[i]){
		if(key == "name"){
			element[j].style.background = "#dddddd"
			element[j].style.color = "black"
			element[j].style.padding = "20px 0px"
			element[j].innerHTML = price_arr[i][key]
			element[j].style.fontSize = "25px"
			element[j].style.textTransform = "uppercase"
		}else{
			element[j].innerHTML = key+" "+price_arr[i][key]
		}
		j++;
	}
}

/*contact*/

contact_info.innerHTML = "Mauris mattis vitae libero eget iaculis. Donec et augue quis quam porttitor consectetur ut nec sem. Integer sagittis viverra quam quis ultricies. Aenean risus nisl, consequat at nunc id, tincidunt tristique mauris."