'use strict';

document.addEventListener("DOMContentLoaded", () => {

//const addForm = document.querySelector(".sendform");
const addFormArea = document.querySelector(".sendform__area");
const list = document.querySelector(".chats__list");

    document.querySelector(".sendform__block").addEventListener("submit", (e) => {    
        e.preventDefault();

    const newDialog = addFormArea.value;
    
    const chatHere = '<div class="chats__item item">' + '<img class="chats__img-opp" src="images/icons/6.png" alt="not found">' + '<p class="chats__text-opp">' + newDialog + '</p>' + '</div>';

    list.innerHTML += chatHere;
    addFormArea.value = "";
    });
}); 


