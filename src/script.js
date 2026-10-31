const yesLink = document.querySelector('.modal-button');
let clickCount = 0;
const requiredClicks = 16;
const modalText = document.querySelector('.modal-h1')

yesLink.addEventListener('click', (event) => {
  clickCount += 1;

  if (clickCount >= requiredClicks) {
    return;
  }

   modalText.style.marginBottom = '213px'

  event.preventDefault();
  yesLink.style.position = 'fixed';
  yesLink.style.marginTop = '0';

  const buttonRect = yesLink.getBoundingClientRect();
  const areaWidth = Math.min(1300, window.innerWidth);
  const areaHeight = Math.min(900, window.innerHeight);
  const maxX = Math.max(0, areaWidth - buttonRect.width);
  const maxY = Math.max(0, areaHeight - buttonRect.height);

  yesLink.style.left = `${Math.floor(Math.random() * (maxX + 1))}px`;
  yesLink.style.top = `${Math.floor(Math.random() * (maxY + 1))}px`;

});

function showModal() {
  const modal = document.querySelector('.modal');
  modal.style.display = 'flex';
}