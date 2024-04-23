let aboutSection =  $("#about").offset().top;
// console.log(aboutSection);

$(window).scroll(function () {
    let windowOffset = $(window).scrollTop()
    if (windowOffset >= aboutSection-100) {
        $("nav").css({backgroundColor: "rgba(0, 0, 0, 0.9)"}) 
        $(".backToTop").fadeIn(200)
    }
    else{
        $("nav").css({backgroundColor: "Transparent"})
        $(".backToTop").fadeOut(200)
    }

})


$(".backToTop").click(function () {
    // $(window).scrollTop(0)
    $("html , body").animate({scrollTop:"0"},800)
})

// scroll behavior : Smooth 

$(".nav-item a").click(function (e) {
    // console.log( $(e.target).attr("href"));
    let clickedLink = $(e.target).attr("href");
    let SectionOffet =  $(clickedLink).offset().top;
    $("html , body").animate({scrollTop:SectionOffet    },800);

    $(e.target).parent().css({"border-bottom":"3px solid white"})
    $(e.target).parent().siblings().css({"border-bottom":"none"})
})

let boxWidth =  $(".colorOption").innerWidth();
$("#colorBox").css({"left":-boxWidth});
$("#colorBox i").click(function () {
    let boxWidth =  $(".colorOption").innerWidth();
    let boxLeft =  $("#colorBox ").offset().left;
    console.log(boxWidth,boxLeft );
   

    if (boxLeft === 0) {
    $("#colorBox").css({"left":-boxWidth});
    }else{
        $("#colorBox").css({"left":"0"});
    }
})

// Change text color from the box

for (let i = 0; iindex < array.length; iindex++) {
    const element = array[iindex];
    
}