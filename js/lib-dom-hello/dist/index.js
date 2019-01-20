"use strict";
/**
 * ボタンのクリックイベントに任意のアラートメッセージを設定する
 * @param button
 */
function alertMessage(button, msg) {
    button.addEventListener('click', function () {
        alert(msg);
    });
}
/**
 * ボタンのクリックイベントに`Hello, World!`アラートを設定する
 * @param button
 */
function helloWorld(button) {
    button.addEventListener('click', function () {
        alertMessage(button, 'Hello, World!');
    });
}
/**
 * テキストボックスとラベルをバインドする
 * @param input
 * @param label
 */
function bindText(input, label) {
    if (!input || !label) {
        console.error('Undefined input or label!');
    }
    input.addEventListener('input', function () {
        label.innerHTML = input.value;
    });
}
