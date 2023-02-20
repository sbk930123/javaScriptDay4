const box = document.querySelectorAll(".box");
const image = document.querySelector(".image");

// for(let i=0; i<box.length; i++) {
//   box[i].addEventListener('dragover', function(e) {
//     e.preventDefault();
//   });
//   box[i].addEventListener('drop', function () {
//     console.log("drop");
//     box[i].appendChild(image);
//   });
// }

box.forEach(function(box) {
  box.addEventListener('dragleave', function() {
    box.classList.remove('hovered')
  })
  box.addEventListener('dragover', function (e) {
    e.preventDefault();
    box.classList.add('hovered')
    console.log('dragover');      
  });
  box.addEventListener('drop', function () {
    console.log('drop');   
    box.classList.remove('hovered')
    box.appendChild(image);   
  });
});

// box[0].addEventListener('dragover', function (e) {
//   e.preventDefault();
//   console.log('dragover');      
// });
// box[1].addEventListener('dragover', function (e) {
//   e.preventDefault();
// console.log('dragover');
// });
// box[2].addEventListener('dragover', function (e) {
//   e.preventDefault();
// console.log('dragover');
// });
// box[3].addEventListener('dragover', function (e) {
//   e.preventDefault();
// console.log('dragover');
// });

// box[0].addEventListener('drop', function () {
//   console.log('drop');   
//   box[0].appendChild(image);   
// });
// box[1].addEventListener('drop', function () {
//   console.log('drop');
//   box[1].appendChild(image);
// });
// box[2].addEventListener('drop', function () {
//   console.log('drop');
//   box[2].appendChild(image);
// });
// box[3].addEventListener('drop', function () {
//   console.log('drop');
//   box[3].appendChild(image);
// });
