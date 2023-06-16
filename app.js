// Тоглогчийн ээлжийг хадгалах хувьсагч
// Тоглогч 1 -> 0, Тоглогч  2 ->1
var activePlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн өөрийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч(1-6 дотор утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө)

// Програм эхлэхэд бэлтгэх
document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";

document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";

var diceDom = document.querySelector('.dice');
diceDom.style = "display:none";

// Шоог шидэх Event Listener
document.querySelector('.btn-roll').addEventListener('click',
    function () {
        // 1-6 дотор санамсаргүй тоог гаргаж авах
        var diceNumber = Math.floor(Math.random() * 6) + 1;

        // Шооны зургыг вэб дээр гаргаж ирнэ
        diceDom.style.display = "block";

        // Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирэх
        diceDom.src = "dice-" + diceNumber + ".png";

        // Буусан тоо 1-ээс ялгаатай бол идэвхитэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ
        if (diceNumber !== 1) {
            // 1-ээс ялгаатай тоо буусан тул буусан тоог тоглогчийн оноонд нэмж өгнө
            roundScore += diceNumber;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
        // 1 буусан тул тоглогчийн ээлжийг сольно
        else {
            // Ээлжиндээ буулгасан оноог 0 болгоно
            document.getElementById("current-" + activePlayer).textContent = 0;
            scores[activePlayer] += roundScore;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            roundScore = 0;


            // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

            // Улаан цэгийг шилжүүлэх

            document.querySelector(".player-" + activePlayer + "-panel").classList.toggle("active");

            // Шоог түр алга болгоно
            diceDom.style.display = "none";
        }
    });
