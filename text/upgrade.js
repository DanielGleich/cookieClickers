class Upgrade{

	constructor(name,price,clickValue,timeValue,count) {
		this.name = name;
		this.price = price;
		this.clickValue = clickValue;
		this.timeValue = timeValue;
		this.count = 0;
	}
	view(){
		document.getElementById("shopContent").innerHTML += buildButton(this.name,this.price,this.clickValue,this.timeValue,this.count);
		this.addClickListener();
	}
	updateView(){
		document.getElementById(this.name+"_shopItem").innerHTML = buildButton(this.name,this.price,this.clickValue,this.timeValue,this.count);
	}

	buy(){
		if (globalCookieCount >= this.price)
		{
			globalCookieCount -= this.price;
			globalClickValue += this.clickValue;
			this.count++;
			printCookieCount();
			this.updateView();
		} 
	}

	addClickListener(){
		var temp = document.getElementById(this.name+"_shopItem").firstChild;
		temp.addEventListener("click",function () {this.buy();})
	}
}
var upgrades = new Array;
upgrades[0] = new Upgrade("test",1,1,1);
upgrades[1] = new Upgrade("test2",2,2,2);