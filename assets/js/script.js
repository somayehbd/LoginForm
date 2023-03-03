$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: false,
    autoPlay: true,
    autoPlay: 1500,
    setGallerySize: false,
    prevNextButtons: false
});

// send Post request to api
const LoginForm = document.getElementById('form')

const handleLoginForm = (e) => {
    e.preventDefault();

    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    myHeaders = { "Content-Type": "application/json" };

    let raw = JSON.stringify({
        "email": email.value,
        "password": password.value,

    });


    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch('http://localhost:3100/register', requestOptions)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(data => {
            console.log(data)
            alert(JSON.stringify(data))

            console.log(`email:${email.value}\npasswoed:${password.value}`)
            email.value = ''

        })
        .catch(() => { })

}

form.addEventListener('submit', handleLoginForm)