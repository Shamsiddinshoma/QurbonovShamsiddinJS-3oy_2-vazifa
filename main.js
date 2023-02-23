const url = 'https://islomapi.uz/api/monthly?region=Toshkent&month=2';
const continer = document.querySelector('.continer')
const box = document.querySelector('.box')
const select = document.getElementById('select')

function getRamazon() {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let displayMenu = data.map((item) => {
            return `<div class="lotok">
            <div class="lot11">${'KUN'}</div>
            <div class="lot12">${'HAFTA KUNI'}</div>
            <div class="lot13">${'SANA'}</div>
            <div class="lot14">${'SAHARLIK'}</div>
            <div class="lot15">${'IFTORLIK'}</div>
           </div>

            <div class="lot">
            <div class="lot1">${item.day}</div>
            <div class="lot2">${item.weekday}</div>
            <div class="lot3">${item.date}</div>
            <div class="lot4">${item.times.tong_saharlik}</div>
            <div class="lot5">${item.times.shom_iftor}</div>
        </div>`
        })
        displayMenu = displayMenu.join('')
        continer.innerHTML = displayMenu
    })  
}
getRamazon(url)

select.addEventListener('change',(e) => {
    let url = `https://islomapi.uz/api/monthly?region=${e.target.value}&month=2`
    console.log(url);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let displayMenu = data.map((item) => {
            return `<div class="lotok">
            <div class="lot11">${'KUN'}</div>
            <div class="lot12">${'HAFTA KUNI'}</div>
            <div class="lot13">${'SANA'}</div>
            <div class="lot14">${'SAHARLIK'}</div>
            <div class="lot15">${'IFTORLIK'}</div>
           </div>

            <div class="lot">
            <div class="lot1">${item.day}</div>
            <div class="lot2">${item.weekday}</div>
            <div class="lot3">${item.date}</div>
            <div class="lot4">${item.times.tong_saharlik}</div>
            <div class="lot5">${item.times.shom_iftor}</div>
        </div>`
        })
        displayMenu = displayMenu.join('')
        continer.innerHTML = displayMenu
    }) 
})



