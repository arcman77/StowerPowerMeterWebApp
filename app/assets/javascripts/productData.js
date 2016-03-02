var soloarProducts = [["1","http://ecx.images-amazon.com/images/I/41sIHAuv8mL._SL160_SL150_.jpg","X-DRAGON-Sunpower-Technology-Smartphones-Foldable","4.4","119.99"],
["2","http://ecx.images-amazon.com/images/I/61j9jSyi%2BTL._SL160_SL150_.jpg","Innoo-Tech-Waterproof-Dust-Proof-Shock-Resistant","4.2","47.99"],
["3","http://ecx.images-amazon.com/images/I/51OZMJUayYL._SL160_SL150_.jpg","Charger-Matone%C2%AE-Portable-10000mAh-Shockproof","4.9","59.99"],
["4","http://ecx.images-amazon.com/images/I/51GxWE58XNL._SL160_SL150_.jpg","Anker-2-Port-Charger-PowerPort-iPhone","4.5","99.99"],
["5","http://ecx.images-amazon.com/images/I/41NCQe9PUXL._SL160_SL150_.jpg","Cozypony-Dual-Port-Foldable-Portable-Smartphones","4.9","69.99"],
["6","http://ecx.images-amazon.com/images/I/41OzKG69OOL._SL160_SL150_.jpg","RAVPower-Charger-Foldable-Portable-Technology","4.6","79.99"],
["7","http://ecx.images-amazon.com/images/I/41NGGatWWQL._SL160_SL150_.jpg","Cozypony-Dual-port-Efficiency-Portable-Activities","4.9","159.99"],
["8","http://ecx.images-amazon.com/images/I/51oh%2BDv-EJL._SL160_SL150_.jpg","10000mah-Portable-External-Smartphones-Devices-Orange","4","69.98"],
["9","http://ecx.images-amazon.com/images/I/51V5sOq575L._SL160_SL150_.jpg","External-Portable-12000mAh-Carabiner-Emergency-Cell","4.6","69.99"],
["10","http://ecx.images-amazon.com/images/I/41VWbbhETmL._SL160_SL150_.jpg","Nekteck-12000mAh-Rain-resistant-Shockproof-Supported","4.2","99.99"],
["11","http://ecx.images-amazon.com/images/I/61vqW-AJvuL._SL160_SL150_.jpg","15000mah-Flashlight-Hallomall-Portable-External","4","79.99"],
["12","http://ecx.images-amazon.com/images/I/61u7xdGETDL._SL160_SL150_.jpg","X-DRAGON-Charger-10000mAh-Portable-Shockproof","3.7","59.99"],
["13","http://ecx.images-amazon.com/images/I/51bZOhfplQL._SL160_SL150_.jpg","Headlight-Comfortable-Hands-free-Rechargeable-Waterproof","4.5","79.99"],
["14","http://ecx.images-amazon.com/images/I/412RkB%2B5JPL._SL160_SL150_.jpg","Nekteck-Charger-2-Port-efficiency-devices","4.9","119.99"],
["15","http://ecx.images-amazon.com/images/I/51hByFpJKuL._SL160_SL150_.jpg","12000mAh-Portable-External-Cellphones-Emergency","4.4","69.99"],
["16","http://ecx.images-amazon.com/images/I/61jNaKzMxBL._SL160_SL150_.jpg","10000mAh-Flashlight-Function-Shockproof-Rain-proof","4.4","99.99"],
["17","http://ecx.images-amazon.com/images/I/41-gZiQZ%2BVL._SL160_SL150_.jpg","Aukey-Dual-Solar-Charger-Smartphones","4.8","69.99"],
["18","http://ecx.images-amazon.com/images/I/619X0JQCnqL._SL160_SL150_.jpg","10000mAh-Flashlight-Function-Shockproof-Rain-proof","4.4","99.99"],
["19","http://ecx.images-amazon.com/images/I/41D9uGXL1TL._SL160_SL150_.jpg","EasyAcc-15000mAh-External-Brilliant-Smartphones","4.6","99.99"],
["20","http://ecx.images-amazon.com/images/I/51kOdCF7iFL._SL160_SL150_.jpg","Danibos-Solar-Power-Garden-Fountain","3.8","26.98"]];

$(document).on('ready',function(){
  console.log('ready')
  if (window.location.href.split('/')[3] === 'store'){
      buildlistItems();

  }
});

function buildlistItems(){
  soloarProducts.forEach(function (itemArr){
    var options = {rank: itemArr[0], imageUrl: itemArr[1], title: itemArr[2], rating: itemArr[3], price: itemArr[4]};
    buildDiv(options);
  }); //end forEach
}

function buildDiv(options){
  //console.log(options.imageUrl)
 var div = '<div class="row"><div class="col-sm-12 col-lg-12 col-md-12 tap"><div class="thumbnail"><img src="'+options.imageUrl+'" alt=""><div class="caption"><h4><a class="product-title" onclick="onClick()" href="#">'+options.title+'</a><h4 class="pull-left">$'+options.price+'</h4></h4></div></div></div></div>';
 $('.container').append(div);
}
