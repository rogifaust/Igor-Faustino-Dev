function generatenumber() {

    const min = Math.ceil(document.querySelector('.input-one').value)
    const max = Math.floor(document.querySelector('.input-two').value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)




}
