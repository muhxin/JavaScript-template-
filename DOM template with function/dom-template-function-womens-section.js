let womensheadingdiv = createElement("div","women-heading");
document.body.appendChild(womensheadingdiv)

let  headingh1 = createElement("h1","","Women's  Latest");

let headingpara = createElement("p","","Details to details is what makes Hexashop different from the other themes.");

womensheadingdiv.append(headingh1,headingpara);

let combinewomensdiv = createElement("div","women-content");
document.body.appendChild(combinewomensdiv);

let womensmaindiv = createElement("div","womens-main-div");
combinewomensdiv.appendChild(womensmaindiv);

let womensleftimg = createElement("div","left-content");

let leftimge = [
{
	name:"src",
	value:"images/women-01.jpg",
},

{
	name:"alt",
	value:"image",
},
]; 

let leftimg = createElement("img","left-image","",leftimge);

let leftfontsHTML = `<i style="font-size:16px" class="fa">&#xf06e;</i>    <i style="font-size:16px" class="fa">&#xf005;</i>    <i style="font-size:16px" class="fa">&#xf07a;</i>`

let leftfonts = createElement("div","left-icon",leftfontsHTML);

let leftbottomcontent = createElement("div","left-bottom-div");

let leftbottomcontenth1 = createElement("h1","","New Green Jacket");

let leftbottomcontentspan = createElement("span","","$75.00");

let leftbottomcontentdiv = createElement("div","left-star");

let leftarr = ["<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>"];

for(i=0; i < leftarr.length; i++){
	let leftbottomcontentli = createElement("li");
	leftbottomcontentli.innerHTML = leftarr[i];
	leftbottomcontentdiv.appendChild(leftbottomcontentli);
}

leftbottomcontent.append(leftbottomcontenth1,leftbottomcontentspan,leftbottomcontentdiv);

womensleftimg.append(leftimg,leftfonts,leftbottomcontent);


let womensmidleimg = createElement("div","midle-content");

let midleimge = [
{
	name:"src",
	value:"images/women-02.jpg",
},

{
	name:"alt",
	value:"image",
},
];

let midleimg = createElement("img","midle-image","",midleimge);

let midlefontsHTML = `<i style="font-size:16px" class="fa">&#xf06e;</i>    <i style="font-size:16px" class="fa">&#xf005;</i>    <i style="font-size:16px" class="fa">&#xf07a;</i>`

let midlefonts = createElement("div","midle-icon",midlefontsHTML)


let midlebottomcontent = createElement("div","midle-bottom-div");

let midlebottomcontenth1 = createElement("h1","","Classic Dress");

let midlebottomcontentspan = createElement("span","","$45.00");

let midlebottomcontentdiv = createElement("div","","midle-star");

let midlearr = ["<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>"];

for(i=0; i < midlearr.length; i++){
	let midlebottomcontentli = createElement("li");
	midlebottomcontentli.innerHTML = midlearr[i];
	midlebottomcontentdiv.appendChild(bottomcontentli);
}

midlebottomcontent.append(midlebottomcontenth1,midlebottomcontentspan,bottomcontentdiv);

womensmidleimg.append(midleimg,midlefonts,midlebottomcontent);


let womensrightimg = createElement("div","right-content");

let rightimge = [
{
	name:"src",
	value:"images/women-03.jpg",
},

{
	name:"alt",
	value:"image",
},
];

let rightimg = createElement("img","right-image","",rightimge);

let rightfontsHTML = `<i style="font-size:16px" class="fa">&#xf06e;</i>    <i style="font-size:16px" class="fa">&#xf005;</i>    <i style="font-size:16px" class="fa">&#xf07a;</i>`;

let rightfonts = createElement("div","right-icon",rightfontsHTML);

let rightbottomcontent = createElement("div","right-bottom-div");

let rightbottomcontenth1 = createElement("h1","","Spring Collection")

let rightbottomcontentspan = createElement("span","","$130.00");

let rightbottomcontentdiv = createElement("div","right-star");

let rightarr = ["<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>"];

for(i=0; i < rightarr.length; i++){
	let rightbottomcontentli = createElement("li");
	rightbottomcontentli.innerHTML = rightarr[i];
	rightbottomcontentdiv.appendChild(rightbottomcontentli);
}

rightbottomcontent.append(rightbottomcontenth1,rightbottomcontentspan,rightbottomcontentdiv);

womensrightimg.append(rightimg,rightfonts,rightbottomcontent);


womensmaindiv.append(womensleftimg,womensmidleimg ,womensrightimg);
