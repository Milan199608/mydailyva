function add_to_cart(a, b, c, d) {
    $("#" + d).html('<a href="javascript:void(0);" class="addedtocart"></a>'), $.ajax({
        type: "POST",
        url: "ajax/ajax.php",
        data: {
            from: "addtocart",
            package_id: a,
            quantity: b,
            operation: c
        }
    }).done(function(a) {
        "false" != $.trim(a) ? ($("#" + d).html('<a href="javascript:void(0);" class="addedtocart" title="Package added to cart" alt="Package added to cart"></a>'), "cartBlock" == document.getElementById("CartId").className && (document.getElementById("CartId").className = "cartFullBlock"), document.getElementById("CartLinkId").innerHTML = "My Cart (" + $.trim(a) + ")") : alert("Please try again.")
    })
}

function add_to_cart_with_addon(a, b, c) {
	var serpackweek='';
	if(document.getElementById("serpackweek")!=null){
		serpackweek=document.getElementById("serpackweek").value;
	}
	
    var d = "url";
    "null" != document.getElementById("gettype") && (d = document.getElementById("gettype").value);
    var e = 1,
        f = new Array;
    if ("null" != document.getElementById(c)) {
        var g = document.getElementById(c).value;
        "" == g ? e = 0 : f[0] = g
    }
    if (1 == e) {
        var h = document.getElementById("addoncountid").value,
            i = new Array;
        if (h > 0)
            for (var j = 0, k = 0; k < h; k++) 1 == document.getElementById("addonid" + k).checked && (i[j] = document.getElementById("addonid" + k).value, j++);
        $.ajax({
            type: "POST",
            url: "ajax/ajax.php",
            data: {
                from: "addtocartwithaddon",
                package_id: a,
                quantity: b,
                website_url: f,
                addOnArr: i,
				serpackweek:serpackweek
            }
        }).done(function(a) {
            //"false" != $.trim(a) ? location.href = "cart.php" : alert("Please try again.")
			if($.trim(a)!='false')
			 {
				var spl=$.trim(a).split('##');
				
				/*dataLayer.push({
					 'event': 'gtm.addtocartCustom',
					 'content_type': 'product',
					 'content_ids': [spl[0]],
					 'value': spl[1],
					 'currency':'USD'
					 });*/
				
				
				location.href = "cart.php";
			 }
			 else
			 {
				alert("Please try again.");
			 }
        })
    } else "keywords" == d ? alert("Please enter your keyword.") : alert("Please enter your working url.")
}

function update_website_url(a, b, c, d, e) {
    var f = document.getElementById(a).value,
        g = "url";
    if ("null" != document.getElementById("gettype" + c) && (g = document.getElementById("gettype" + c).value), "" == f) "url" == g ? alert("Please enter your working url.") : alert("Please enter your keywords.");
    else {
        var h = f.split(":");
        if ("http" != h[0] || "https" != h[0]);
        document.getElementById(d).style.visibility = "visible", $.ajax({
            type: "POST",
            url: "ajax/ajax.php",
            data: {
                from: "updatecarturl",
                wurl: f,
                cart_array_pos: c,
                website_url_array_pos: b
            }
        }).done(function(a) {
            "false" != $.trim(a) ? document.getElementById(d).style.visibility = "hidden" : alert("Please try again.")
        })
    }
}

function update_cart(a, b, c, d, e, f, g) {
    document.getElementById(f).style.visibility = "visible", $.ajax({
        type: "POST",
        url: "ajax/ajax.php",
        data: {
            from: "updatecart",
            package_id: a,
            quantity: b,
            pos: e,
            packagetype: c,
            packagename: d
        }
    }).done(function(a) {
        "false" != $.trim(a) ? view_cart_data(f, g) : alert("Please try again.")
    })
}

function delete_from_cart(a, b, c) {
    1 == window.confirm("Do you want to remove added package from cart?") && (document.getElementById(b).style.visibility = "visible", $.ajax({
        type: "POST",
        url: "ajax/ajax.php",
        data: {
            from: "deletefromcart",
            pos: a
        }
    }).done(function(a) {
        "false" != $.trim(a) ? view_cart_data(b, c) : alert("Please try again.")
    }))
}

function view_cart_data(a, b) {
    $.ajax({
        type: "POST",
        url: "ajax/ajax.php",
        data: {
            from: "viewcartdata",
            fromwhere: b
        }
    }).done(function(b) {
        "false" != $.trim(b) ? (document.getElementById(a).style.visibility = "hidden", $("#cartid").html(b)) : alert("Please try again.")
    })
}

function ajax_username_check_availibility() {
    var a = document.getElementById("username").value;
    "" != a ? $.ajax({
        type: "POST",
        url: "ajax/ajax.php",
        data: {
            from: "checkuseravailibility",
            username: a
        }
    }).done(function(a) {
        "false" != $.trim(a) ? alert(a) : alert("Please try again.")
    }) : alert("Please enter username first.")
}

function js_ajax_special_package(a) {
    $.ajax({
        type: "POST",
        url: "ajax/ajax.php",
        data: {
            from: "addspecialpackage",
            package: a
        }
    }).done(function(a) {
        "false" != $.trim(a) ? location.href = "cart.php" : alert("Please try again.")
    })
}

/*function fn_add_ajax_coupon_code(a, b) {
    var c = document.getElementById("coupon_code").value;
    "" == c ? alert("Please enter coupon code.") : $.ajax({
        type: "POST",
        url: "ajax/ajax.php",
        data: {
            from: "addcouponcode",
            coupon_code: c
        }
    }).done(function(c) {alert(c);
        "false" != $.trim(c) ? "W" == $.trim(c) ? (alert("You have enter wrong coupon code.\nPlease try agian."), document.getElementById("coupon_code").value = "", document.getElementById("coupon_code").focus()) : "E" == $.trim(c) ? (alert("Your entered coupon code is expired.\nPlease try agian."), document.getElementById("coupon_code").value = "", document.getElementById("coupon_code").focus()) : "S" == $.trim(c) && view_cart_data(b, a) : alert("Please try again.")
    })
}*/
function fn_add_ajax_coupon_code(from, couponcodeloaderid) {
	var coupon_code=$('#coupon_code').val();
	$.ajax({
	  type: "POST",
	   url: "ajax/ajax.php",
	  data: { from:'addcouponcode',coupon_code:coupon_code}
	}).done(function( data ) {//alert(data);
		 if($.trim(data)!='false')
		 {
			 if(data.search('##error')==-1){
				//document.getElementById('cartdivtable').innerHTML=data;
				//updateminicart(root_url);
				alert("Coupan code sucessfully applied");
				view_cart_data(couponcodeloaderid,from);
			 }
			 else
			 {
				 err =data.split('##');
				 //$('#coupanalermsg').show().html(err[0]);
				 alert(err[0]);
				 document.getElementById("coupon_code").value = "";
				 document.getElementById("coupon_code").focus();
				 //view_cart_data(err[0],frm);	
			 }
		 }
		 else
		 {
			alert("Please try again.");
		 }
	});
}


function js_ajax_add_confidential_data(a) {
    var b = document.getElementById("confidentialnotes").value;
    "" == b ? (alert("Please enter confidential data."), document.getElementById("confidentialnotes").focus()) : (document.getElementById("ConfidentialLoaderId").style.visibility = "visible", $.ajax({
        type: "POST",
        url: "ajax/ajax.php",
        data: {
            from: "addconfidentialdata",
            customer_id: a,
            confidentialnotes: b
        }
    }).done(function(b) {
        "false" != $.trim(b) ? (document.getElementById("ConfidentialLoaderId").style.visibility = "hidden", document.getElementById("confidentialnotes").value = "", view_confidential_data(a)) : alert("Please try again.")
    }))
}

function js_ajax_update_confidential_data(a, b, c) {
    var d = document.getElementById("editconfidentialnotes").value;
    "" == d ? (alert("Please enter confidential data."), document.getElementById("editconfidentialnotes").focus()) : (document.getElementById("ConfidentialUpdateLoaderId").style.visibility = "visible", $.ajax({
        type: "POST",
        url: "ajax/ajax.php",
        data: {
            from: "updateconfidentialdata",
            customer_id: a,
            confidential_id: b,
            confidentialnotes: d
        }
    }).done(function(b) {
        "false" != $.trim(b) ? (document.getElementById("ConfidentialUpdateLoaderId").style.visibility = "hidden", document.getElementById("editconfidentialnotes").value = "", fn_close(c), view_confidential_data(a)) : alert("Please try again.")
    }))
}

function edit_confidential_data(a, b) {
    var c = "#dialog_medium",
        d = $(document).height(),
        e = $(window).width();
    $("#mask").css({
        width: e,
        height: d
    }), $("#mask").fadeIn(1e3), $("#mask").fadeTo("slow", .8), $(c).fadeIn(2e3), $.ajax({
        type: "POST",
        url: "ajax/ajax.php",
        data: {
            from: "editconfidentialdata",
            confidential_id: a,
            customer_id: b
        }
    }).done(function(a) {
        "false" != $.trim(a) ? $(c).html(a) : alert("Please try again.")
    })
}

function remove_confidential_data(a, b) {
    1 == window.confirm("Do you want to remove your confidential details?\nThis operation cannot be undone.") && $.ajax({
        type: "POST",
        url: "ajax/ajax.php",
        data: {
            from: "removeconfidentialdata",
            confidential_id: a,
            customer_id: b
        }
    }).done(function(a) {
        "false" != $.trim(a) ? view_confidential_data(b) : alert("Please try again.")
    })
}

function view_confidential_data(a) {
    $.ajax({
        type: "POST",
        url: "ajax/ajax.php",
        data: {
            from: "viewconfidentialdata",
            customer_id: a
        }
    }).done(function(a) {
        "false" != $.trim(a) ? $("#ConfidentialId").html(a) : alert("Please try again.")
    })
}

function fn_close(a) {
    a.preventDefault(), $("#mask").hide(), $(".window").hide()
}

function js_ajax_put_template_message_to_editor_for_front(a) {
    var b = document.getElementById("email_template").value;
    "" != b && $.ajax({
        type: "POST",
        url: a + "ajax/jquery.ajax.php",
        data: {
            from: "getemailtemplate",
            email_template: b
        }
    }).done(function(a) {
        if ("false" != $.trim(a)) {
            var b = FCKeditorAPI.GetInstance("message");
            b.SetHTML(a)
        } else alert("Please try agian.")
    })
}
jQuery(document).ready(function(a) {
    function f() {
        a("#slider ul").animate({
            left: +c
        }, 6e3, function() {
            a("#slider ul li:last-child").prependTo("#slider ul"), a("#slider ul").css("left", "")
        })
    }

    function g() {
        a("#slider ul").animate({
            left: -c
        }, 6e3, function() {
            a("#slider ul li:first-child").appendTo("#slider ul"), a("#slider ul").css("left", "")
        })
    }
    setInterval(function() {
        g()
    }, 6e3);
    var b = a("#slider ul li").length,
        c = a("#slider ul li").width(),
        d = a("#slider ul li").height(),
        e = b * c;
    a("#slider").css({
        width: c,
        height: d
    }), a("#slider ul").css({
        width: e,
        marginLeft: -c
    }), a("#slider ul li:last-child").prependTo("#slider ul"), a("a.control_prev").click(function() {
        f()
    }), a("a.control_next").click(function() {
        g()
    })
});






function add_to_cart_reorder_n(product_id,b,website_url1,url,addons,ty,du){
	var serpackweek='';
	if(ty='serpackweek'){
		serpackweek=du;
	}
	var d = url;
	var addonsArr = new Array;
	 if(addons!=''){
	 	addonsArr=addons.split(',');
	 }
	 var weburl=Array(website_url1);
	$.ajax({
            type: "POST",
            url: "ajax/ajax.php",
            data: {
                from: "addtocartwithaddon",
                package_id: product_id,
                quantity: b,
                website_url: weburl,
                addOnArr:addonsArr,
				serpackweek:serpackweek
            }
        }).done(function(a) {
            //"false" != $.trim(a) ? location.href = "cart.php" : alert("Please try again.")
			if($.trim(a)!='false')
			 {
				var spl=$.trim(a).split('##');
				
				dataLayer.push({
					 'event': 'gtm.addtocartCustom',
					 'content_type': 'product',
					 'content_ids': [spl[0]],
					 'value': spl[1],
					 'currency':'USD'
					 });
				
				
				location.href = "cart.php";
			 }
			 else
			 {
				alert("Please try again.");
			 }
        })
}