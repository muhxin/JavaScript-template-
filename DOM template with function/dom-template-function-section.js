let section = createElement("div","section");
document.body.appendChild(section);

let content = createElement("div","content");
section.appendChild(content);

let container = createElement("div","main-container");
content.appendChild(container);

let  leftcontainer = createElement("div","left-container");

let leftheading = createElement("h1","","Explore Our Products");

let leftpara1 = createElement("p","",`You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this layout. You can convert this template as any kind of ecommerce CMS theme as you wish.`);

let  innerdiv= createElement("div","inner-div");

let leftstorng = createElement("strong","",`You are not allowed to redistribute this template ZIP file on any other website`);

let innerdivfonts = createElement("li","", `<i style="font-size:24px" class="fa">&#xf10d;</i>`);

innerdiv.append(innerdivfonts,leftstorng);
 
let leftpara2 = createElement("p","",`There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us.`);

let leftspan = createElement("span","",`If this template is beneficial for your website or business, please kindly support us a little via PayPal. Please also tell your friends about our great website. Thank you.`);

let leftbutton = createElement("Button","btn","Discover More");

leftcontainer.append(leftheading,leftpara1,innerdiv,leftpara2,leftspan,leftbutton)

let rightcontainer = createElement("div","right-container");

let rightdiv1 = createElement("div","innerdiv1");

let rightheading1 = createElement("h1","","Leather Bags");
let rightpara1  = createElement("p","",'Latest Collection'); 

rightdiv1.append(rightheading1,rightpara1)

let rightimage1= [
{
	name:"src",
	value:"images/explore-image-01.jpg",
},

{
	name:"alt",
	value:"image",
},
];

let rightimg1 = createElement("img","right-img1","",rightimage1); 

let rightimage2= [
{
	name:"src",
	value:"images/explore-image-02.jpg",
},

{
	name:"alt",
	value:"image",
},
];


let rightimg2 = createElement("img","right-img2","",rightimage2); 

let rightdiv2 = createElement("div","innerdiv2");

let rightheading2 = createElement("h1","","Different Types")
let rightpara2  = createElement("p","","Over 304 Products"); 

rightdiv2.append(rightheading2,rightpara2)

rightcontainer.append(rightdiv1,rightimg1,rightimg2,rightdiv2);

container.append(leftcontainer,rightcontainer);