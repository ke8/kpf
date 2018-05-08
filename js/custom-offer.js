
var discountv = 0.2;


$(document).ready(function(){


  "use strict";
    var $target;
    //===============Mobile Nav Function============
    $('#menu').on('click', function() { 
            $('.navigation').slideToggle();
    })

    $(".zoneswitch").click(function(){
      newprices(this.id);
    });
    
    $("#bookrep").click(function(){
      $.ajax({
        method: "POST",
        url: "sendmail.php",
        data: { 
          names: $("#names").val(), mobile: $("#mobile").val(),
          email: $("#email").val(), device: $("#device").val(),
          zone: $("#zone").val()
        }
      }).done(function( msg ) {
        if(msg == "Y"){
          $("#response").html('<div class="alert alert-success alert-dismissible fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <strong>Thanks!</strong> We will be in touch with you as soon as we can! Keep checking your texts and emails (including junk mail folder)</div>');
        }else{
          $("#response").html('<div class="alert alert-danger alert-dismissible fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <strong>We may have a problem!</strong> Please send your details to <strong>info@KasPhoneFix.co.uk</strong></div>');
        }
      });
    });

});







	$('a[data-rel^="#"]').on('click.smoothscroll',function (e) {	
    e.preventDefault();    
    var target = $(this).attr("data-rel");
        $target = $(target);
    goto=parseInt($target.offset().top)-parseInt(62)
    $('html, body').stop().animate({
        'scrollTop': goto
    }, 1000, 'swing', function () {
       
    });
});


$(window).load(function() {
	$('#loader-wrapper').delay(500).fadeOut();
});





function newprices(zonebtn){

  var i4= 35;
  var i5= 40;
  var i6= 50;
  var i6p= 60;
  var i6s= 80;
  var i6sp= 90;
  var ise= 50;
  var ip1= 60;
  var ip2to4= 55;
  var ipm1to3= 60;
  var ipa1= 60;

  switch(zonebtn){
    case "z1btn": var zn= 5; break;
    case "z2btn": var zn= 8; break;
    case "z3btn": var zn= 12; break;
  }

  $("#i4").html(discount(parseInt(i4+zn)));
  $("#i5").html(discount(parseInt(i5+zn)));
  $("#i6").html(discount(parseInt(i6+zn))+" / "+discount(parseInt(i6p+zn)));
  $("#i6s").html(discount(parseInt(i6s+zn))+" / "+discount(parseInt(i6sp+zn)));
  $("#ise").html(discount(parseInt(ise+zn)));
  $("#ip").html(discount(parseInt(ip1+zn))+" / "+discount(parseInt(ip2to4+zn)));
  $("#im").html(discount(parseInt(ipm1to3+zn))+" / £ ENQUIRE");
  $("#ia").html(discount(parseInt(ipa1+zn))+" / £ ENQUIRE");

}

  function discount(num){
    if(discountv >= 0.1 && discountv <= 0.5){
      var disc= num - (num * 0.2);
      $("#i4,#i5,#i6,#i6s,#ise,#ip,#im,#ia").css({color : "#ff0000"});
      return "£"+disc.toFixed(2)+"<strike>£"+num.toFixed(2)+"</strike>";
    }
  }


var westhoughton=new google.maps.LatLng(53.5490, -2.5259);

function initialize(){
    var mapProp = {
      center:westhoughton,
      zoom:10,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),mapProp);
    var radius1 = new google.maps.Circle({
      center:westhoughton,
      radius:24140,
      strokeColor:"#0006FF",
      strokeOpacity:0.1,
      strokeWeight:1,
      fillColor:"#0006FF",
      fillOpacity:0.15
    });
    var radius2 = new google.maps.Circle({
      center:westhoughton,
      radius:16093,
      strokeColor:"#00FF60",
      strokeOpacity:0.1,
      strokeWeight:1,
      fillColor:"#00FF60",
      fillOpacity:0.15
    });
    var radius3 = new google.maps.Circle({
      center:westhoughton,
      radius:8046,
      strokeColor:"#FF6000",
      strokeOpacity:0.1,
      strokeWeight:1,
      fillColor:"#FF6000",
      fillOpacity:0.15
    });
    radius1.setMap(map);
    radius2.setMap(map);
    radius3.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize());