var cookie = document.getElementById("cookie");
cookie.addEventListener("click", function() {cookieClick();} );

var globalCookieCount= 0;
var globalClickValue= 1;


function cookieClick()
{
	addCookie(globalClickValue);
	printCookieCount();
}

function addCookie( value )
{
	globalCookieCount += value;
}

function printCookieCount()
{
	document.getElementById("cookieCount").innerHTML = globalCookieCount == 1 ? "1 Cookie" : globalCookieCount + " Cookies";
}

function buildButton(name, price, clickValue,timeValue,count)
{
	var text = "";
	text = "<tr id='"+name+"_shopItem'><td class='shopItem'>"+name+"</td><td class='shopItemPrice'>"+price+" cookies</td><td class='shopItemClickValue'>+"
	+clickValue+ (clickValue == 1 ? " cookie" : " cookies")
	+"</td><td class='shopItemTimeValue'>+"+timeValue+ (timeValue == 1 ? " cookie" : " cookies")+"</td>"
	+ "<td class='shopItemCount'>"+count+"</td></tr>";
	return text;
}

function printAllShopItems()
{
	for (var i = 0; i < upgrades.length; i++) {
		upgrades[i].view()	
	}
}