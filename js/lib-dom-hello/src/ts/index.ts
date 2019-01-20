/**
 * ボタンのクリックイベントに`Hello, World!`アラートを設定する
 * @param button 
 */
function helloWorld (button: HTMLButtonElement) {
    const msg = 'Hello, World!'
    button.addEventListener('click', () => {
        alert(msg)
    })
}