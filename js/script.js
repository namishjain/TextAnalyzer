let text = document.getElementById('text');
let btn = document.getElementById('btn');
let warn = document.querySelector('.warn');

// Reload Page when test again

function testAgain(){
    location.reload();
}


btn.addEventListener('click',function analyze(){
    if(text.value == ''){
        warn.innerHTML = "Please Enter Some Text";
        warn.setAttribute('style','color:red;');
    }
    else{
        warn.innerHTML = "Analyzing Text";
        warn.style.color = "green";
        setTimeout(() => {
            warn.innerHTML = "Text Analyzed";
            
            let display = document.querySelector('.ana');

            setTimeout(() => {
                // Regular Expression for word and sentences
                let word = /[A-Za-z]+/gi;
                let sentence = /\056/gi;
                
                document.querySelector('.btn').style.display = 'block';
                document.querySelector('title').innerHTML = `Text : ${text.value}`;

                text.style.display = 'none';
                btn.style.display = 'none';
                warn.style.display = 'none';

                display.innerHTML = `Your Text :<br> ${text.value}<br><br>`;

                display.innerHTML += `Letters in Your Text : ${text.value.length}<br><br>`;

                display.innerHTML += `Words in your Text : ${text.value.match(word).length}<br><br>`;

                display.innerHTML += `Sentences in your Text : ${text.value.match(sentence).length} <br><br>`;


            }, 500);
            
        }, 1000);
    }
})

