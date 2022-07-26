// 3D Scroll

// Расстояние по оси z
let zSpacing = -1000;

lastPos = zSpacing / 5;
// getElementsByClassName чтобы можно было работать как с массивом
($frames = document.getElementsByClassName('frame')),
  (frames = Array.from($frames)),
  // Будем наполнять значениями по оси z
  (zVals = []);

window.onscroll = function () {
  let top = document.documentElement.scrollTop,
    // Определяет последнюю позицию
    delta = lastPos - top;

  lastPos = top;

  frames.forEach(function (n, i) {
    zVals.push(i * zSpacing + zSpacing);
    zVals[i] += delta * -5.5;
    let frame = frames[i],
      transform = `translateZ(${zVals[i]}px)`;
    opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
  });
};

// window.scrollTo(0, 1)

// Audio

// let soundButton = document.querySelector('.soundbutton'),
// 		audio = document.querySelector('.audio')

// soundButton.addEventListener('click', e => {
// 	soundButton.classList.toggle('paused')
// 	audio.paused ? audio.play() : audio.pause()
// })

// window.onfocus = function() {
// 	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
// }

// window.onblur = function() {
// 	audio.pause()
// }
