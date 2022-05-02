// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", matchdetailst);

var matchArr= JSON.parese(localStorage.getItem("schedule"))

function matchdetailst(){ 
    event.preventDefault();

    var matchObj={

        matchN: masaiForm.matchNum.value,
        forteamA: masaiForm.teamA.value,
        forteamB:masaiForm.teamB.value,
        tarikh:masaiForm.date.value,
       tmenu:masaiForm.venue.value
    };
    matchArr.push(matchObj);
    console.log(matchArr)
    localStorage.setItem("schedule",JSON.stringify(matchArr));
    window.location.href="matches.html";
} 
