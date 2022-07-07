/// <reference path="../typings/globals/jquery/index.d.ts" />
let checkNav = "openNav";
let maxLength =100;
$(".colors").animate({left:-$(".colorsOptions").innerWidth()},0);
//--------- colorsBox ---------------------

let colorSelected = $(".colorItem");

colorSelected.eq(0).css("backgroundColor","red")
colorSelected.eq(1).css("backgroundColor","orange")
colorSelected.eq(2).css("backgroundColor","green")
colorSelected.eq(3).css("backgroundColor","blue")
colorSelected.eq(4).css("backgroundColor","yello")

colorSelected.click(function(){
 let bgColor =$(this).css("backgroundColor");

 $("h1").css("color",bgColor)
 $(".content h6").css("color",bgColor)
 $("#singers h3").css("color",bgColor)
 $("#counter h4").css("color",bgColor)
 $("#counter .backgroundImage .col-3 .days").css("border-color",bgColor)
 $("#contact h3").css("color",bgColor)
 $("#contact h5").css("color",bgColor)
 $("#contact p").css("color",bgColor)
 $("#contact button").css({'cssText':" background-color:"+bgColor +"!important"})

 
})
$(".colors i").click(function(){
    let innerWidth=$(".colorsOptions").innerWidth()

    if($(".colors").css("left")=="0px")
    {
       
        $(".colors").animate({left:-innerWidth},1000);

    }
    else
    {
        $(".colors").animate({left:"0px"},1000);
    }
  
})






//----------- loading -----------------
$(document).ready(function(){
   $("#loading").fadeOut(1000);
   $("body").css("overflow","auto")
})

$(".sideNav li a").click(function(){
    console.log(this);
    $(this).css('color','red')
    $(".sideNav li a").not($(this)).css('color','white')
    let content=$(this).attr("href")
    let contentOffset =$(content).offset().top;
    console.log(contentOffset);
    $("html,body").animate({scrollTop:contentOffset},{duration:1000,queue:false})
})

counter();
$(".sideNav i").click(function () {

    closeSideNav();
})
$(".homeSection span").click(function () {


    if (checkNav == "openNav") {
        closeSideNav()

    }
    else {
        openSideNave()

    }
})

function openSideNave() {
    $(".sideNav").animate({ width: "200px" }, 500)
    $(".sideNav ul li").css('display', 'block')
    $(".sideNav").css('overflow', 'auto')
    $(".homeSection span").animate({ left: '205px' })
    $(".content").animate({ paddingLeft: '200px' }, 500)
    checkNav = "openNav";
}

function closeSideNav() {

    $(".sideNav").animate({ width: "0px" }, 500)
    $(".sideNav ul li").css('display', 'block')
    $(".sideNav ul li").css('overflow', 'hidden')
    $(".homeSection span").animate({ left: '5px' })
    $(".content").animate({ paddingLeft: '0px' }, 500)
    checkNav = "closeNav";
}


//------------------details section  -------------
$("#singers h3").click(function () {

 
    $(this).next().slideToggle(500);
    $(".description").not($(this).next()).slideUp(500)

})

//------------------Counter section  -------------

function counter()
{
   
    let countDownDate = new Date("10 october 2022 9:56:00").getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelectorAll("h4")[0].innerHTML=days+" D";
    document.querySelectorAll("h4")[1].innerHTML=hours+" H";
    document.querySelectorAll("h4")[2].innerHTML=minutes+" M";
    document.querySelectorAll("h4")[3].innerHTML=seconds+" S";
}

let counterInterval=setInterval(() => {
counter()
},1000);

//-------------------------- Contact Section ------------------------


$("#textArea").keyup(function () {

    let userTextNumber=$(this).val().length
    $("#messageNumber").html(100-userTextNumber);

    if(userTextNumber>100)
    {
        $("#messageNumber").html("your available character finished ")
    }
})