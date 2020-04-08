import pic1 from "./images/1.jpg";
import pic2 from "./images/2.jpg";
import pic3 from "./images/3.jpg";
import pic4 from "./images/4.jpg";
import pic5 from "./images/5.jpg";
import pic6 from "./images/6.jpg";
import pic7 from "./images/7.jpg";
import pic8 from "./images/8.jpg";
import pic9 from "./images/9.jpg";
// import pic10 from "./images/10.jpg";

// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
// }
const pics = [
  { pic: pic1, pairId: 1 },
  { pic: pic1, pairId: 1 },
  { pic: pic2, pairId: 2 },
  { pic: pic2, pairId: 2 },
  { pic: pic3, pairId: 3 },
  { pic: pic3, pairId: 3 },
  { pic: pic4, pairId: 4 },
  { pic: pic4, pairId: 4 },
  { pic: pic5, pairId: 5 },
  { pic: pic5, pairId: 5 },
  { pic: pic6, pairId: 6 },
  { pic: pic6, pairId: 6 },
  { pic: pic7, pairId: 7 },
  { pic: pic7, pairId: 7 },
  { pic: pic8, pairId: 8 },
  { pic: pic8, pairId: 8 },
  { pic: pic9, pairId: 9 },
  { pic: pic9, pairId: 9 },
  // { pic: pic10, pairId: 10, },
  // { pic: pic10, pairId: 10, },
];

// shuffleArray(pics);

// const pics2 = pics.map((card, index) => {
//   card.id = index;
//   return card;
// });

export default pics;
