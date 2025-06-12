(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const d=async()=>{let t=[];try{t=(await(await fetch("https://matimtorabi.github.io/db/db.json")).json()).articles.map(e=>`
                    <div class="swiper-slide">
                      <a href="#" class="flex hover:text-[#0a5abd] items-center shadow-md  rounded-2xl">
                        <div class="w-full rounded-md  mobile:h-[140px] tablet:h-[190px] laptop:h-[215px] flex flex-col justify-center items-center">
                            <div class="w-full mobile:h-[50%] tablet:h-[65%] laptop:h-[70%]">
                                <img class="w-auto rounded-xl mobile:h-full object-cover " alt=${e.alt} src=${e.image}>
                            </div>
                            <div class="w-full flex items-center justify-center mobile:h-[50%] tablet:h-[35%] laptop:h-[30%]">
                                <h3 class="mobile:leading-6 tablet:leading-7 mobile:line-clamp-2 mobile:text-xs laptop:text-sm overflow-hidden font-[Yekan] text-[#494949]">${e.description}</h3>
                            </div>
                        </div>
                      </a>
                    </div>

                  `),document.querySelector(".articles ").innerHTML=t.join(" ")}catch(l){console.log(l)}},p=async()=>{let t=[];try{t=(await(await fetch("https://matimtorabi.github.io/db/db.json")).json()).brand.map(e=>`
                    <div class="swiper-slide ">
                        <div class="w-full h-full flex items-center justify-center ">
                            <div class="rounded-xl shadow-md bg-white flex items-center cursor-pointer justify-center w-full h-[96px]  transition-all duration-300 ease-in-out hover:-translate-y-3">
                                <a class="" href="#">
                                    <img src=${e.image} class="mobile:w-14 mobile:h-14 tablet:w-24 tablet:h-24 object-cover" alt=${e.alt}>
                                </a>
                            </div>
                        </div>
                    </div>
                  `),document.querySelector(".brand ").innerHTML=t.join(" ")}catch(l){console.log(l)}},u=async()=>{let t=[];try{t=(await(await fetch("https://matimtorabi.github.io/db/db.json")).json()).card.map((e,a)=>{if(a>=2)return`
                    <a href="#" >
                        <div class="w-full mobile:h-[161px] laptop:h-[187px] rounded-xl hover:shadow-xl flex bg-white">
                            <img src=${e.image} alt=${e.alt} class="rounded-r-xl">
                            <div class="mobile:w-full laptop:w-auto flex flex-col justify-center">
                                <p class="text-start font-[Yekan] mobile:text-xs tablet:text-sm leading-6 line-clamp-3 text-[#000000DE]">${e.description}</p>
                                <div class="flex mobile:justify-between laptop:gap-2 pt-6 mobile:w-full laptop:w-auto pl-2.5">
                                    <span class="font-[Yekan] mobile:text-[13px] tablet:text-sm text-[#9E9E9E]">${e.off}</span>
                                    <span class="font-[Yekan] mobile:text-[13px] tablet:text-sm text-[#FE5F55]">${e.pureoff}</span>
                                </div>
                                <div class="flex flex-row items-center justify-end gap-1 pt-2.5 pl-2.5">
                                    <span class="text-[#0A5ABD] font-[Yekan] font-bold mobile:text-sm tablet:text-xl">${e.price}</span>
                                    <span class="text-[#A1A3A1] font-[Yekan] mobile:text-[10px] tablet:text-xs">تومان</span>
                                </div>
                            </div>
                        </div>
                    </a>
                `}),document.querySelector(".card ").innerHTML=t.join(" ")}catch(l){console.log(l)}},x=async()=>{let t=[];try{t=(await(await fetch("https://matimtorabi.github.io/db/db.json")).json()).category.map(e=>`
                  <div class="swiper-slide bg-white"><a href="" class=""><img src=${e.image} alt=${e.alt} class="w-[185px] pt-[28px] object-cover h-[185px]"></a></div>
            `),document.querySelector(".category ").innerHTML=t.join(" ")}catch(l){console.log(l)}},f=async()=>{let t=[];try{t=(await(await fetch("https://matimtorabi.github.io/db/db.json")).json()).category.map((e,a)=>`
                      <a href="" class=""><img src=${e.image} alt=${e.alt} class="w-[166px] pt-[28px] h-[166px]"></a>
                `),document.querySelector(".mcat").innerHTML=t.join(" ")}catch(l){console.log(l)}},b=async()=>{let t=[];try{t=(await(await fetch("https://matimtorabi.github.io/db/db.json")).json()).dastresi.map(e=>`
              <div class="laptop:w-[290px] desktop:w-[312px] h-full flex flex-col justify-center items-center p-4 gap-2.5">
                <img src=${e.icon} alt=${e.alt} class="w-[64px] h-[64px] ">
                <h2 class="font-[Yekan] text-[#7E7575] text-sm font-bold text-center">${e.title}</h2>
                <p class="font-[Yekan] text-center tablet:text-[12px] laptop:text-sm text-[#2b2b2b] leading-7">${e.description}</p>
              </div>

            `),document.querySelector(".dast ").innerHTML=t.join(" ")}catch(l){console.log(l)}},h=async()=>{let t=[];try{t=(await(await fetch("https://matimtorabi.github.io/db/db.json")).json()).menu.map(e=>e.dropdown.length>0?`
                        <li class="relative group h-full border-b-[2px] border-white border-solid hover:border-b-[#FE5F55] transition-all duration-300 ease-linear">
                            <a href="#" class="text-[#00000099] px-4 py-2  block font-[Yekan] hover:text-[#FE5F55] transition-all duration-300 ease-linear laptop:text-xs desktop:text-sm has-submenu ">
                                <span>${e.title}</span>
                                <i class="icon-arrow-down mr-1 text-xl align-middle"></i>
                            </a>
                            
                            <!-- سطح دوم -->
                            <ul class="absolute hidden group-hover:block bg-white w-[330px] shadow-lg right-0 mt-1 ">
                                ${e.dropdown.map(a=>a.dropdown.length>0?`
                                        <li class="relative submenu-parent">
                                            <a href="#" class="text-[#00000099] px-4 py-3 hover:bg-gray-200 hover:text-[#0a5ade] font-[Yekan] text-xs has-submenu flex items-center justify-between">
                                                <span class="">${a.name}</span>
                                                <i class="icon-chevron-left text-black-60 text-xl"></i>
                                            </a>
                                            <!-- سطح سوم -->
                                            <ul class="absolute hidden submenu-child bg-white w-[300px] right-full top-0">
                                                ${a.dropdown.map(o=>`
                                                        <li><a href="#" class="text-[#00000099] px-4 py-3 hover:bg-gray-200 hover:text-[#0a5ade] block font-[Yekan] text-xs">${o.name}</a></li>
                                                    `).join(" ")}
                                            </ul>
                                        </li>
                                        `:`
                                            <li><a href="#" class="text-[#00000099] px-4 py-3 hover:bg-gray-200 hover:text-[#0a5ade] block font-[Yekan] text-xs">${a.name}</a></li>
                                        `).join(" ")}                                
                            </ul>
                        </li>
            `:`
                        <li class="relative group h-full border-b-[2px] border-white border-solid hover:border-b-[#FE5F55] transition-all duration-300 ease-linear">
                            <a href="#" class="text-[#00000099] px-4 py-2  block font-[Yekan] hover:text-[#FE5F55] transition-all duration-300 ease-linear laptop:text-xs desktop:text-sm">
                                <span>${e.title}</span>
                                <i class="icon-arrow-down mr-1 text-xl align-middle"></i>
                            </a>
                        </li>
                    `),document.querySelector(".item").innerHTML=t.join(" ")}catch(l){console.log(l)}},m=async()=>{let t=[];try{t=(await(await fetch("https://matimtorabi.github.io/db/db.json")).json()).menu.map(e=>{if(e.dropdown.length>0)return`
                    <div class="border-b border-gray-200">
                        <button class="accordion-btn w-full p-4 text-right flex justify-between items-center ">
                            <span class="font-medium font-[Yekan]">${e.title}</span>
                            <span class="transform transition-transform duration-300 text-lg">
                                <i class="icon-chevron-left transform -rotate-90 align-middle text-lg h-18"></i>
                            </span>
                        </button>
                        <div class="accordion-content max-h-0 overflow-hidden transition-all duration-300">
                            <div class="p-4 bg-[#F5F5F5] space-y-3 max-h-60 overflow-y-auto">
                                ${e.dropdown.map(a=>`
                                        <a href="#" class="text-sm font-[Yekan] block pr-4 py-2 rounded transition">${a.name}</a>
                                    `).join(" ")}
                            </div>
                        </div>
                    </div>
                `}),document.querySelector(".draver ").innerHTML=t.join(" ")}catch(l){console.log(l)}},w=async()=>{let t=[];try{t=(await(await fetch("https://matimtorabi.github.io/db/db.json")).json()).products.map(e=>e.status==="exist"?`
                    <div class="swiper-slide rounded-xl ">
                        <a href="#" class="w-full h-full">
                            <div class="w-full h-full flex justify-between flex-col relative">
                                <div class="w-full mobile:h-[138px] tablet:h-[190px] laptop:h-[272px]">
                                    <img src=${e.image} alt=${e.alt} class="w-full h-full tablet:object-cover rounded-xl">
                                </div>
                                    <div class="w-full mobile:h-[56px] tablet:h-[68px] laptop:h-[70px] flex flex-col items-center justify-center gap-2.5">
                                    <h3 class="mobile:hidden laptop:block font-[Yekan] text-[#A3A3A3] text-xs">${e.title}</h3>
                                    <p class="font-[Yekan] text-[#000000DE] text-xs line-clamp-1">${e.description}</p>
                                </div>
                                <div class="w-full mobile:h-[58px] tablet:h-[62px] laptop:h-[62px] flex flex-col gap-2 py-2.5 justify-center mobile:items-center mobile:pl-0 laptop:items-end laptop:pl-5">
                                    <span class="font-[Yekan] text-[#A3A3A3] text-xs">${e.off}</span>
                                    <div class="flex justify-center items-center gap-2.5 ">
                                        <span class="font-[Yekan] font-bold mobile:text-[12px] tablet:text-xl text-[#0a5abd]">${e.price}</span>
                                        <span class="font-[Yekan] mobile:text-[12px] tablet:text-xs text-[#A3A3A3]">تومان</span>
                                    </div>
                                </div>
                                <div class="mobile:hidden laptop:block w-[12px] h-[12px] rounded-full bg-[#000000de] absolute left-5 top-5" ></div>
                            </div>
                        </a>
                    </div>
                `:`
                    <div class="swiper-slide rounded-xl ">
                        <a href="#" class="w-full h-full">
                            <div class="w-full h-full flex justify-between flex-col relative">
                                <div class="w-full mobile:h-[138px] tablet:h-[190px] laptop:h-[272px]">
                                    <img src=${e.image} alt=${e.alt} class="w-full h-full tablet:object-cover rounded-xl">
                                </div>
                                    <div class="w-full mobile:h-[56px] tablet:h-[68px] laptop:h-[70px] flex flex-col items-center justify-center gap-2.5">
                                    <h3 class="mobile:hidden laptop:block font-[Yekan] text-[#A3A3A3] text-xs">${e.title}</h3>
                                    <p class="font-[Yekan] text-[#000000DE] text-xs line-clamp-1">${e.description}</p>
                                </div>
                                <div class="w-full bg-[#FFF5F5] mobile:h-[58px] tablet:h-[62px] rounded-b-xl laptop:h-[62px] flex flex-col items-center justify-center">
                                    <span class="text-[#9b2c2c] text-sm font-[Yekan]">ناموجود</span>
                                </div>
                                <div class="mobile:hidden laptop:block w-[12px] h-[12px] rounded-full bg-[#000000de] absolute left-5 top-5" ></div>
                            </div>
                        </a>
                    </div>
                `),document.querySelector(".product ").innerHTML=t.join(" ")}catch(l){console.log(l)}},v=async()=>{let t=[];try{t=(await(await fetch("https://matimtorabi.github.io/db/db.json")).json()).productsexist.map(e=>e.status==="exist"?`
                    <div class="swiper-slide rounded-xl ">
                        <a href="#" class="w-full h-full">
                            <div class="w-full h-full flex justify-between flex-col relative">
                                <div class="w-full mobile:h-[138px] tablet:h-[190px] laptop:h-[272px]">
                                    <img src=${e.image} alt=${e.alt} class="w-full h-full tablet:object-cover rounded-xl">
                                </div>
                                    <div class="w-full mobile:h-[56px] tablet:h-[68px] laptop:h-[70px] flex flex-col items-center justify-center gap-2.5">
                                    <h3 class="mobile:hidden laptop:block font-[Yekan] text-[#A3A3A3] text-xs">${e.title}</h3>
                                    <p class="font-[Yekan] text-[#000000DE] text-xs line-clamp-1">${e.description}</p>
                                </div>
                                <div class="w-full mobile:h-[58px] tablet:h-[62px] laptop:h-[62px] flex flex-col gap-2 py-2.5 justify-center mobile:items-center mobile:pl-0 laptop:items-end laptop:pl-5">
                                    <span class="font-[Yekan] text-[#A3A3A3] text-xs">${e.off}</span>
                                    <div class="flex justify-center items-center gap-2.5 ">
                                        <span class="font-[Yekan] font-bold mobile:text-[12px] tablet:text-xl text-[#0a5abd]">${e.price}</span>
                                        <span class="font-[Yekan] mobile:text-[12px] tablet:text-xs text-[#A3A3A3]">تومان</span>
                                    </div>
                                </div>
                                <div class="mobile:hidden laptop:block w-[12px] h-[12px] rounded-full bg-[#000000de] absolute left-5 top-5" ></div>
                            </div>
                        </a>
                    </div>
                `:`
                    <div class="swiper-slide rounded-xl ">
                        <a href="#" class="w-full h-full">
                            <div class="w-full h-full flex justify-between flex-col relative">
                                <div class="w-full mobile:h-[138px] tablet:h-[190px] laptop:h-[272px]">
                                    <img src=${e.image} alt=${e.alt} class="w-full h-full tablet:object-cover rounded-xl">
                                </div>
                                    <div class="w-full mobile:h-[56px] tablet:h-[68px] laptop:h-[70px] flex flex-col items-center justify-center gap-2.5">
                                    <h3 class="mobile:hidden laptop:block font-[Yekan] text-[#A3A3A3] text-xs">${e.title}</h3>
                                    <p class="font-[Yekan] text-[#000000DE] text-xs line-clamp-1">${e.description}</p>
                                </div>
                                <div class="w-full bg-[#FFF5F5] mobile:h-[58px] tablet:h-[62px] rounded-b-xl laptop:h-[62px] flex flex-col items-center justify-center">
                                    <span class="text-[#9b2c2c] text-sm font-[Yekan]">ناموجود</span>

                                </div>
                                <div class="mobile:hidden laptop:block w-[12px] h-[12px] rounded-full bg-[#000000de] absolute left-5 top-5" ></div>
                            </div>
                        </a>
                    </div>
                `),document.querySelector(".productsexist ").innerHTML=t.join(" ")}catch(l){console.log(l)}},g=async()=>{let t=[];try{t=(await(await fetch("https://matimtorabi.github.io/db/db.json")).json()).slider.map(e=>`
                <div class="swiper-slide">
                    <a href="#" class="w-full h-full">
                        <div class="w-full h-full">
                            <img src=${e.image} alt=${e.alt} class="w-full h-full object-cover rounded-xl">
                        </div>
                    </a>
                </div>
            `),document.querySelector(".slide ").innerHTML=t.join(" ")}catch(l){console.log(l)}};function y(){new Swiper(".mySwiper",{autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}})}function j(){new Swiper(".Category",{slidesPerView:5,spaceBetween:0,freeMode:!0,autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1100:{slidesPerView:6,spaceBetween:30}}})}function k(){new Swiper(".Brand",{slidesPerView:4,spaceBetween:20,freeMode:!0,autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1100:{slidesPerView:6}}})}function $(){new Swiper(".Articles",{slidesPerView:3,spaceBetween:20,freeMode:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1100:{slidesPerView:4}}})}function E(){new Swiper(".products",{slidesPerView:2,spaceBetween:30,freeMode:!0,autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:3,spaceBetween:20},1100:{slidesPerView:4,spaceBetween:20}}})}function A(){new Swiper(".Productsexist",{slidesPerView:2,spaceBetween:30,freeMode:!0,autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:3,spaceBetween:20},1100:{slidesPerView:4,spaceBetween:20}}})}function L(){document.querySelectorAll(".submenu-parent").forEach(t=>{t.addEventListener("mouseenter",()=>{t.querySelector(".submenu-child").classList.remove("hidden")}),t.addEventListener("mouseleave",()=>{t.querySelector(".submenu-child").classList.add("hidden")})})}function Y(){const t=document.getElementById("drawer-button"),l=document.getElementById("drawer-container"),s=document.getElementById("close-drawer"),e=document.getElementById("main-drawer");t.addEventListener("click",()=>{l.classList.remove("hidden"),setTimeout(()=>{e.style.transform="translateX(0)"},10)});function a(){e.style.transform="translateX(100%)",setTimeout(()=>{l.classList.add("hidden")},300)}s.addEventListener("click",a),l.addEventListener("mouseleave",n=>{e.contains(n.relatedTarget)||a()}),document.querySelectorAll(".accordion-btn").forEach(n=>{n.addEventListener("click",()=>{const i=n.nextElementSibling,r=i.style.maxHeight!=="0px"&&i.style.maxHeight!=="";document.querySelectorAll(".accordion-content").forEach(c=>{c.style.maxHeight="0"}),r||(i.style.maxHeight=i.scrollHeight+"px")})}),document.querySelectorAll(".accordion-btn").forEach(n=>{n.addEventListener("click",()=>{const i=n.nextElementSibling,r=i.classList.contains("active");document.querySelectorAll(".accordion-content").forEach(c=>{c.classList.remove("active")}),r||i.classList.add("active")})}),document.getElementById("close-drawer").addEventListener("click",()=>{document.getElementById("drawer-container").classList.add("hidden")})}async function S(){await h(),await m(),await g(),await b(),await x(),await f(),await p(),await d(),await w(),await v(),await u(),L(),y(),j(),k(),$(),E(),A(),Y()}S();
