$("#reset").click(function(){
    document.querySelector("#ok").reset();
})


$("#submit").click(function(event){
    event.preventDefault();
    pin = $("#pincode").val();
    date =$("#date").val();
    var link = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode="+pin+"&date="+date;
    console.log("your search link api : ")
    console.log(link);

    $.get(link, {name:'link'}, function (data) {
        // print data in table here

        var len = data.centers.length; 
        
        console.log(data.centers)

        // displaying data printing
       

        for(let i=0;i<len;i++){
            for(j = 0 ; j < data.centers[i].sessions.length ; j++){
                document.getElementById("table").insertRow(-1).innerHTML = '<td>'+data.centers[i].center_id+'</td><td>'+data.centers[i].name+'</td><td>'+data.centers[i].fee_type+'</td><td>'+data.centers[i].address+'</td><td>'+data.centers[i].sessions[j].vaccine+'</td><td>'+data.centers[i].sessions[j].available_capacity_dose1+'</td><td>'+data.centers[i].sessions[j].available_capacity_dose2+'</td>';
            }
        
        }
   

    });
    
})

