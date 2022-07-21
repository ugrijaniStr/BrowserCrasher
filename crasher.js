//paste this shit to console

function browserCrasher(length) {
    var result='';
    var characters='※‗♪µ±‾¸⁋¯~⁓º‖⁜⁁!⁘*℃°§‛℗©}×-)₥௹௹૱₦﷼₱₯ååÃ⨌⨒⨔⨤⨡⨬ԬԩӺђꚀЀꚄӁЄЄҋԞӃ(*/ω＼*)(╯°□°）╯︵ ┻━┻';
    var charactersLength=characters.length;
    for(var i=0;i<length;i++) {
        result+=characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    return result;
}

function random_item(items) {
    items[Math.floor(Math.random()*items.length)];
}

while(true) {
    var items=['red','orange','green','yellow','white','blue'];
    console.log(`%c${browserCrasher(100)}`,`background:#222;color:${random_item(items)};`);
}
