/**
 * ボタンのクリックイベントに任意のアラートメッセージを設定する
 * @param button 
 */
function alertMessage(button: HTMLButtonElement, msg: string) {
    button.addEventListener('click', () => {
        alert(msg)
    })
}

/**
 * ボタンのクリックイベントに`Hello, World!`アラートを設定する
 * @param button 
 */
function helloWorld(button: HTMLButtonElement) {
    button.addEventListener('click', () => {
        alertMessage(button, 'Hello, World!')
    })
}

/**
 * テキストボックスとラベルをバインドする
 * @param input 
 * @param label 
 */
function bindText(input: HTMLInputElement, label: HTMLLabelElement) {
    if (!input || !label) {
        console.error('Undefined input or label!')
    }
    input.addEventListener('input', () => {
        label.text = input.value
    })
}