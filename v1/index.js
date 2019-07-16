var theDelay = 600;

window.seenWords = {"e/35":"loop","m/61":"findpackage","e/44":"dir","e/18":"upload","e/37":"url","e/59":"poly","m/50":"serverproxy","m/1":"command","e/26":"emit","e/27":"anon","h/9":"sizeofhexagon","h/29":"emitconfiglist","h/12":"loadregisterlist","h/47":"createnewsocket","h/8":"loadaltevent","h/40":"encodenewfolder","h/31":"getmysqldomain","h/36":"eventlistdir","h/22":"hostnewserver","h/42":"changepassword","h/32":"removenewcookie","h/19":"decryptdatabatch","h/43":"statusofprocess","h/11":"checkhttptype","h/25":"disconnectserver","h/54":"changeusername","h/53":"loadloggedpassword","h/15":"encryptunpackedbatch","h/18":"respondertimeout","h/26":"callmodule","h/51":"disconnectchannel","h/2":"httpbuffersize","h/41":"removeoldcookie","h/52":"fileexpresslog","h/14":"tempdatapass","h/21":"getxmlprotocol","h/7":"joinnetworkclient","h/28":"createfilethread","h/0":"uploaduserstats","e/0":"xml","e/57":"info","e/3":"temp","e/20":"right","e/12":"val","e/31":"cookies","e/9":"event","h/1":"includedirectory","h/20":"wordcounter","h/34":"createnewpackage","h/24":"setnewproxy","h/5":"exportconfigpackage","h/33":"generatecodepack","h/4":"rootcookieset","h/50":"deleteallids","h/6":"dodecahedron","h/37":"destroybatch","h/46":"unpacktmpfile","m/15":"listconfig","m/20":"userport","m/62":"number","m/4":"newserver","m/25":"gridwidth","m/14":"setping","m/28":"setstats","m/65":"channel","e/17":"write","m/48":"vector","e/33":"reset","e/40":"ping","e/22":"remove","m/35":"filetype","e/16":"load","e/47":"user","e/39":"add","e/51":"buffer","m/23":"export","h/35":"sendintelpass","h/38":"patcheventlog","h/17":"getpartoffile","h/13":"create2axisvector","h/44":"getdatapassword","h/16":"ghostfilesystem","h/48":"bufferpingset","h/49":"create3axisvector","h/30":"systemportkey","h/10":"getfirewallchannel","h/27":"blockthreat","h/45":"channelsetpackage","h/23":"mergesocket","h/3":"systemgridtype","h/39":"batchallfiles"};
function canPwn() {
    if(window.lastPwnTime == null) return true;
    var now = new Date();
    var timeDifference = now - window.lastPwnTime;
 
    return timeDifference > theDelay;
}
function didPwn() {
    window.lastPwnTime = new Date();
}
function checkPwn(force) {
    if (!$("#hacks-enabled").is(":checked") || !canPwn()) return;
 
    window.seenWords = window.seenWords || {};
 
    var stringNumber = $('.tool-type-img').attr('src').replace('../client/img/word/','');
    
    window.lastWordChoice = window.lastWordChoice || ["", 0];
    if(window.lastWordChoice[0] == stringNumber && !force && ++window.lastWordChoice[1] >= 3) {
        window.lastWordChoice = [stringNumber, 0];
        return;
    }
    window.lastWordChoice = [stringNumber, window.lastWordChoice[1]];
 
    var possibleWord = window.seenWords[stringNumber];
 
    if (possibleWord != null || window.lastWordChoice[0] === "../client/img/words/template.png") {
        if (window.lastWordChoice[0] === "../client/img/words/template.png") {
            $("#player-list").find(">:first-child").click();
            $("#window-other-button").click();
            $("#window-other-port" + ["1", "2", "3"][Math.floor(Math.random()*3)]).click();
            $(".targetmessage-button-cancel")[0].click();
        } else {
        	console.log('Found word: ' + possibleWord);
 	
        	window.shouldntSubmit = true;
        	$('#tool-type-word').val(possibleWord);
 
       		$('#tool-type-form').submit();
        	didPwn()
 
        	setTimeout(function() {
            	$('#tool-type-word').val('');
            	window.shouldntSubmit = false;
        	}, 1);
        }
    }
}
$('#tool-type-word').on('keyup keypress keydown', function(e) {
    if(window.shouldntSubmit) {
        e.preventDefault();
        return false;
    }
 
    if(e.which != 13) {
        return;
    }
 
    var currentEntry = $('#tool-type-word').val();
 
    if(currentEntry.length <= 0) {
        checkPwn(true);
        e.preventDefault();
        return false;
    }
 
    var stringNumber = $('.tool-type-img').attr('src').replace('../client/img/word/','');
    window.seenWords[stringNumber] = currentEntry;
    didPwn();
});
function exportBotMemory() {
    alert("See the browser console for instructions on how to export.");
    console.log('To load bot memory, paste the following into the console:');
    console.log('window.seenWords = ' + JSON.stringify(window.seenWords) + ';');
}

$(document.body).append($("<p style='position:absolute;right:10px;top:0;z-index:999;'>Bot Enabled: <input id='hacks-enabled' type='checkbox' style='position:absolute;right:0;top:0;z-index:999;'> | <button onclick='exportBotMemory()' style='position:absolute;right:150px;top:0;z-index:999;'>Export Game Config</button>"))
setInterval(checkPwn, 100);