/*
Create business name generator by combining

Crazy
Amazing
Fire

Engine
Foods
Garments

Bros
Limited
Hub;

*/

let adjective = {
    0:"crazy",
    1:"Amazing",
    2:"Fire"   
};
let shop = {
    0:"Engine",
    1:"Foods",
    2:"Garments"
};
let word = {
    0:"Bros",
    1:"Limited",
    2:"Hub"
};

let n1 = Math.floor(Math.random()*3);
let n2 = Math.floor(Math.random()*3);
let n3 = Math.floor(Math.random()*3);

let name = adjective[n1]+" "+shop[n2]+" "+word[n3];

console.log(name);
