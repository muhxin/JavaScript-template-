let mainheadingdiv = createElement("div","heading-div");
document.body.appendChild(mainheadingdiv);

let mainheading = createElement("h1","","Social Media");

let mainheadingpara = createElement("p","","Details to details is what makes Hexashop different from the other themes.");

mainheadingdiv.append(mainheading,mainheadingpara);

let divcontent = createElement("div","div-content");
document.body.appendChild(divcontent);

let outerdiv = createElement("div","outer-div");

let inerdiv1 = createElement("div","iner-div1");

let insidediv1 = createElement("div","inside-div1");

let inerdivheading1 = createElement("h1","", "Fashion");

let insidediv1fonts = createElement("li","","<i class='fa'>&#xf16d;</i>");

insidediv1.append(inerdivheading1,insidediv1fonts);

inerdiv1.appendChild(insidediv1);

let inerdiv2 = createElement("div","iner-div2");

let insidediv2 = createElement("div","inside-div2");

let inerdivheading2 = createElement("h1","","New");

let insidediv2fonts = createElement("li","","<i class='fa'>&#xf16d;</i>");

insidediv2.append(inerdivheading2,insidediv2fonts);

inerdiv2.appendChild(insidediv2);

let inerdiv3 = createElement("div","iner-div3");

let insidediv3 = createElement("div","inside-div3");

let inerdivheading3 = createElement("h1","","Brand");

let insidediv3fonts = createElement("li","","<i class='fa'>&#xf16d;</i>");

insidediv3.append(inerdivheading3,insidediv3fonts);

inerdiv3.appendChild(insidediv3);

let inerdiv4 = createElement("div","iner-div4");

let insidediv4 = createElement("div","inside-div4");

let inerdivheading4 = createElement("h1","","Makeup");

let insidediv4fonts = createElement("li","","<i class='fa'>&#xf16d;</i>");

insidediv4.append(inerdivheading4,insidediv4fonts);

inerdiv4.appendChild(insidediv4);

let inerdiv5 = createElement("div","iner-div5");

let insidediv5 = createElement("div","inside-div5");

let inerdivheading5 = createElement("h1" ,"","Leather");

let insidediv5fonts = createElement("li","","<i class='fa'>&#xf16d;</i>");

insidediv5.append(inerdivheading5,insidediv5fonts);

inerdiv5.appendChild(insidediv5);

let inerdiv6 = createElement ("div","iner-div6");

let insidediv6 = createElement("div","inside-div6");

let inerdivheading6 = createElement("h1","","Bag");

let insidediv6fonts = createElement("li","","<i class='fa'>&#xf16d;</i>");

insidediv6.append(inerdivheading6,insidediv6fonts);

inerdiv6.appendChild(insidediv6);

outerdiv.append(inerdiv1,inerdiv2,inerdiv3,inerdiv4,inerdiv5,inerdiv6);

divcontent.appendChild(outerdiv);



