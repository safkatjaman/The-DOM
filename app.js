var input = document.createElement('input');
input.classList = 'color-input';
input.placeholder = 'Enter a color name'

document.querySelector('.superDiv').appendChild(input);

var colorDiv = document.createElement('div');
colorDiv.classList = 'color-div';

document.querySelector('.superDiv').appendChild(colorDiv);

var inputClass = document.querySelector('.color-input');
var divClass = document.querySelector('.color-div');

inputClass.addEventListener('change', function () {
      divClass.style.backgroundColor = inputClass.value;
})

var writeSomething = document.createElement('input');
writeSomething.placeholder = 'Write anything here';
writeSomething.classList = 'writing-input';

document.querySelector('.superDiv').appendChild(writeSomething);

var writingClass = document.querySelector('.writing-input');

writingClass.addEventListener('keyup', function () {
      divClass.innerHTML = writingClass.value;

      if (divClass.style.backgroundColor === 'black') {
            divClass.style.color = 'white';
      }
})