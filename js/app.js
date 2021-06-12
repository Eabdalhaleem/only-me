'use strict';

let seattle = {

    mincustomperhour:23,
    maxcustomperhour:65,
    avercookiespercustomer:6.3,
    cookiesforeachhour :[],


    randomcustomperhour:function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
    }

    cookiesforeachhour




}