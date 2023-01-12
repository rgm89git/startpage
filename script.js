var clicked = false
var withlink = false

document.title = ">"

$(document).ready(function(){
    startBackground();
});
$(document).ready(function(){
    clockUpdate();
    setInterval(clockUpdate, 1000);
});

function startBackground(){
    $("#background").css("background-image", "url(./img/tvturn.gif)");
    $("#background").addClass("pixelated");

    setTimeout(() => randBackground(),1000);
}
function randBackground(){
    $("#background").removeClass("pixelated");
    
    select = ["rik.gif", "sonoc.png", "sanaeakito.gif"];
    selectlink = ["https://www.youtube.com/watch?v=NDfRdEZMNSo", "https://www.youtube.com/watch?v=2hqWfiGDOF8", "https://www.youtube.com/watch?v=TbDzJ855CQA"]
    selected = Math.floor(Math.random() * select.length);
    selectedimg = select[selected]
    selectedlink = selectlink[selected]

    console.log(selectedimg);
    extension = selectedimg.split('.').pop().trim();
    console.log(extension);
    if(extension == "gif"){
        $("#background").addClass("pixelated");
    }

    if(selectedlink != ""){
        withlink = true
        $("#background").addClass("clickable");
        $("#background").on("click", () => window.open(selectedlink,"_blank"));
    }

    fullurl = "./img/" + selectedimg
    $("#background").css("background-image", "url("+fullurl+")");
}

function clockUpdate(){
    var date = new Date();

    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    d = date.toLocaleString('pt-br',{day: 'numeric', month:'long', year:'numeric'});

    $('#clock #clockspan').text(h + ":" + m + ":" + s);
    $('#clock #datespan').text(d);
}

$("#nav li a").hover(function(){
    if(!clicked){
        document.title = "> " + $(this).text();
    }
},function(){
    if(!clicked){
        document.title = ">";
    }
});

$(".scbtn").hover(function(){
    if(!clicked){
        document.title = "> source code";
    }
},function(){
    if(!clicked){
        document.title = ">";
    }
});

$("#nav li a").click(function(){
    clicked = true
    document.title = "loading..."
});
$(".scbtn a").click(function(){
    clicked = true
    document.title = "loading..."
});