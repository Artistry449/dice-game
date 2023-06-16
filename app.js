// Тоглогчийн ээлжийг хадгалах хувьсагч
// Тоглогч 1 -> 0, Тоглогч  2 ->1
var activePlayer = 1;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0,0];

// Тоглогчийн өөрийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч(1-6 дотор утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө)
var dice = Math.floor(Math.random()*6)+1;

// <div class="player-score" id="score-0">42</div>

// document.querySelector('#score-1').innerHTML = '<em>Yes!</em>';

// Програм эхлэхэд бэлтгэх

document.querySelector('.dice').style = "display:none";

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;


console.log('Шоо: ' + dice);