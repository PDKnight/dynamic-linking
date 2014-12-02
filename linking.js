/************** LINKING WITH XMLHTTPREQUEST BY PDKNIGHT ****************/

var def = { //nepouzijem default, ale def, lebo by to hadzalo chyby
	website: "novinky.html",
	websiteHeadline: "Novinky",
	websiteElement: ".html-content",
	headlineElement: ".news .headline",
};
var websites_headline_names = {
	"novinky.html": "Novinky",
	"galeria.html": "Galeria",
};


var loc = window.location.href;



var decode_url_by_hash = loc.split("/#")[loc.split("#").length-1];

if(decode_url_by_hash != loc){

	def.website = decode_url_by_hash + ".html";
	def.websiteHeadline = websites_headline_names[def.website];
}



	link(def.website,
	 def.websiteHeadline,
	 def.websiteElement,
	 def.headlineElement, (decode_url_by_hash == loc));



function link(source, headlineText, elem, headline, skuska){

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			
			$(elem).css("opacity", "0");


			if(skuska !== null && skuska != false){

				var hash_url = source.split(".")[source.split(".").length-2].split("/")[source.split(".")[source.split(".").length-2].split("/").length-1];
				window.location = "#" + hash_url;
			}


			setTimeout(function(){
				$(elem).html(xhr.responseText);
				$(elem).css("opacity", "1");

				if(headline !== null){
					$(headline).html(headlineText);
				}

			},700);

		}
	}
	xhr.open('GET', source, true);
	xhr.send(null);
}
