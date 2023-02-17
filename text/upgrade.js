class Upgrade{
	constructor(id, name, price, priceFactor, clickValue, clickIncr, timeValue = 0, timeIncr = 0, count = 0) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.priceFactor = priceFactor;
		this.clickValue = clickValue;
		this.clickIncr = clickIncr;
		this.timeValue = timeValue;
		this.timeIncr = timeIncr;
		this.count = 0;
		this.element = document.createElement("tr");
		this.element.classList.add("shopItem");
		var col;

		col = document.createElement("td");
		col.innerText = name;
		this.element.appendChild(col);
		
		col = document.createElement("td");
		col.innerText = price;
		this.element.appendChild(col);
		
		col = document.createElement("td");
		col.innerText = clickValue;
		this.element.appendChild(col);
		
		col = document.createElement("td");
		col.innerText = timeValue;
		this.element.appendChild(col);
		
		col = document.createElement("td");
		col.innerText = this.count;
		this.element.appendChild(col);
	}
	
	static getShopItemById( id ) {
		return upgrades[id];
	}		
	
	initButton(){
		document.querySelector("#shopContent").appendChild(this.element);
		this.addClickListener();
		this.updateView();
	}
	
	updateView(){
		this.element.childNodes[1].innerText = this.price; 
		this.element.childNodes[2].innerText = this.count == 0 ? 0 : this.clickValue * this.count;
		this.element.childNodes[3].innerText = this.count == 0 ? 0 : this.timeValue *  this.count;
		this.element.childNodes[4].innerText = this.count; 
	}

	static buy( id ){
		var element = Upgrade.getShopItemById(id);
		if (globalCookieCount >= element.price)
		{
			globalCookieCount -= element.price;
			globalClickValue += Math.ceil(element.clickValue);
			element.count++;
			element.price = Math.ceil(element.price * element.priceFactor);
			
			printCookieCount();
			element.updateView();
		} 
	}

	addClickListener(){
		var id = this.id;
		this.element.firstChild.addEventListener("click", function() {Upgrade.buy(id)});
	}
	
	addTimeValue(){
		// console.log(Math.ceil(this.timeValue*this.count));
		globalCookieCount += Math.ceil(this.timeValue*this.count)
	}
}
var upgrades = new Array;
//						  id  name            price   pfactor cvalue cIncr timeVal timeIncr
upgrades[0] = new Upgrade(0, "Cursor",			1,		1.005,	2,	2);
upgrades[1] = new Upgrade(1, "Baker",			2,		1.01,	3,	1.25,	1,		1.01);
upgrades[2] = new Upgrade(2, "Oven",			10,		1.015,	5,	1.45,	1.2,	1.2);
upgrades[3] = new Upgrade(3, "Cookie air drop",	200,	1.03,	7,	1.6,	1.4,	1.35);
upgrades[4] = new Upgrade(4, "Fabric",			500,	1.2,	9,	1.8,	1.8,	1.6);
upgrades[5] = new Upgrade(5, "Cookie river",	1000,	1.45,	12,	2,		2,		1.8);
upgrades[6] = new Upgrade(6, "Cookie country",	5000,	1.75,	15,	3,		5,		2.5);
upgrades[7] = new Upgrade(7, "Cookie empire",	10000,	2,		19,	5,		10,		5);
setInterval( function() {
	for(var i = 0; i < upgrades.length; i++) 
		upgrades[i].addTimeValue();
	printCookieCount()
}, 1000);