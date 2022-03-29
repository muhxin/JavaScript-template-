let footersection = createElement("div","footer-section");
document.body.appendChild(footersection);

let footermaindiv = createElement("div","footer-main-div")

let footerdiv1 = createElement("div","footer-div1");

let whitelogo = createElement("div","logo");

	let logoattr =
	[
		{
			name: "src",
			value: "images/white-logo.png",
		},
	
		{
			name:"alt",
			value:"logo",
		}

    ];
let footerdiv1logo = createElement("img","footer-logo","",logoattr);

let footerdiv1para1 = createElement("p","","16501 Collins Ave, Sunny Isles Beach, FL 33160, United States");

let footerdiv1para2 = createElement("p","","hexashop@company.com");

let footerdiv1para3 = createElement("p","","010-020-0340");

footerdiv1.append(footerdiv1logo,footerdiv1para1,footerdiv1para2,footerdiv1para3);

let footerdiv2 = createElement("div","footer-div2");

let footerdiv2heading1 = createElement("h1","","Shopping & Categories");
 
let footerdiv2para1 = createElement("p","","Men's Shoping");

let footerdiv2para2 = createElement("p","","Women's Shoping");

let footerdiv2para3 = createElement("p","","Kid's Shoping");

footerdiv2.append(footerdiv2heading1,footerdiv2para1,footerdiv2para2,footerdiv2para3);

let footerdiv3 = createElement("div","footer-div3");

let footerdiv3heading1 = createElement("h1","", "Useful Liks");
 
let footerdiv3para1 = createElement("p","","Home");

let footerdiv3para2 = createElement("p","","About Us");

let footerdiv3para3 = createElement("p","","Help");

let footerdiv3para4 = createElement("p","","Contact Us");

footerdiv3.append(footerdiv3heading1,footerdiv3para1,footerdiv3para2,
footerdiv3para3,footerdiv3para4);


let footerdiv4 = createElement("div","footer-div4");

let footerdiv4heading1 = createElement("h1","","Help & Information");
 
let footerdiv4para1 = createElement("p","","Help");

let footerdiv4para2 = createElement("p","","FAQ's");

let footerdiv4para3 = createElement("p","","Shiping");

let footerdiv4para4 = createElement("p","","Tracking ID");

footerdiv4.append(footerdiv4heading1,footerdiv4para1,footerdiv4para2,
footerdiv4para3,footerdiv4para4);

let subfooterdiv1 = createElement("div","sub-footer");

let subfooterpara = createElement("p","",`Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved.`);

let subfooterem = createElement("em","","Design: TemplateMo");

let subfooterul = createElement("ul","footer-ul");

let arryli = ["<i class='fa'>&#xf09a;</i>","<i class='fa'>&#xf099;</i>", "<i class='fa'>&#xf0e1;</i>","<i class='fa'>&#xf1b4;</i>"];

for (i=0; i< arryli.length; i++){
	let subfooterli = createElement("li");
	    subfooterli.innerHTML = arryli[i];
		subfooterul.appendChild(subfooterli)
}

subfooterdiv1.append(subfooterpara,subfooterem,subfooterul)

footermaindiv.append(footerdiv1,footerdiv2,footerdiv3,footerdiv4,subfooterdiv1);

footersection.appendChild(footermaindiv);