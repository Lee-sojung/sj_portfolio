//열기 버튼 모션
//1단계 - 팝업이 display : block;
//2단계 - 선이 그려지는 모션
//3단계 - inner on 추가

//닫기 버튼 모션
//1단계 - inner on 제거
//2단계 - 선이 사라지는 모션
//3단계 - 팝업이 display : none;

const main = document.querySelector("section");
const btnOpen = main.querySelector(".btnOpen");
const pop = document.querySelector("aside");
const lineTop = pop.querySelector(".top");
const lineRight = pop.querySelector(".right");
const lineBottom = pop.querySelector(".bottom");
const lineLeft = pop.querySelector(".left");
const popInner = pop.querySelector(".inner");

const btnClose = pop.querySelector(".btnClose");


//열기 버튼 모션
btnOpen.addEventListener("click", e=>{
    e.preventDefault();

    main.classList.add("off");
    pop.style.display = "block";

    new Anime(lineTop,{
        prop : "width",
        value : "100%",
        duration : 500,
        callback : ()=>{

            new Anime(lineRight,{
                prop : "height",
                value: "100%",
                duration: 500,
                callback:()=>{

                    new Anime(lineBottom,{
                        prop:"width",
                        value:"100%",
                        duration:500,
                        callback:()=>{

                            new Anime(lineLeft,{
                                prop:"height",
                                value: "100%",
                                duration: 500,
                                callback :()=>{

                                    popInner.classList.add("on");
                                }
                            })
                        }
                    })
                } 
            })
        }
    })
})


//닫기 버튼 모션
btnClose.addEventListener("click",e=>{
    e.preventDefault();

    popInner.classList.remove("on");

    new Anime(lineLeft,{
        prop: "height",
        value: "0%",
        duration:1000,
    });

    new Anime(lineBottom,{
        prop:"width",
        value:"0%",
        duration:1000,
    });

    new Anime(lineRight,{
        prop:"height",
        value:"0%",
        duration:1000,
    });

    new Anime(lineTop,{
        prop:"width",
        value:"0%",
        duration:1000,
        callback:()=>{

            pop.style.display = "none";
            main.classList.remove("off");
        }
    });

})