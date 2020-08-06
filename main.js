document.addEventListener("DOMContentLoaded", function(event) {
    let toSwap;
    let tempCard;
    let cardData = [
        {val:1, color:'grey'}, // because font is not visible in black (#000000) background
        {val:2, color:'#333333'},
        {val:3, color:'wheat'}, // because font is not visible in white (#ffffff) background
        {val:4, color:'#EFEFEF'},
        {val:5, color:'#72C3DC'},
        {val:6, color:'#2B8EAD'},
        {val:7, color:'#6F98A8'},
        {val:8, color:'#BFBFBF'},
        {val:9, color:'#2F454E'},
    ];

    let createCardList = isSort => {
        document.getElementById('card-items').innerHTML = ''
        let element  = document.getElementById('card-items');
        let fragment = document.createDocumentFragment();
        cardData = isSort ? cardData.sort((a,b)=>  a.val - b.val) : cardData;
        cardData.forEach(function(browser) {
            let div = document.createElement('div');
            div.textContent = browser.val;
            div.className = 'childitem'
            if (screen.width < 426 || window.innerWidth < 426) {
                div.style.background = `linear-gradient(to right, ${browser.color} 5%, lightgrey 5%)`;
            } else {
                div.style.backgroundColor = browser.color;
            }
            fragment.appendChild(div);
        });
        element.appendChild(fragment)
    }
    
    let shuffle = () => {
        cardData.forEach((obj,i)=>{
            toSwap = Math.floor(Math.random() * i);
            tempCard = cardData[i];
            cardData[i] = cardData[toSwap];
            cardData[toSwap] = tempCard;
        });
        createCardList();
    }
    
    let resizeController = () => {
        createCardList();
    }
       
    createCardList();
        
    document.getElementById("shuffle").addEventListener('click',shuffle);
    document.getElementById("reset").addEventListener('click',createCardList.bind(null, 'sort'));

    window.onresize = resizeController;
});
