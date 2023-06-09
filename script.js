let img = document.getElementById('car-img');
let outCrName = document.getElementById('creator-name');
let outCarName = document.getElementById('car-name');
let outYear = document.getElementById('year');
let but1 = document.getElementById('but-1');
let but2 = document.getElementById('but-2');
let out = document.getElementById('out');
let outSum = document.getElementById('summ');
let outExp = document.getElementById('expensive');


const object = {creator: 'BMW', carName: 'M5 F90', year: '2015', srcImg: 'https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/all-models/m-series/m5-sedan/2020/equipment/bmw-5-series-sedan-m-models-equipment-sd-individual-03.jpg'};

but1.addEventListener('click', function(){
    outCrName.textContent = object.carName;
    outCarName.textContent = object.creator;
    outYear.textContent = object.year;
    img.setAttribute('src', object.srcImg);
});


function f1(){
    const arr = [
        {pName: 'Молоко',  qty: '1л.', price: 100},
        {pName: 'Яйца',  qty: '10шт', price: 80},
        {pName: 'Хлеб',  qty: '1б.', price: 60}
    ]; 
    
    let str = '<tr><td>Наименование</td><td>Количество</td><td>Цена</td></tr>';
    
    let sum = arr.reduce((s, i) => s = s + i.price, 0);
    let exp = arr.reduce((acc, curr) => acc.price > curr.price ? acc : curr);

    arr.forEach(el=> {
        str += '<tr><td>' + el.pName + '</td><td>' + el.qty + '</td><td>' + el.price + '</td></tr>'
    });

    out.innerHTML = str;
    outSum.textContent = 'Сумма: ' + sum + 'р';
    outExp.textContent = 'Самая дорогая покупка: ' + exp.price + 'р';
};

but2.onclick = f1;