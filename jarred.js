/*function jarCookie(){
    var cookie = document.getElementsByClassName("maincontent")
    if(typeof(cookie) != "undefined" && cookie != null){
        console.log("finally")
        
    }
    console.log(cookie)
    cookie.remove();

}*/

function jarCookie(){
    window.onload = eatmyass()
    
}
function eatmyass(){
    console.log("i ate it bitch")
    getCurrTab.querySelector(".cc-banner")
}

var getCurrTab = browser.tabs.query({active: true, currentWindow: true});
browser.webNavigation.onCompleted.addListener(jarCookie);
