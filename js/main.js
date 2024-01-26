const button = document.getElementById("js--menu");
const navigation = document.getElementById("js--nav");
const body = document.getElementById("js--body");
const xButton = document.getElementById("js--xbutton");

button.onclick = function()
{
    navigation.style.visibility = "visible";
    navigation.style.opacity = 1;
    body.style.overflow = "hidden";
}

xButton.onclick = function()
{
    navigation.style.visibility = "hidden";
    navigation.style.opacity = 0;
    body.style.overflow = "visible";
}