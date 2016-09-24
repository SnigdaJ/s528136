$("#gt").click(function(evt){
            evt.preventDefault();
             var a = 0;
             var a1=0;
            var b = 0;
            var b1=0;
            var c = 0;
            var c1=0;
            var d = 0;
            var d1=0;
            var e = 0;
            var e1 = 0;
            var f = 0;
            var f1 = 0;
            var g = 0;
            var g1 = 0;
            var h = 0;
            var h1 = 0;
            var i = 0;
            
            var j = 0;
           
           if ($('#cbx1').is(":checked"))
             { 
                 a = parseFloat($("#cbkx1").val(), 10);
                a1 = parseFloat($("#quan").val(), 10);
                var a=a*a1; 
             }
            if ($('#cbx2').is(":checked")) {
                b = parseFloat($("#cbkx2").val(), 10);
                b1 = parseFloat($("#quan1").val(), 10);
                var b=b*b1; 
            }
            if ($('#cbx3').is(":checked")) {
                c = parseFloat($("#cbkx4").val(), 10);
                c1 = parseFloat($("#quan2").val(), 10);
                var c=c*c1;  
            }
            if ($('#cbx4').is(":checked")) {
               d = parseFloat($("#cbkx4").val(), 10);
               d1 = parseFloat($("#quan3").val(), 10);
                var d=d*d1; 
                 
            }
            if ($('#cbkx1').is(":checked")) {
                e = parseFloat($("#cbkx1").val(), 10);
                e1 = parseFloat($("#quan4").val(), 10);
                var e=e*e1;
            }
            if ($('#cbkx2').is(":checked")) {
                f = parseFloat($("#cbkx2").val(), 10);
                f1 = parseFloat($("#quan5").val(), 10);
                var f=f*f1;
            }
            if ($('#cbkx3').is(":checked")) {
                g = parseFloat($("#cbkx4").val(), 10);
                g1 = parseFloat($("#quan6").val(), 10);
                var g=g*g1;
            }
            if ($('#cbkx4').is(":checked")) {
               h= parseFloat($("#cbkx4").val(), 10);
               h1 = parseFloat($("#quan7").val(), 10);
                var h=h*h1;
            }
            if ($('#cbd').is(":checked")) {
                 alert("Dropping charges cost 5$ extra");
               i= parseFloat($("#cbd").val(), 10);
              
            }
            if ($('#cbd1').is(":checked")) {
               j= parseFloat($("#cbd1").val(), 10);
              
            }
           

            var total =  a + b + c + d+ e+ f+ g+ h+ i+ j;
            var tax=total*0.02+total;
            if(tax>0)
            {

            $('#grandtotal').val('$' + tax.toFixed(2));
        }
        else
        {
            return "negative values";
        }
    });


$("#mcd").change(function(evt){
    // alert("mcd triggered");
    if ($("[name=rst").is(":checked"))
        $("#mcdMnu").css("display","block");
    else
        $("#mcdMnu").css("display","none");
});
$("#kfc").change(function(evt){
    // alert("mcd triggered");
    if ($("[name=rst").is(":checked"))
        $("#kfcMnu").css("display","block");
    else
        $("#kfcMnu").css("display","none");
});


