function lab2(){
    window.location.href = "lab2.html";
}
const changeText = {
    Theme: `Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ. 
    <br>
    Мета: придбати практичні навички роботи  з селекторами, ідентифікаторами, списками,  різноманітними властивостями кольору і фону,  зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів
    <br>
    Розташування сайту: https://github.com/Zmih54/zmihLabs
    <br>
    Розташування звіту:`,


    Styles: "У цій лабораторній роботі був використаний спосіб підключення зовнішнього СSS файлу",
    SelectorsTags   : `<a href="https://prnt.sc/wodL-kYXdSYN">Посилання на зображення СSS</a>
    <br>
    <a href="https://prnt.sc/I6dtFZ748xl7">Посилання на зображення HTML</a>
    <br>
    <a href="https://prnt.sc/0z3gqwu8MyPV">Посилання на зображення результату</a>`,
    SelectorsClasses: `<a href="https://prnt.sc/mom_CePvgOvy">Посилання на зображення CSS</a>
    <br>
    <a href="https://prnt.sc/_evNqBEOLLoL">Посилання на зображення HTML</a>
    <br>
    <a href="https://prnt.sc/-VqAUGCb9PXc">Посилання на зображення результату</a>`,
    SelectorId      : `<a href="https://prnt.sc/fV1BozrTEq4k">Посилання на зображення CSS</a>
    <br>
    <a href="https://prnt.sc/I6dtFZ748xl7">Посилання на зображення HTML</a>
    <br>
    <a href="https://prnt.sc/q0xvjN15ojzu">Посилання на зображення результату</a>`,
    OtherSelectors  : `<a href="https://prnt.sc/fyXu8Ob3S_Mv">Сусідні селектори CSS</a>
    <br>
    <a href="https://prnt.sc/2928DQ39Zmeo">Сусідні селектори результат</a>
    <br>
    <a href="https://prnt.sc/mom_CePvgOvy">Дочірні селектори CSS</a>
    <br>
    <a href="https://prnt.sc/-VqAUGCb9PXc">Дочірні селектори результат</a>
    <br>
    <a href="https://prnt.sc/Pu_4-Sa4jD7o">Селектори атрибутів CSS</a>
    <br>
    <a href="https://prnt.sc/xCKh_HB4pUXo">Селектори атрибутів результат</a>   `,
    FontPlus        : `<a href='https://prnt.sc/wodL-kYXdSYN'>Шрифти</a>
    <br>
    <a href='https://prnt.sc/yLLxuBBAxWUV'>Контури</a>
    <br>
    <a href='https://prnt.sc/MuHKgR1Pon-e'>Фон</a>
    <br>
    <a href='https://prnt.sc/BN9ATNcNmUnE'>Колір тексту</a>
    <br>
    <a href='https://prnt.sc/FAfI7yOTSvew'>Властивості для списків</a>
    <br>
    <a href='https://prnt.sc/VwhLN5L86p17'>CSS Просунутий</a>`
    ,
    Conclusions     : `Під час виконання лабораторної роботи я ознайомився з мовою програмування СSS,
    а також засвоїв основні принципи роботи з нею. Я дізнався про селектори, ідентифікатори, списки, та трохи попрактикувався з програмуванням на мові JavaScript.`,
    changeTheme: function(){document.getElementById("workspace").innerHTML =changeText.Theme;},
    changeStyles: function(){document.getElementById("workspace").innerHTML =changeText.Styles;},
    changeSelectorsTags: function(){document.getElementById("workspace").innerHTML =changeText.SelectorsTags;}, 
    changeSelectorsClasses: function(){document.getElementById("workspace").innerHTML =changeText.SelectorsClasses;},               
    changeSelectorId: function(){document.getElementById("workspace").innerHTML =changeText.SelectorId;},
    changeOtherSelectors: function(){document.getElementById("workspace").innerHTML =changeText.OtherSelectors;},
    changeFontPlus: function(){document.getElementById("workspace").innerHTML =changeText.FontPlus;},
    changeConclusions: function(){document.getElementById("workspace").innerHTML =changeText.Conclusions;},

}