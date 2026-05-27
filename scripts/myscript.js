
const quizData = [
    {
        question: "1. Nasıl bir sabaha uyanmak istersin?",
        options: [
            { text: "Hızlı, aşırı dinamik ve yüksek enerjili!", score: "A" },
            { text: "Yavaş, huzurlu, sade ve kitap kokulu...", score: "B" },
            { text: "Bol muhabbetli, neşeli, tatlı ve keyifli!", score: "C" },
            { text: "Geleneksel, oturaklı ve güne sakin başlayan.", score: "D" }
        ]
    },
    {
        question: "2. Senin için en ideal çalışma / ders çalışma ortamı hangisidir?",
        options: [
            { text: "Yüksek tempolu, odaklanma gerektiren keskin bir ortam", score: "A" },
            { text: "Sessiz, loş ışıklı bir kütüphane veya çalışma odası", score: "B" },
            { text: "Arkadaşlarımla toplandığım cıvıl cıvıl, modern bir kafe", score: "C" },
            { text: "Kendi evimde, balkonda ya da tanıdık konforlu bir köşede", score: "D" }
        ]
    },
    {
        question: "3. Bir kahve dükkanında menüde ilk neye bakarsın?",
        options: [
            { text: "Yoğun, sert, aromatik ve gurme çekirdeklere", score: "A" },
            { text: "Klasik, yumuşak içimli ve sade demlenmiş kahvelere", score: "B" },
            { text: "Bol kremalı, çikolatalı, şuruplu veya dondurmalı tatlara", score: "C" },
            { text: "Köpüğü bol, falı çıkan ya da sütü tam kıvamında klasiklere", score: "D" }
        ]
    },
    {
        question: "4. Yoğun bir günün ardından kendini nasıl ödüllendirirsin?",
        options: [
            { text: "Hızlıca spora veya yürüyüşe giderek deşarj olurum", score: "A" },
            { text: "Yalnız başıma müzik dinler, kafamı dinlendiririm", score: "B" },
            { text: "Güzel bir tatlı yer, kendimi şımartırım", score: "C" },
            { text: "Eşle dostla bir araya gelip günün kritiğini yaparım", score: "D" }
        ]
    },
    {
        question: "5. Bir tasarım projesinde en çok hangi renk tonları seni yansıtır?",
        options: [
            { text: "Net, keskin, koyu ve iddialı tonlar", score: "A" },
            { text: "Modern, minimalist, pastel ve krem tonları", score: "B" },
            { text: "Cıvıl cıvıl, rengarenk ve eğlenceli tonlar", score: "C" },
            { text: "Toprak tonları, kahverengi ve nostaljik esintiler", score: "D" }
        ]
    }
];

let currentQuestionIndex = 0;
let scores = { A: 0, B: 0, C: 0, D: 0 };

const questionElement = document.getElementById("quiz-question");
const optionsContainer = document.getElementById("quiz-options");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const resultTitle = document.getElementById("result-title");
const resultDesc = document.getElementById("result-desc");

function showQuestion() {
    if (!questionElement || !optionsContainer) return; 
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsContainer.innerHTML = "";
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.text;
        button.classList.add("quiz-btn");
        button.onclick = () => selectOption(option.score);
        optionsContainer.appendChild(button);
    });
}

function selectOption(scoreType) {
    scores[scoreType]++;
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    
    let maxScore = Math.max(scores.A, scores.B, scores.C, scores.D);
    
    if (scores.A === maxScore) {
        if (scores.B > 0) {
            resultTitle.innerText = "Sizin Kahveniz: CORTADO veya MACCHIATO! ☕";
            resultDesc.innerText = "Sert kahve seviyorsunuz ama çok az süt dokunuşuna da hayır demiyorsunuz. Espresso yoğunluğunu kadifemsi süt köpüğüyle buluşturan Cortado veya Macchiato tam size göre!";
        } else {
            resultTitle.innerText = "Sizin Kahveniz: Saf ve Güçlü Bir ESPRESSO! 🔥";
            resultDesc.innerText = "Siz tam bir enerji küpüsünüz! Net, hızlı ve etkili sonuçları seviyorsunuz. Sizi ancak İtalyan barlarından fırlamış, yoğun ve keskin bir Espresso ayıltabilir.";
        }
    } 
    else if (scores.B === maxScore) {
        if (scores.A > 0) {
            resultTitle.innerText = "Sizin Kahveniz: Modern Bir COLD BREW! 🧊";
            resultDesc.innerText = "Sade ve nitelikli kahve seviyorsunuz ama aynı zamanda yenilikçisiniz. 16 saat boyunca soğuk demlenen, gövdeli ve ferahlatıcı bir Cold Brew tam sizin aradığınız derinlik.";
        } else {
            resultTitle.innerText = "Sizin Kahveniz: Klasik Nitelikli FİLTRE KAHVE! ☕";
            resultDesc.innerText = "Siz huzurun, minimalizmin ve sakinliğin sembolüsünüz. Gösterişten uzak, pastel ve şık detayları seviyorsunuz. Ruhunuza en iyi eşlik edecek şey, demlendikçe güzelleşen berrak bir Filtre Kahve.";
        }
    } 
    else if (scores.C === maxScore) {
        if (scores.A > 0) {
            resultTitle.innerText = "Sizin Kahveniz: Yoğun Çikolatalı CAFFE MOCHA! 🍫";
            resultDesc.innerText = "Hem kahve sertliği olsun hem de çikolatanın o zengin, tatlı dünyası beni şımartsın diyorsunuz. Modunuzu anında yükseltecek bol kremalı ve çikolatalı bir Mocha tam size göre.";
        } else if (scores.B > 0) {
            resultTitle.innerText = "Sizin Kahveniz: Gurme Bir AFFOGATO! 🍨";
            resultDesc.innerText = "Siz hayatın tadını çıkarmayı, estetiği ve küçük şımartılmaları çok seviyorsunuz. Vanilyalı dondurmanın üzerine dökülen sıcak Espresso gibi hem kontrastlı hem de kusursuz bir tatlı-kahve deneyimi sizi yansıtıyor.";
        } else {
            resultTitle.innerText = "Sizin Kahveniz: Bol Köpüklü Kadifemsi LATTE! 🥛";
            resultDesc.innerText = "Neşeli, sosyal ve etrafına ışık saçan birisiniz. Arkadaşlarınızla yaptığınız tatlı sohbetlerin keyfi sizde ayrı. Sizin kahveniz de tam karakteriniz gibi yumuşacık, dengeli ve içimi çok keyifli bir Latte!";
        }
    } 
    else {
        resultTitle.innerText = "Sizin Kahveniz: Geleneksel Bol Köpüklü TÜRK KAHVESİ! 🇹🇷";
        resultDesc.innerText = "Siz dostluğa, hatıralara ve nostaljiye büyük değer veriyorsunuz. Kırk yıl hatırı olan, okkalı, bol köpüklü ve yanında lokumuyla servis edilen geleneksel bir Türk Kahvesi sizin vazgeçilmeziniz.";
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    scores = { A: 0, B: 0, C: 0, D: 0 };
    resultBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    showQuestion(); 
}

function sepeteEkle(urunAdi, fiyat, resimYolu) {
    const adetInput = document.getElementById('quantity');
    const adet = adetInput ? parseInt(adetInput.value) : 1;

    let sepet = JSON.parse(localStorage.getItem('kahveSepeti')) || [];
    const varOlanUrun = sepet.find(item => item.ad === urunAdi);

    if (varOlanUrun) {
        varOlanUrun.adet += adet;
    } else {
        sepet.push({ ad: urunAdi, fiyat: parseInt(fiyat), resim: resimYolu, adet: adet });
    }

    localStorage.setItem('kahveSepeti', JSON.stringify(sepet));
    alert(urunAdi + " sepetinize eklendi! 🎉");
    
    if (window.location.pathname.includes("pages/")) {
        window.location.href = "sepet.html";
    } else {
        window.location.href = "pages/sepet.html";
    }
}

function sepetiListele() {
    const konteyner = document.getElementById('cart-items-container');
    if (!konteyner) return; 

    let sepet = JSON.parse(localStorage.getItem('kahveSepeti')) || [];
    konteyner.innerHTML = ""; 

    if (sepet.length === 0) {
        konteyner.innerHTML = "<p style='font-size:1.2rem; color:#888; padding: 20px;'>Sepetiniz şu anda boş. Keşfe çıkıp ürün ekleyin! ☕</p>";
        document.getElementById('subtotal-price').innerText = "0,00 TL";
        document.getElementById('total-price').innerText = "0,00 TL";
        return;
    }

    let toplamGenel = 0;

    sepet.forEach((urun, index) => {
        let urunToplamFiyat = urun.fiyat * urun.adet;
        toplamGenel += urunToplamFiyat;

        let gosterilecekResim = urun.resim;
        if (!gosterilecekResim.startsWith("../") && !window.location.pathname.includes("index.html")) {
            gosterilecekResim = "../" + gosterilecekResim;
        }

        konteyner.innerHTML += `
            <div class="cart-item" style="display: flex; align-items: center; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); margin-bottom: 20px; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 20px;">
                    <img src="${gosterilecekResim}" alt="${urun.ad}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 6px;">
                    <div>
                        <h3 style="font-size: 1.1rem; color: #4a3b32; margin-bottom: 5px;">${urun.ad}</h3>
                        <p style="color: #888; font-size: 0.9rem;">Birim Fiyat: ${urun.fiyat},00 TL</p>
                    </div>
                </div>
                <div style="font-weight: bold; color: #4a3b32;">${urun.adet} Adet</div>
                <div style="font-weight: bold; color: #c05c36;">${urunToplamFiyat},00 TL</div>
                <button class="delete-item-btn" data-index="${index}" style="background: none; border: none; color: #e74c3c; cursor: pointer; font-size: 1.5rem; line-height: 1;">×</button>
            </div>
        `;
    });

    document.getElementById('subtotal-price').innerText = toplamGenel + ",00 TL";
    document.getElementById('total-price').innerText = toplamGenel + ",00 TL";

    const silmeButonlari = document.querySelectorAll('.delete-item-btn');
    silmeButonlari.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = e.target.getAttribute('data-index');
            sepettenSil(parseInt(idx));
        });
    });
}

function sepettenSil(index) {
    let sepet = JSON.parse(localStorage.getItem('kahveSepeti')) || [];
    sepet.splice(index, 1); 
    localStorage.setItem('kahveSepeti', JSON.stringify(sepet)); 
    sepetiListele(); 
}

document.addEventListener("DOMContentLoaded", () => {
    
    if (questionElement) {
        showQuestion();
    }
    
    sepetiListele();

   
    const tumSepetButonlari = document.querySelectorAll('.add-to-cart-btn');
    
    tumSepetButonlari.forEach(buton => {
        buton.addEventListener('click', (e) => {
            e.preventDefault(); 

            let ad, fiyat, resim;

           
            const detayKapsayici = e.target.closest('.detail-order-area');
            
            
            const kartKapsayici = e.target.closest('.product-card');

            if (detayKapsayici) {
                ad = detayKapsayici.getAttribute('data-ad');
                fiyat = detayKapsayici.getAttribute('data-fiyat');
                resim = detayKapsayici.getAttribute('data-resim');
            } else if (kartKapsayici) {
                ad = kartKapsayici.getAttribute('data-ad');
                fiyat = kartKapsayici.getAttribute('data-fiyat');
                resim = kartKapsayici.getAttribute('data-resim');
            }

            
            if (ad && fiyat && resim) {
                sepeteEkle(ad, fiyat, resim);
            }
        });
    });

    const restartBtn = document.getElementById("restart-btn");
    if (restartBtn) {
        restartBtn.addEventListener("click", restartQuiz);
    }

    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            let sepet = JSON.parse(localStorage.getItem('kahveSepeti')) || [];
            if (sepet.length === 0) {
                alert("Sepetiniz boş olduğu için alışverişi tamamlayamazsınız! ☕");
                return;
            }
            alert("Siparişiniz başarıyla alınmıştır! Keyifli kahve saatleri dileriz. ☕✨");
            localStorage.removeItem('kahveSepeti');
            sepetiListele();
        });
    }
});

    const iletisimFormu = document.getElementById('contact-form');
    if (iletisimFormu) {
        iletisimFormu.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const isim = document.getElementById('name').value;
            
        
            alert("Teşekkürler " + isim + "! Mesajınız başarıyla Kahve Gezegeni ekibine ulaştı. En kısa sürede dönüş yapacağız. ☕✨");
            
            iletisimFormu.reset(); 
        });
    }