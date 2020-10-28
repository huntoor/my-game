function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function(e) {
  if (e.key === 'ArrowDown') {
  const currtop = extractPos(avatar.style.top);
  avatar.style.top = `${currtop + 50}px`;
  }
  else if (e.key === 'ArrowUp') {
    const currtop = extractPos(avatar.style.top);
    avatar.style.top = `${currtop - 50}px`;
  }
  else if (e.key === 'ArrowRight') {
    const currleft= extractPos(avatar.style.left);
    avatar.style.left = `${currleft + 50}px`;
    avatar.style.transform = 'scale(1,1)'
  }
  else if (e.key === 'ArrowLeft') {
    const curraleft = extractPos(avatar.style.left);
    avatar.style.left = `${curraleft - 50}px`;
    avatar.style.transform = 'scale(-1,1)'
  }
  if (isTouching(avatar, coin)) {
    alert('alf mabrok ya 7op');
    moveCoin();
  }
});

const extractPos = (pos) => {
  if (!pos) return 50;
  return parseInt(pos.slice(0,-2)); 
}

const moveCoin = () => {
  const y = Math.floor(Math.random() * window.innerHeight);
  const x = Math.floor(Math.random() * window.innerWidth);
  coin.style.top = `${y}px`
  coin.style.left = `${x}px`
}

moveCoin();