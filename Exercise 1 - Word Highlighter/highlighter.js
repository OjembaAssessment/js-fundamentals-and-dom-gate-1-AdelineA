// console.log("Exercise 1 - Word Highlighter");

const highLightedWord = document.getElementById('myParagraph');



const myhighlighter = highLightedWord.textcontent;
const words = myhighlighter.trim().split(/\S+/) ;
const wordOccured = {};
words.forEach((word)=>{
    if(wordOccured.hasOwnProperty(word)){
        wordOccured[word]++;
    }else{
        wordOccured[word] = 1
    }
});

const sortingWords = Object.entries(wordOccured).sort((a,b)=> a[1] - b[1]);
console.log(sortingWords)

const mostOccuringWord = sortingWords.slice(0,5)
if(mostOccuringWord[0] === mostOccuringWord[0].toUpperCase() ){
    console.log(mostOccuringWord)
   mostOccuringWord.innerHtml = `
   ${mostOccuringWord}
   mostOccuringWord.style = 'line-Through'
    ` 
}

