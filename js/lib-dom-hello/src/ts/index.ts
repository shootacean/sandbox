/**
 * ボタンのクリックイベントに`Hello, World!`アラートを設定する
 * @param button 
 */
function helloWorld (button: HTMLButtonElement) {
    const msg: string = 'Hello, World!'
    button.addEventListener('click', () => {
        alert(msg)
    })
}