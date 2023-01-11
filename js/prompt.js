//console.log('Ki Khobor Dusto ?')
//alert('Volo Achoni Dusto ?');

const showAlert = () => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        alert('Kene Color Dusto ????????? ');
    }
}

const askSomething = () => {
    const decision = confirm('Are you coming in Picnic ???');
    console.log(decision);
    if (decision === true) {
        alert('Dusto 500 Tk Bikas kor');
    }
    else {
        console.log('DGM !!! Doore giye Mor !!!!!!');
    }
}

const getUserInfo = () => {
    const name = prompt('Tell us your name, please ?');
    console.log(name);
    if (!!name) {
        console.log('Welcome here,', name);
    }
}