// Find the first longest word in list
//Input : ['love','easy','frontend']
//Output: frontend

const findTheLongestWord = (wordList) => {

    if (!Array.isArray(wordList) || wordList.length === 0) return null;
    return wordList.reduce((theLongestWord, currentWord) => {
        return theLongestWord.length > currentWord.length ? theLongestWord : currentWord;
    }, wordList[0])
}

function PrinfTheLongestWord() {
    return (<>
        <div> The longest word is : {findTheLongestWord(['Cao', 'Cao Van', 'Cao Van Sang', 'Cao Van Sang', 'I am Cao Van Sang'])}</div>
    </>);
}

export default PrinfTheLongestWord