function changeLetter(letter) {
    tester.textContent = letter;
}
let currentSize = 30
function changeFontSize(delta){
    currentSize = currentSize + delta;
    tester.style.fontSize = `${currentSize}px`;

    if (currentSize<5) {
        currentSize=5;
    }
}
let currentSpacing = 100
function changeFontSize(alpha){
    currentSpacing = currentSpacing + alpha;
    tester.style.lineHeight = `${currentSpacing}%`;

    if (currentSpacing<90) {
        currentSize=90;
    }
}
console.log(currentSize)

let smallPg ="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas."
let bigPg ="Lorem ipsum dolor sit amet consectetur adipiscing elit illum. Id adipiscing soluta cumque corrupti expedita tempore et aliquip non. Ut et quas occaecat deserunt nulla praesentium autem et quos labore officia. Quo adipiscing quo voluptas id voluptas non libero. Incididunt consectetur deleniti eu exercitation voluptas possimus dolorem nulla dolores in non in. Voluptas placeat qui possimus qui fugiat consequatur aliquip qui deserunt aute mollit. Sunt minim repellendus tempore accusamus sunt. Aliquip irure adipiscing voluptas sint ut amet sed ullamco et. Minus quo enim eligendi cumque eligendi. Libero qui quod est eos esse. Cupidatat quas fugiat nihil quas mollitia facilis tempor sunt omnis aut. Optio ducimus quis irure et est irure ut repellendus pariatur nulla. Veniam et voluptatum proident do duis. Eos laboris nisi irure provident accusamus vero soluta. Ducimus in ut at velit placeat cupidatat aliqua."