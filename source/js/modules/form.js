const ERROR_PHONE_MESSAGE = 'Введите телефон в фромате 1-123-123-1234';
const PHONE_NUMBER = /1?-?\(?[0-9]{3}[\-\)][0-9]{3}-[0-9]{4}/g;

const phoneInput = document.querySelector('#tel');

const checkForm = () => {
  phoneInput.addEventListener('input', (evt)=> {
    if (!evt.target.value.match(PHONE_NUMBER)) {
      phoneInput.setCustomValidity(ERROR_PHONE_MESSAGE);
    } else {
      phoneInput.setCustomValidity('');
    }

    evt.target.reportValidity('');
  });
};

export {checkForm};

