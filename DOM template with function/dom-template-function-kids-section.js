let kidsheadingdiv = createElement("div","kids-heading");
document.body.appendChild(kidsheadingdiv)

let kidsheadingh1 = createElement("h1","","Kid's  Latest");

let kidsheadingpara = createElement("p","","Details to details is what makes Hexashop different from the other themes.");

kidsheadingdiv.append(kidsheadingh1,kidsheadingpara);

let combinekidsdiv = createElement("div","kids-content");
document.body.appendChild(combinekidsdiv);


let kidsmaindiv = createElement("div","kids-main-div");
combinekidsdiv.appendChild(kidsmaindiv);


let kidsleftimg = createElement("div","leftside-content");

let leftimage = [
{
	name:"src",
	value:"images/kid-01.jpg",
},

{
	name:"alt",
	value:"image",
},
];

let kidsleftimge = createElement("img","leftside-image","",leftimage);

let leftfontHTML = `<i style="font-size:16px" class="fa">&#xf06e;</i>    <i style="font-size:16px" class="fa">&#xf005;</i>    <i style="font-size:16px" class="fa">&#xf07a;</i>`

let  leftfont = createElement("div","leftside-icon",leftfontHTML)
 

let kidsleftbottomcontent = createElement("div","leftside-bottom-div");

let kidsleftbottomcontenth1 = createElement("h1","","School Collection");

let kidsleftbottomcontentspan = createElement("span","","$80.00");

let kidsleftbottomcontentdiv = createElement("div","leftside-star");



let kidsleftarry = ["<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>"];

for(i=0; i < kidsleftarry.length; i++){
	let kidsleftbottomcontentli = createElement("li");
	kidsleftbottomcontentli.innerHTML = kidsleftarry[i];
	kidsleftbottomcontentdiv.appendChild(kidsleftbottomcontentli);
}

kidsleftbottomcontent.append(kidsleftbottomcontenth1,kidsleftbottomcontentspan,kidsleftbottomcontentdiv);

kidsleftimg.append(kidsleftimge,leftfont,kidsleftbottomcontent);


let kidsmidleimg = createElement("div","midleside-content");

let midleimage = [
{
	name:"src",
	value:"images/kid-02.jpg",
},

{
	name:"alt",
	value:"image",
},
];

let kidmidleimg = createElement("img","midleside-image","",midleimage);

let kidsmidlefontHTML = `<i style="font-size:16px" class="fa">&#xf06e;</i>    <i style="font-size:16px" class="fa">&#xf005;</i>    <i style="font-size:16px" class="fa">&#xf07a;</i>`

let kidsmidlefont = createElement("div","midleside-icon",kidsmidlefontHTML);


let kidsbottomcontent = createElement("div","midleside-bottom-div");

let kidsbottomcontenth1 = createElement("h1","","Summer Cap");

let kidsbottomcontentspan = createElement("span","","$12.00");

let kidsbottomcontentdiv = createElement("div","midleside-star");

let kidsarry = ["<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>"];

for(i=0; i < kidsarry.length; i++){
	let kidsbottomcontentli = createElement("li");
	kidsbottomcontentli.innerHTML = kidsarry[i];
	kidsbottomcontentdiv.appendChild(kidsbottomcontentli);
}

kidsbottomcontent.append(kidsbottomcontenth1,kidsbottomcontentspan,kidsbottomcontentdiv);

kidsmidleimg.append(kidmidleimg,kidsmidlefont,kidsbottomcontent);


let kidsrightimg = createElement("div","rightside-content");

let rightimage= [
{
	name:"src",
	value:"images/kid-03.jpg",
},

{
	name:"alt",
	value:"image",
},
];

let kidsrightimge = createElement("img","rightside-image","",rightimage);

rightfontHTML = `<i style="font-size:16px" class="fa">&#xf06e;</i>    <i style="font-size:16px" class="fa">&#xf005;</i>    <i style="font-size:16px" class="fa">&#xf07a;</i>`

let kidsfonts = createElement("div","rightside-icon",rightfontHTML);


let kidsrightbottomcontent = createElement("div","rightside-bottom-div");

let kidsrightbottomcontenth1 = createElement("h1","","Classic Kid");

let kidsrightbottomcontentspan = createElement("span","","$30.00");

let kidsrightbottomcontentdiv = createElement("div","rightside-star");

let kidsrightarry = ["<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>"];

for(i=0; i < kidsrightarry.length; i++){
	let kidsrightbottomcontentli = createElement("li");
	kidsrightbottomcontentli.innerHTML = kidsrightarry[i];
	kidsrightbottomcontentdiv.appendChild(kidsrightbottomcontentli);
}

kidsrightbottomcontent.append(kidsrightbottomcontenth1,kidsrightbottomcontentspan,kidsrightbottomcontentdiv);

kidsrightimg.append(kidsrightimge,kidsfonts,kidsrightbottomcontent); 

kidsmaindiv.append(kidsleftimg,kidsmidleimg,kidsrightimg);