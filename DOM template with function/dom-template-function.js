function createElement(tagName,className,html,attributes,eventhandler)
{	
	let element = document.createElement(tagName);
	if(className){
		element.className = className;
	}
	if(html){
		element.innerHTML = html
	}
	if(attributes?.length){
	//	console.log(attributes);
		for(let atr of attributes){
	//	console.log(atr); 
		let  {name,value} =atr
       element.setAttribute(name,value);
       	}
	}
	if(eventhandler?.length){
		//console.log(eventhandler)
	    for(item of eventhandler){
			let {name,vlaue} = item 
		element.addEventListener(item.name,item.value);
     //   console.log(item);		
		}	 
	 }
	
	return element
};

let header =createElement("div","header");
document.body.appendChild(header);

let menu =createElement("div", "menu");
header.appendChild(menu);

let logo = createElement("div","logo");

	let imageattr =
	[
		{
			name: "src",
			value: "images/logo.png",
		},
	
		{
			name:"alt",
			value:"logo",
		}

    ];

let image = createElement("img","logo-img","",imageattr);
logo.appendChild(image);

let ul = document.createElement("ul");

let arr = ["Home","Men's","Women's","Kid's","Pages","Features","Explore"];

 for (arrli of arr){
	let li = createElement("li");
    li.innerHTML = arrli
    ul.appendChild(li);	
 }

menu.append(logo,ul);

let maindiv = createElement("div","main-div");
document.body.appendChild(maindiv);

let sectiondiv  = createElement("div","secdiv");

let subsectiondiv = createElement("div","sub-section-div");
sectiondiv.appendChild(subsectiondiv);

let h1 = createElement("h1","","We Are Hexashop");

let para1 = createElement("p","", "Awesome,clean & creative HTML Template");

let Button = createElement("button","btn","Purchaes Now");

subsectiondiv.append(h1,para1,Button);


let collective = createElement("div","combo");


 let  womenmousevent = [
 
 {
	name:"mouseover",
    value:mouseOver,	
 },
 
 {
	name:"mouseout",
    value:mouseOut,	
 }
];

let womensectiondiv = createElement("div","women-section-div","","",womenmousevent);

let womenouterdiv = createElement("div","women-outerdiv");

let womenouterh1 = createElement("h1","","Women");

let womenouterpara = createElement("p","","Best Clothes For Women");

womenouterdiv.append(womenouterh1,womenouterpara)

let womenhoverdiv = createElement("div","women-hoverdiv");

let womeninerdiv = createElement("div","women-inerdiv");
 
let womeninerh1 = createElement("h2","","Women");

let womeninerbtn = createElement("button","women-inerbtn","Discover More");

womeninerdiv.append(womeninerh1,womeninerbtn);

womenhoverdiv.appendChild(womeninerdiv);
 

	womensectiondiv.addEventListener('mouseover', mouseOver)
		function mouseOver()
	{
		if(womenhoverdiv.style.display!== "block")	
		womenhoverdiv.style.display = "block"
	}
 
	womensectiondiv.addEventListener('mouseout', mouseOut)
		function mouseOut()
	{
		womenhoverdiv.style.display = "none";
	}
	
womensectiondiv.append(womenouterdiv,womenhoverdiv);


let  menmousevent = [
 
 {
	name:"mouseover",
    value:mouSeOver,	
 },
 
 {
	name:"mouseout",
    value:mouSeOut,	
 }
];

let mensectiondiv =createElement("div", "men-section-div","","",menmousevent);

let outermendiv = createElement("div","outermendiv");

let outermenh1 = createElement("h1","","Men");

let outermenpara = createElement("p","", "Best Clothes For Men");

outermendiv.append(outermenh1,outermenpara)

let hovermendiv = createElement("div","hovermendiv");

let inermendiv = createElement("div","inermendiv");
  
let inermenh1 = createElement("h2","", "Men");

let inermenbtn = createElement("button","inermenbtn","Discover More");

inermendiv.append(inermenh1,inermenbtn);

hovermendiv.appendChild(inermendiv);

mensectiondiv.addEventListener('mouseover',mouSeOver) 
 
 function mouSeOver()
	{
		if(hovermendiv.style.display!== "block")	
		hovermendiv.style.display = "block"
	}
 
    mensectiondiv.addEventListener('mouseout',mouseOut)
	
	function mouSeOut()
	{
		hovermendiv.style.display = "none";
	} 

mensectiondiv.append(outermendiv,hovermendiv); 


let  kidsmousevent = [
 
 {
	name:"mouseover",
    value:mouSeover,	
 },
 
 {
	name:"mouseout",
    value:mouSeout,	
 }
];

let kidssectiondiv = createElement("div","kids","","",kidsmousevent);

let outerkidsdiv = createElement("div","outerkidsdiv")

let outerkidsh1 =createElement("h1","", "Kids");

let outerkidspara = createElement("p","","Best Clothes For Kids");

outerkidsdiv.append(outerkidsh1,outerkidspara)

let hoverkidsdiv = createElement("div","hoverkidsdiv");

let inerkidsdiv = createElement("div","inerkidsdiv");
  
let inerkidsh1 = createElement("h2","","Kids");

let inerkidsbtn = createElement("button","inerkidsbtn","Discover More");

inerkidsdiv.append(inerkidsh1,inerkidsbtn);

hoverkidsdiv.appendChild(inerkidsdiv);

	kidssectiondiv.addEventListener('mouseover', mouSeover)

	function mouSeover()

	{
		if(hoverkidsdiv.style.display!== "block")	
		hoverkidsdiv.style.display = "block"
	}
	
	kidssectiondiv.addEventListener('mouseout', mouSeout)
 
    function mouSeout()
 
	{
		hoverkidsdiv.style.display = "none";
	} 

kidssectiondiv.append(outerkidsdiv,hoverkidsdiv);


let  acesorymousevent = [
 
 {
	name:"mouseover",
    value:mouseoVer,	
 },
 
 {
	name:"mouseout",
    value:mouseoUt,	
 }
];

let acesorydiv = createElement("div","acesorydiv","","",acesorymousevent);

let outeracesorydiv = createElement("div","outeracesorydiv");

let outeracesoryh1 = createElement("h1","","Accessories");

let outeracesorypara = createElement("p","", "Best Clothes For Accessories");

outeracesorydiv.append(outeracesoryh1,outeracesorypara)

let hoveracesorydiv = createElement("div","hoveracesorydiv");

let ineracesorydiv = createElement("div","ineracesorydiv" );
 
let ineracesoryh1 = createElement("h2","","Accessories");

let ineracesorybtn = createElement("button","ineracesorybtn","Discover More");

ineracesorydiv.append(ineracesoryh1,ineracesorybtn);

hoveracesorydiv.appendChild(ineracesorydiv);

	acesorydiv.addEventListener('mouseover',mouseoVer)
	
	function mouseoVer()
	{
		if(hoveracesorydiv.style.display!== "block")	
		hoveracesorydiv.style.display = "block"
	}


	acesorydiv.addEventListener('mouseout', mouseoUt)
    function mouseoUt()	
	{	
		hoveracesorydiv.style.display = "none";
	} 

acesorydiv.append(outeracesorydiv,hoveracesorydiv); 

collective.append(womensectiondiv,mensectiondiv,kidssectiondiv,acesorydiv); 

maindiv.append(sectiondiv,collective); 