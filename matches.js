
// write js code here corresponding to matches.html

var matchArr=JSON.parse(localStorage.getItem("schedule"));

displayData(matchArr)

var favoriteArr=JSON.parse(localStorage.getItem("favourites")|| []  ;
 
function displayData(data){
    data.forEach(function (elem){
        var tr =document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText=elem.matchN

        var td2 =document.createElementNS("td");
        td2.innerText=elem.forteamA;

        var td3=document.createElement("td");
        td3.innerText=elem.forteamB;

        var td4=document.createElement("td")
        td4.innerText=elem.tarikh;

        var td5=document.createElementN("td")
        td5.innerText=elem.tmenu;

        var td6=document.createElementN("td")
        td6.innerText="Favorite"
        td6.style.color="green"
        td6.addEventListener("click",function (){
            favoriteFun(elem);
        });

        

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);
        
    })

    
}

function favoriteFun(elem){
    favoriteArr.push(elem);
    console.log(favoriteArr))
    localStorage.setItem("favourites",JSON.stringify(favoriteArr));
}