/**
 * ボタンのクリックイベントに任意のアラートメッセージを設定する
 * @param button 
 */
function alertMessage (button: HTMLButtonElement, msg: string) {
    button.addEventListener('click', () => {
        alert(msg)
    })
}

/**
 * ボタンのクリックイベントに`Hello, World!`アラートを設定する
 * @param button 
 */
function helloWorld (button: HTMLButtonElement) {
    button.addEventListener('click', () => {
        alertMessage(button, 'Hello, World!')
    })
}