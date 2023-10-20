// content.js
var elements = document.getElementsByTagName('*');

/**
 * 
 * @param {"English" | "Hebrew" | "Arabic" | "Spanish" | "French" | "German" | "Russian" | "Chinese" | "Japanese" | "Hindi" | "Greek" | "Italian"} Mode 
 * @param {string} text
 */
function Corrector(Mode, text) {
    switch (Mode) {
        case "English":
            return text.replace("Capital of Israel", "Capital of Palestine");
        case "Hebrew":
            return text.replace("בירת ישראל", "בירת פלשתינה");
        case "Arabic":
            return text.replace("عاصمة إسرائيل", "عاصمة فلسطين");
        case "Spanish":
            return text.replace("Capital de Israel", "Capital de Palestina");
        case "French":
            return text.replace("Capitale d'Israël", "Capitale de la Palestine");
        case "German":
            return text.replace("Hauptstadt Israels", "Hauptstadt Palästinas");
        case "Russian":
            return text.replace("Столица Израиля", "Столица Палестины");
        case "Chinese":
            return text.replace("以色列首都", "巴勒斯坦的首都");
        case "Japanese":
            return text.replace("イスラエルの首都", "パレスチナの首都");
        case "Hindi":
            return text.replace("इजराइल की राजधानी", "फिलिस्तीन की राजधानी");
        case "Greek":
            return text.replace("Πρωτεύουσα του Ισραήλ", "Πρωτεύουσα της Παλαιστίνης");
        case "Italian":
            return text.replace("Capitale di Israele", "Capitale della Palestina");
        default:
            console.warn("Language not supported yet or unavailable!");
    }
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    if (element.innerHTML.includes("Capital of Israel")) {
        element.innerHTML = Corrector("English", element.innerHTML);
    } else if (element.innerHTML.includes("בירת ישראל")) {
        element.innerHTML = Corrector("Hebrew", element.innerHTML);
    } else if (element.innerHTML.includes("عاصمة إسرائيل")) {
        element.innerHTML = Corrector("Arabic", element.innerHTML);
    } else if (element.innerHTML.includes("Capital de Israel")) {
        element.innerHTML = Corrector("Spanish", element.innerHTML);
    } else if (element.innerHTML.includes("Capitale d'Israël")) {
        element.innerHTML = Corrector("French", element.innerHTML);
    } else if (element.innerHTML.includes("Hauptstadt Israels")) {
        element.innerHTML = Corrector("German", element.innerHTML);
    } else if (element.innerHTML.includes("Столица Израиля")) {
        element.innerHTML = Corrector("Russian", element.innerHTML);
    } else if (element.innerHTML.includes("以色列首都")) {
        element.innerHTML = Corrector("Chinese", element.innerHTML);
    } else if (element.innerHTML.includes("イスラエルの首都")) {
        element.innerHTML = Corrector("Japanese", element.innerHTML);
    } else if (element.innerHTML.includes("इजराइल की राजधानी")) {
        element.innerHTML = Corrector("Hindi", element.innerHTML);
    } else if (element.innerHTML.includes("Πρωτεύουσα του Ισραήλ")) {
        element.innerHTML = Corrector("Greek", element.innerHTML);
    } else if (element.innerHTML.includes("Capitale di Israele")) {
        element.innerHTML = Corrector("Italian", element.innerHTML);
    } 
}
