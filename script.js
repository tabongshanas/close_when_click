"used strick"

const modelBtn = document.querySelector('.model-btn');
const readMore = document.querySelector('.read-more');
const model = document.querySelector('.model');
const modelTimes = document.querySelector('.model-times');
const modelTimes2 = document.querySelector('.times2');
const modelTimes3 = document.querySelector('.times3');
const layer = document.querySelector('.layer');
const video = document.querySelector('.video');
const calco = document.querySelector('.calco');
const watchVideoBtn = document.querySelector('.watch-video-btn');


// js of calco
const inputEl = document.getElementById("input");

function mainBtnDisplay(input) {
    inputEl.value += input;
}

function clearInput() {
    inputEl.value = "";
}

function calculate() {
    try {
        inputEl.value = eval(inputEl.value);
    }

    catch(error) {
        inputEl.value = "Math Error!";
    }
}



let userName = prompt('Please, what is your name (Choice any of your names):');

function closeModal() {
    model.classList.add('hidden');
    layer.classList.add('hidden');
} 

function openModel() {
    model.classList.remove('hidden');
    layer.classList.remove('hidden');
}


// opening the modal 
modelBtn.addEventListener('click' , openModel);

// closing the modal
modelTimes.addEventListener('click' , closeModal);
layer.addEventListener('click' , closeModal);



// video functionnality

modelTimes2.addEventListener('click' , function() {
    video.classList.add('hidden');
    modelTimes2.classList.add('hidden');
    model.classList.remove('hidden');
});


watchVideoBtn.addEventListener('click' , function() {
    let name = prompt('Please, what is your name:');
    // const wantName = 'nama';

    if (name === userName && name !== null) {
        alert(`${userName}, You are welcome to the Video page, click OK to 'ENJOY'`);
        video.classList.remove('hidden');
        model.classList.add('hidden');
        modelTimes2.classList.remove('hidden');
    }

    else if (userName === null) {
        alert('Please, you have to ENTER a string (atlest one character). Click OK to continue');
    }

    else {
        alert(`${name}, is NOT your name. (click OK to continue)`);
        model.classList.add('hidden');
        layer.classList.add('hidden');
    }
})



// calculator functionnality
readMore.addEventListener('click' , function() {
    const name = prompt('Please, what is your name:');

    if (name === userName && name !== null) {
        alert(`${userName}, You are welcome to Shasy Camo Calculator page, click OK to 'ENJOY'`);
        calco.classList.remove('hidden');
        model.classList.add('hidden');
        modelTimes3.classList.remove('hidden');
    }

    else if (userName === null) {
        alert('Please, you have to ENTER a string (atlest one character). Click OK to continue');
    }

    else {
        alert(`${name}, is NOT your name. (click OK to continue)`);
        model.classList.add('hidden');
        layer.classList.add('hidden');
    }
});

modelTimes3.addEventListener('click' , function() {
    calco.classList.add('hidden');
    modelTimes3.classList.add('hidden');
    model.classList.remove('hidden');
});
