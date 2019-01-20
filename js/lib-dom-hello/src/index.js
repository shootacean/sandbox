// buttonに関数を適用したら、クリックイベントにAlertが設定される
function helloWorld (button) {
    const msg = 'Hello, World!';
    button.addEventListener('click', () => {
        alert(msg);
    })
}