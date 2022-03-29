let subscribe = createElement("div","subscribe-main-div");
document.body.appendChild(subscribe) 


let leftdiv = createElement("div","left-div");

let subleftdiv1 = createElement("div","sub-left-div1")

let subleftheading = createElement("h2","","By Subscribing To Our Newsletter You Can Get 30% Off");

let subleftpara = createElement("p","","Details to details is what makes Hexashop different from the other themes.");

subleftdiv1.append(subleftheading,subleftpara);

let subleftdiv2 = createElement ("div","sub-left-div2");

let inputattr1 = [
{
	name:"type",
	value:"text",
},
{
	name:"id",
	value:"name",
},
];

let leftinput1 = createElement("input","","",inputattr1);

let inputattr2 = [
{
	name:"type",
	value:"text",
},
{
	name:"id",
	value:"email",
},
];

let leftinput2 = createElement("input","","",inputattr2);


let subleftbutton = createElement("Button","left-btn","<i  class='fa'>&#xf1d8;</i>");

subleftdiv2.append(leftinput1,leftinput2,subleftbutton);
 
leftdiv.append(subleftdiv1,subleftdiv2);

let rightdiv = createElement("div","right-div");

let subrightdiv1 = createElement("div","sub-right-div1");

let subdiv1rightheading1 = createElement("h1","","Store Location:");

let subdiv1rightpara1  = createElement("p","","Sunny Isles Beach, FL 33160, United States");

let subdiv1rightheading2 = createElement("h1","","Phone:");

let subdiv1rightpara2  = createElement("p","","010-020-0340");

let subdiv1rightheading3 = createElement("h1","","Office Location:")

let subdiv1rightpara3 = createElement("p","","North Miami Beach");

subrightdiv1.append(subdiv1rightheading1,subdiv1rightpara1,subdiv1rightheading2,subdiv1rightpara2,
subdiv1rightheading3,subdiv1rightpara3);

let subrightdiv2 = createElement("div","sub-right-div2");

let subrightheading1 = createElement("h1","","Work Hours:");

let  subrightpara1 = createElement("p","","07:30 AM - 9:30 PM Daily");

let   subrightheading2 = createElement("h1","","Email:");

let  subrightpara2  = createElement("p","","info@company.com");

let   subrightheading3 = createElement("h1","","Social Media:");

let  subrightpara3 = createElement("p","","Facebook, Instagram, Behance, Linkedin");

subrightdiv2.append(subrightheading1,subrightpara1,subrightheading2,subrightpara2,
subrightheading3,subrightpara3);


rightdiv.append(subrightdiv1,subrightdiv2)

subscribe.append(leftdiv,rightdiv);

