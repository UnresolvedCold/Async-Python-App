
$(document).ready(function(){
    //connect to the socket server.
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');
    var numbers_received = [];
    var numbers2_received =[];

    //receive details from server
    socket.on('newnumber', function(msg) {
        console.log("Received number" + msg.number1+" "+msg.number2);
        //maintain a list of ten numbers
        if (numbers_received.length >= 10){
            numbers_received.shift()
        }     
        if (numbers2_received.length >= 10){
            numbers2_received.shift()
        }       
        numbers_received.push(msg.number1);
        numbers2_received.push(msg.number2);
        numbers_string = '';
        for (var i = 0; i < numbers_received.length; i++){
            numbers_string = '<p>' + numbers_received[i].toString()+ " "+numbers2_received[i].toString() + '</p>';
        }
        $('#log').html(numbers_string);
    });

});