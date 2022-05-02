// write js code here corresponding to favourites.html

var favoriteArr=JSON.parse(localStorage.getItem("favourite"));
displayData(favoriteArr);
function displayData(data){
    data.forEach(function (elem) {
        var tr=document.createElement("tr");

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
        
        tr.append(td1,td2,td3,td4,td5)
        document.querySelector("tbody").append(tr);

    )}
}