document.title = ">"

$(document).ready(function(){
    clockUpdate();
    setInterval(clockUpdate, 1000);
});

function clockUpdate(){
    var date = new Date();

    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    $('#clock #clockspan').text(h + ":" + m + ":" + s);
}

$("#nav li a").hover(function(){
    document.title = "> " + $(this).text();
},function(){
    document.title = ">";
});