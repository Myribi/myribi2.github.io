

function languages(table) {
    let sentence = "This page was built using: ";

    if (table.length === 1) {
        sentence = sentence.concat(table[0]);
        sentence = sentence.concat(".");
    } else {

        for (i = 0; i < table.length - 2; i++) {
            sentence = sentence.concat(table[i]);
            sentence = sentence.concat(', ')
        }
        sentence = sentence.concat(table[table.length - 2]);
        sentence = sentence.concat(" and ");
        sentence = sentence.concat(table[table.length - 1]);
        sentence = sentence.concat(".");

    }
    return sentence;
}



const codingLanguageList = ['HTML', "CSS", "JavaScript"];
const footerPhrase = document.getElementById('languages');
footerPhrase.innerHTML = languages(codingLanguageList);

