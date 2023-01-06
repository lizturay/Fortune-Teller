//--------------------Fortune Teller--------------------//
function response(){
    var list = [
        "The star of riches is shining on you!",
        "Something you lost will turn up soon",
        "The one you love is closer than you think!",
        "Every artist was first an amateur",
        "Run!",
        "You skipped brushing your teeth this morning? Horrific!",
        "You will be hungry again in 10 minutes",
        "The fortune you seek is in another click",
        "I see money in your future... not in yours though",
        "If people are talking behind your back - then just fart",
    ];
    var number = Math.floor(Math.random()*10);
    document.getElementById("response").innerHTML = list[number]
}
