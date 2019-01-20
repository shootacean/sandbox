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
