$(document).ready(function(){
    
    var toggleEls = document.querySelectorAll('[data-mui-controls^="pane-events-"]');

    function logFn(ev) {
        var s = '[' + ev.type + ']';
        s += ' paneId: ' + ev.paneId;
        s += ' relatedPaneId: ' + ev.relatedPaneId;
        console.log(s);
    }

    // attach event handlers
    for (var i=0; i < toggleEls.length; i++) {
        toggleEls[i].addEventListener('mui.tabs.showstart', logFn);
        toggleEls[i].addEventListener('mui.tabs.showend', logFn);
        toggleEls[i].addEventListener('mui.tabs.hidestart', logFn);
        toggleEls[i].addEventListener('mui.tabs.hideend', logFn);
    }

});
