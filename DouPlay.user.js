// ==UserScript==
// @name         DouPlay
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://movie.douban.com/subject/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    // Your code here...
    //var $ = window.jQuery;
    var newItem = document.createElement("iframe");
                                     newItem.setAttribute("id","play");
                                     newItem.setAttribute("name","playf");
                                     newItem.setAttribute("frameborder","0");
                                     newItem.setAttribute("style","width: 100%;height: 300px;");
                                     newItem.setAttribute("allowfullscreen","allowfullscreen");
                                     newItem.setAttribute("security","restricted");
                                     newItem.setAttribute("referrerpolicy","no-referrer");

    var div = document.createElement("div");
                                     div.setAttribute("id","fm");
                                     div.setAttribute("style","width: 100%;height:300px;");
                                     var x = document.createElement("input");
                                     x.setAttribute("type","button");
                                     x.setAttribute("value"," X ");
                                     x.setAttribute("style","position: relative;float: right;z-index: 2;");
                                     newItem.setAttribute("style","width: 100%;height: 300px;position: absolute;");
                                     div.appendChild(x);
                                     div.appendChild(newItem);
            x.addEventListener("click",function (){
            div.parentNode.removeChild(div);
            });


    var obj = document.querySelector('.bs').children
     for (var i = 0; i < obj.length; i++){
             var url = obj[i].firstElementChild
             if(url.href != "javascript: void 0;"){
                 url.href = url.href.replace("https://www.douban.com/link2/?url=","https://api.bbbbbb.me/jx/?url=");
                 url.setAttribute("target","playf");
                 url.addEventListener("click",function (){
                                     var parentDiv = document.getElementById("mainpic").parentNode.parentNode;
                                     var c1 = document.getElementById("mainpic").parentNode;
                                     parentDiv.insertBefore(div, c1);
                                     });
             }
     }
     // else this.ep();
    document.addEventListener('DOMNodeInserted', function() {
        var li = document.querySelector(".episode-list")
        if(li != null){
            var eps = li.children;
            for (i = 0; i < eps.length-1; i++){
                eps[i].href = eps[i].href.replace("http://","https://");
                eps[i].href = eps[i].href.replace("www.douban.com/link2/?url=","api.bbbbbb.me/jx/?url=");
                eps[i].setAttribute("target","playf");
                eps[i].setAttribute("id","ss");
                eps[i].addEventListener("click",function (){
                                     newItem.setAttribute("style","width: 100%;height: 300px;margin: 0px 0px 5px -15px;");
                                     var parentDiv = document.getElementById("ss").parentNode.parentNode;
                                     var c1 = document.getElementById("ss").parentNode;
                                     parentDiv.insertBefore(newItem, c1);
                                     });
            }
        }
    });





                              })();