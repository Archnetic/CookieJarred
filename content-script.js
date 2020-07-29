/*
This page will run using a delayed time for cookie popups with a slight delay
to remove the popup from the page that use a delayed consent form. Websites that
ask for cookie consent as soon as the site is completed will be removed first.
*/
//test site for delayed cookie removeal https://adamsavage.com
//test site for standard onCompleted cookie removeal https://filewave.com

var idarray = ['.ccc-banner', '.cc-banner', '.ccpaCookieBanner', '.sc-fzqARJ gPfttN']

for(i = 0; i<idarray.length; i++){
    if(document.querySelector(idarray[i]) == null){
        setTimeout(function(){removeConsent(idarray[i]);}, 1000)
    }
    else{
        removeConsent(idarray[i])
    }
}

function removeConsent(temp){
    document.querySelector(temp).remove()
}

function addNewId(){

}