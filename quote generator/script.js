const quotes =[`Don't Watch the clock; do what it
                does.keep going.`,
 
                `Success is not final,failure is not
                fatel:it is the courage to continue that
                counts.`,
            
                `The future belongs to those who 
                 beleive in the beauty of their dreams.` ,
                
                `The best time to plant a tree was
                 20 years ago.the second best time 
                 is now.`,

                `The harder you work for something
                 the greater you'll feel when you
                 achieve it.`,
                
                `The difference between a stumbling
                 block and a stepping stone is how
                 high you raise your foot.`,
                
                `Don't be pushed around by the fears
                 in your mind.Be led by the dreams in
                 your heart`,
                
                `Success is not the key to happiness.
                 Happiness is the key to success.if you
                 love what you doing,you will successful`,
                
                `The future belongs to those who
                 believe in the beauty of their
                 dreams.`,
                
                `Believe in yourself,take on your
                 challenges,dig deep within yourself
                 to conquer fears.Never let anyone
                 bring you down.`];

const author =[`-Sam Levenson`,
               `-Winston Churchill`,
               `-Eleanor Roosevelt`,
               `-Chinese Proverb`,
               `-Unknown`,
               `-Benny Lewis`,
               `-Roy T.Bennett`,
               `-Albert Schweitzer`,
               `-Franklin D.Roosevelt`,
               `-Chantal Sutherland`];


console.log(quotes);
console.log(author);

const generatebutton = document.querySelector('.generate');

let value = 0;
const generate = function(){
        
    const random =Math.random();
    
    value = Math.floor(random*10);
    document.querySelector('.js-quote')
    .innerHTML = quotes[value];

    document.querySelector('.js-author')
    .innerHTML = author[value];

};

generatebutton.addEventListener('click',generate);
generatebutton.addEventListener('Enter',generate);

document.querySelector('.js-quote')
.innerHTML = quotes[value];

document.querySelector('.js-author')
.innerHTML = author[value];


