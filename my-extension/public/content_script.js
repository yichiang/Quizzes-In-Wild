alert("here");

function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

// loadjscssfile("app.js", "js") //dynamically load and add this .js file
var docRef=document.createElement("div")
docRef.setAttribute("id", "quizzes");
document.getElementsByTagName("body")[0].appendChild(docRef)
// $("#quizzes").load("index_1.html");
$.get(chrome.extension.getURL('/index.html'), function(data) {
    // $(data).appendTo('body');
    document.innerHTML = data
    // Or if you're using jQuery 1.8+:
    // $($.parseHTML(data)).appendTo('body');
});
