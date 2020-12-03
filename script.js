// date and time
currentDayEl=(moment().format('LLLL'));
currentHour=(moment().format('HH'));
console.log(currentHour);
currentHourEl=currentHour.split(" ")
console.log(currentHour)

// APPEND JUMBOTRON currentDay& add <p> with date and time
$("#currentDay").append(`<p>${currentDayEl}</p>`);


// dev will chage color for future, pressent, past,
var taskLine="input-group mb-3";

function colorTask(a){
    

    var x=document.getElementsByClassName("input-group mb-3")[a];

    if (momentEl<=currentHour) {
        x.childNodes[3].style.backgroundColor ="#edc5dc";//pink
    };
     if (momentEl>=currentHour) {
        x.childNodes[3].style.backgroundColor ="#c4f2f5";//blue"
    };
     if (momentEl==currentHour){
        x.childNodes[3].style.backgroundColor ="#ccf5bf";//green
    };
};


$("#nine").on("click",function(event) {
    event.preventDefault();
  

    momentEl=9;
    colorTask(0)
    var input= document.getElementById("inputNine");
    var inputEl=input.value;
    var key=("09:00 AM");
    localStorage.setItem(key,inputEl);  
    localText(key,0);
    

});
$("#ten").on("click", function(event) {
    event.preventDefault();
    momentEl=10;
    colorTask(1)
    var input= document.getElementById("inputTen");
    var inputEl=input.value;
    var key=("10:00 AM");
    

        localStorage.setItem(key,inputEl);
        localText(key,1);
      

    
});
$("#eleven").on("click", function(event) {
    event.preventDefault();
    momentEl=11;
    colorTask(2)
var input= document.getElementById("inputEleven");
    var inputEl=input.value;
    var key=("11:00 AM");
    

        localStorage.setItem(key,inputEl);
        localText(key,2);
    
});
$("#twelve").on("click", function(event) {
    event.preventDefault();
    momentEl =12;
    colorTask(3)
var input= document.getElementById("inputTwelve");
    var inputEl=input.value;
    var key=("12:00 PM");
    

        localStorage.setItem(key,inputEl);
        localText(key,3);
    
});
$("#one").on("click", function(event) {
    event.preventDefault();
    momentEl =13
    colorTask(4)
var input= document.getElementById("inputOne");
    var inputEl=input.value;
    var key=("1:00 PM");

        localStorage.setItem(key,inputEl);
        localText(key,4);
    
});
$("#two").on("click", function(event) {
    event.preventDefault();
    momentEl =14;
    colorTask(5)
var input= document.getElementById("inputTwo");
    var inputEl=input.value;
    var key=("2:00 PM");

    

        localStorage.setItem(key,inputEl);
        localText(key,5);
    
});
$("#three").on("click", function(event) {
    event.preventDefault();
     momentEl =15;
    colorTask(6)
var input= document.getElementById("inputThree");
    var inputEl=input.value;
    var key=("3:00 PM");

    

        localStorage.setItem(key,inputEl);
        localText(key,6);
    
});
$("#four").on("click", function(event) {
    event.preventDefault();
    momentEl =16;
    colorTask(7)    
var input= document.getElementById("inputFour");
    var inputEl=input.value;
    var key=("4:00 PM");

    localStorage.setItem(key,inputEl);
    localText(key,7);
    
});
$("#five").on("click", function(event) {
    event.preventDefault();
    
    momentEl =17;
    colorTask(8)
var input= document.getElementById("inputFive");
    var inputEl=input.value;
    var key=("5:00 PM");

            localStorage.setItem(key,inputEl);
            localText(key,8);
    
});
$("#six").on("click", function(event) {
    event.preventDefault();
    momentEl =18;
    colorTask(9)
var input= document.getElementById("inputSix");
    var inputEl=input.value;
    var key=("6:00 PM");

            localStorage.setItem(key,inputEl);
            localText(key,9);
    
});
$("#seven").on("click", function(event) {
    event.preventDefault();
    
    momentEl =19;
    colorTask(10)
var input= document.getElementById("inputSeven");
    var inputEl=input.value;
    var key=("7:00 PM");

            localStorage.setItem(key,inputEl);
            localText(key,10);
    
});
$("#eight").on("click", function(event) {
    event.preventDefault();
    momentEl =20;
    colorTask(11)
var input= document.getElementById("inputEight");
    var inputEl=input.value;
    var key=("8:00 PM");

            localStorage.setItem(key,inputEl);
            localText(key,11);
    
});
$("#ninePm").on("click", function(event) {
    event.preventDefault();

    momentEl =21;
    colorTask(12)
var input= document.getElementById("inputNinePm");
    var inputEl=input.value;
    var key=("9:00 PM");

            localStorage.setItem(key,inputEl);
            localText(key,12);
        
        
    });
    
    // Get informatioin from storage and appned it to task bar
    function localText(a,b) {
        // array=[0,1,2,3]
        // for (var i = 0; i <array.le;++i){
        //   var spot=array[i]
            
        
        var local=(localStorage.getItem(a));
       
            
            var x=document.getElementsByClassName("form-control")[b];
         
            x.attributes[3].nodeValue=local;
        
       
       console.log(local)
    };
    
    localText("09:00 AM",0);
    localText("10:00 AM",1);
    localText("11:00 AM",2);
    localText("12:00 PM",3);
    localText("1:00 PM",4);
    localText("2:00 PM",5);
    localText("3:00 PM",6);
    localText("4:00 PM",7);
    localText("5:00 PM",8);
    localText("6:00 PM",9);
    localText("7:00 PM",10);
    localText("8:00 PM",11);
    localText("9:00 PM",12);

    
    // clear local storage
    $("#clear").on("click", function(event) {
        event.preventDefault();
        location.reload();
        localStorage.clear();
        
    });
    
   