let mensheadingdiv = createElement("div","heading");
document.body.appendChild(mensheadingdiv)

let mensheadingh1 = createElement("h1","","Men's  Latest");

let mensheadingpara = createElement("p","","Details to details is what makes Hexashop different from the other themes.");

mensheadingdiv.append(mensheadingh1,mensheadingpara);

let combinemensdiv = createElement("div","parentdiv");
document.body.appendChild(combinemensdiv);

let mensdiv = createElement("div","mensdiv");
combinemensdiv.appendChild(mensdiv);

let mensdivimg1 = createElement("div","firstimg");

let Attrimg1 = [
	{
		name:"src",
		value:"images/men-01.jpg",
	},
	
	{
		name:"alt",
		value:"image",
	},
];

let img1 = createElement("img","image1","",Attrimg1);

let fontshtml = `<i class='fa'>&#xf06e;</i>    <i class='fa'>&#xf005;</i>    <i class='fa'>&#xf07a;</i>`

let fonts = createElement("div","icon",fontshtml);

let bottomcontent = createElement("div","bottom-div");

let bottomcontenth1 = createElement("h1","","Classic Spring");

let bottomcontentspan = createElement("span","","$120.00");

let bottomcontentdiv = createElement("div","star");

let bottomcontentli = createElement("li");

let arry = ["<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>"];

for(i=0; i < arry.length; i++){
	let bottomcontentli = createElement("li");
	bottomcontentli.innerHTML = arry[i];
	bottomcontentdiv.appendChild(bottomcontentli);
}

bottomcontent.append(bottomcontenth1,bottomcontentspan,bottomcontentdiv);

mensdivimg1.append(img1,fonts,bottomcontent);

let mensdivimg2 = createElement("div","secondimg");

let Attrimg2 = [
	{
		name:"src",
		value:"images/men-02.jpg",
	},
	
	{
		name:"alt",
		value:"image",
	},
];

let img2 = createElement("img","image2","",Attrimg2);

fonts2HTML = `<i style="font-size:16px" class="fa">&#xf06e;</i>    <i style="font-size:16px" class="fa">&#xf005;</i>    <i style="font-size:16px" class="fa">&#xf07a;</i>`

let fonts2 = createElement("div","icon2",fonts2HTML);

let bottomcontent2 = createElement("div","bottom-div2");

let bottomcontenth2 = createElement("h1","","Air Force 1 X");

let bottomcontentspan2 = createElement("span","","$90.00");

let bottomcontentdiv2 = createElement("div","star2");

let array = ["<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>"];

for(i=0; i < array.length; i++){
	let bottomcontentli2 = createElement("li");
	bottomcontentli2.innerHTML = array[i];
	bottomcontentdiv2.appendChild(bottomcontentli2);
}

bottomcontent2.append(bottomcontenth2,bottomcontentspan2,bottomcontentdiv2);

mensdivimg2.append(img2,fonts2,bottomcontent2);

let mensdivimg3 = createElement("div");
mensdivimg3.className = "thrdimg";

let Attrimg3 = [
	{
		name:"src",
		value:"images/men-03.jpg",
	},
	
	{
		name:"alt",
		value:"image",
	},
];

let img3 = createElement("img","image3","",Attrimg3);

 
let fonts3 =createElement("div","icon3","<i class='fa'>&#xf06e;</i>    <i  class='fa'>&#xf005;</i>    <i  class='fa'>&#xf07a;</i>");


let bottomcontent3 = createElement("div","bottom-div3");

let bottomcontenth3 = createElement("h1","","Love Nana'20");

let bottomcontentspan3 = createElement("span","", "$150.00");

let bottomcontentdiv3 =createElement("div","star3");

let ary = ["<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>","<i class='fa'>&#xf005;</i>"];

for(i=0; i < ary.length; i++){
	let bottomcontentli3 = createElement("li");
	bottomcontentli3.innerHTML = ary[i];
	bottomcontentdiv3.appendChild(bottomcontentli3);
}

bottomcontent3.append(bottomcontenth3,bottomcontentspan3,bottomcontentdiv3);

mensdivimg3.append(img3,fonts3,bottomcontent3); 
  
mensdiv.append(mensdivimg1,mensdivimg2,mensdivimg3);  