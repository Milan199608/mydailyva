function change_servicereport_and_packgroup_price(packID,tabhead,gettype){
		var serpackweek=$('#serpackweek').val();
		var packprice=get_pack_report(serpackweek);
		$.ajax({
		  type: "POST",
		  url: "ajax/packgroup.php",
		  data: { from:'calculatepackpriceweekwise',serpackweek:serpackweek,packID:packID,tabhead:tabhead,gettype:gettype}
		}).done(function( data ) {
			 if($.trim(data)!='false')
			 {
				
				$('#servicereportforpack').html(packprice);
				$('#desktoptabn').html(data);
			 }
			 else
			 {
				alert("Please try again.");
			 }
		});	
}

function get_pack_report(serpackweek){
	var report=4;
	if(serpackweek==8){
		report=8;
	}
	else if(serpackweek==12){
		report=12;
	}
	else if(serpackweek==16){
		report=16;
	}
	else if(serpackweek==20){
		report=20;
	}
	else if(serpackweek==24){
		report=24;
	}
	return report;
}