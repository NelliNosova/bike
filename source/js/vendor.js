// import './vendor/swiper';
import iMask from 'imask';

const phoneInput = document.querySelector('#tel');

const checkForm = () => {
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  };
  const mask = iMask(phoneInput, maskOptions);

  return mask;
};

export {checkForm};
