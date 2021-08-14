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
			globalClickValue += Math.ceil(element.clickValue * element.count);
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
		console.log(Math.ceil(this.timeValue*this.count));
		globalCookieCount += Math.ceil(this.timeValue*this.count)
	}
}
var upgrades = new Array;
upgrades[0] = new Upgrade(0, "Baker",1,1.7,1,1.2);
upgrades[1] = new Upgrade(1, "Cookie oven",2,1.8,2,2,2,1.75);

setInterval( function() {
	for(var i = 0; i < upgrades.length; i++) 
		upgrades[i].addTimeValue();
	printCookieCount()
}, 1000);