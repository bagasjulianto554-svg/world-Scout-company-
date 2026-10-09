// =====================
// NAVBAR MOBILE
// =====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// =====================
// SMOOTH SCROLL
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// =====================
// DATA SOAL KUIS (30 SOAL) + KATEGORI
// =====================
const quizData = [
    // ===== PENEGAK (1-5) =====
    { 
      question: "Pramuka Penegak berusia berapa tahun?",
      options: ["11-15 tahun", "16-20 tahun", "21-25 tahun", "7-10 tahun"], 
      answer: 1,
      kategori: "Pramuka Penegak"
    },
    { 
      question: "Apa nama satuan dalam Pramuka Penegak?",
      options: ["Pasukan", "Perindukan", "Ambalan", "Racana"], 
      answer: 2,
      kategori: "Pramuka Penegak"
    },
    { 
      question: "Siapa yang memimpin Ambalan?",
      options: ["Pratama", "Pradana", "Sulung", "Pinsa"], 
      answer: 1,
      kategori: "Pramuka Penegak"
    },
    { 
      question: "Arti kata 'Bantara' adalah...",
      options: ["Pelaksana", "Pengawal", "Pemimpin", "Penjaga"], 
      answer: 1,
      kategori: "Pramuka Penegak"
    },
    { 
      question: "Berapa jumlah tingkatan dalam Pramuka Penegak?",
      options: ["1", "2", "3", "4"], 
      answer: 1,
      kategori: "Pramuka Penegak"
    },

    // ===== SANDI (6-12) =====
    { 
      question: "Sandi Morse menggunakan simbol...",
      options: ["Angka & huruf", "Titik & garis", "Garis & kotak", "Simbol kimia"], 
      answer: 1,
      kategori: "Sandi"
    },
    { 
      question: "Dalam sandi Morse, huruf 'S' dilambangkan dengan...",
      options: ["...", "---", ".-.", "-.-"], 
      answer: 0,
      kategori: "Sandi"
    },
    { 
      question: "Dalam sandi Morse, huruf 'O' dilambangkan dengan...",
      options: ["...", "---", ".-.", "-.-"], 
      answer: 1,
      kategori: "Sandi"
    },
    { 
      question: "Sandi A1Z26 artinya...",
      options: ["A=1, Z=26", "A=26, Z=1", "A=0, Z=25", "A=1, Z=1"], 
      answer: 0,
      kategori: "Sandi"
    },
    { 
      question: "Sandi Rumput menggunakan lambang...",
      options: ["Kotak", "Garis panjang & pendek", "Angka", "Titik saja"], 
      answer: 1,
      kategori: "Sandi"
    },
    { 
      question: "Sandi Napoleon ditulis dengan cara...",
      options: ["Dibalik per kelompok", "Ditambah", "Dikali", "Dikurangi"], 
      answer: 0,
      kategori: "Sandi"
    },
    { 
      question: "Sandi Kotak I menggunakan berapa kotak?",
      options: ["2 kotak", "3 kotak", "4 kotak", "9 kotak"], 
      answer: 1,
      kategori: "Sandi"
    },

    // ===== TALI TEMALI (13-19) =====
    { 
      question: "Simpul untuk menyambung 2 tali sama besar adalah...",
      options: ["Simpul Hidup", "Simpul Mati", "Simpul Tiang", "Simpul Laso"], 
      answer: 1,
      kategori: "Tali Temali"
    },
    { 
      question: "Simpul yang bisa digeser/dilonggarkan adalah...",
      options: ["Simpul Mati", "Simpul Hidup", "Simpul Jangkar", "Simpul Anyam"], 
      answer: 1,
      kategori: "Tali Temali"
    },
    { 
      question: "Ikatan untuk 2 tongkat tegak lurus (90°) disebut...",
      options: ["Ikatan Silang", "Ikatan Palang", "Ikatan Kaki Tiga", "Ikatan Canggah"], 
      answer: 1,
      kategori: "Tali Temali"
    },
    { 
      question: "Simpul untuk mengikat tali ke tiang adalah...",
      options: ["Simpul Mati", "Simpul Tiang", "Simpul Anyam", "Simpul Kembar"], 
      answer: 1,
      kategori: "Tali Temali"
    },
    { 
      question: "Simpul untuk menyambung 2 tali berbeda ukuran adalah...",
      options: ["Simpul Mati", "Simpul Anyam", "Simpul Laso", "Simpul Kembar"], 
      answer: 1,
      kategori: "Tali Temali"
    },
    { 
      question: "Ikatan untuk 3 tongkat berdiri tegak disebut...",
      options: ["Ikatan Palang", "Ikatan Kaki Tiga", "Ikatan Silang", "Ikatan Canggah"], 
      answer: 1,
      kategori: "Tali Temali"
    },
    { 
      question: "Ikatan yang menyambung 2 tongkat sejajar/berurutan adalah...",
      options: ["Ikatan Palang", "Ikatan Silang", "Ikatan Canggah", "Ikatan Kaki Tiga"], 
      answer: 2,
      kategori: "Tali Temali"
    },

    // ===== PETA & KOMPAS (20-23) =====
    { 
      question: "Arah Timur pada kompas menunjukkan derajat...",
      options: ["0°", "90°", "180°", "270°"], 
      answer: 1,
      kategori: "Peta & Kompas"
    },
    { 
      question: "Rumus back azimuth adalah...",
      options: ["Azimuth + 90°", "Azimuth ± 180°", "Azimuth × 2", "Azimuth ÷ 2"], 
      answer: 1,
      kategori: "Peta & Kompas"
    },
    { 
      question: "Bagian kompas yang menunjuk utara adalah...",
      options: ["Dial", "Jarum penunjuk", "Visir", "Cover"], 
      answer: 1,
      kategori: "Peta & Kompas"
    },
    { 
      question: "Arah Selatan pada kompas menunjukkan derajat...",
      options: ["0°", "90°", "180°", "270°"], 
      answer: 2,
      kategori: "Peta & Kompas"
    },

    // ===== SURVIVAL (24-27) =====
    { 
      question: "Berapa hari manusia bisa bertahan tanpa air?",
      options: ["1 hari", "3 hari", "7 hari", "14 hari"], 
      answer: 1,
      kategori: "Survival"
    },
    { 
      question: "Lumut biasanya tumbuh subur di sisi pohon arah...",
      options: ["Selatan", "Utara (lembab)", "Timur", "Barat"], 
      answer: 1,
      kategori: "Survival"
    },
    { 
      question: "Berapa lama manusia bisa bertahan tanpa makanan?",
      options: ["3 hari", "1 minggu", "3 minggu", "3 bulan"], 
      answer: 2,
      kategori: "Survival"
    },
    { 
      question: "Bintang Biduk (Ursa Major) menunjuk arah...",
      options: ["Selatan", "Timur", "Barat", "Utara"], 
      answer: 3,
      kategori: "Survival"
    },

    // ===== PPPK (28-30) =====
    { 
      question: "Penanganan luka bakar yang benar adalah...",
      options: ["Beri odol", "Alirkan air dingin 10 menit", "Beri mentega", "Dibiarkan saja"], 
      answer: 1,
      kategori: "PPPK"
    },
    { 
      question: "Yang TIDAK boleh dilakukan saat patah tulang adalah...",
      options: ["Imobilisasi", "Memberi bidai", "Menggerakkan area patah", "Bawa ke RS"], 
      answer: 2,
      kategori: "PPPK"
    },
    { 
      question: "Penanganan pertama saat pingsan adalah...",
      options: ["Siram air kencang", "Baringkan, angkat kaki lebih tinggi", "Dudukkan", "Beri minum banyak"], 
      answer: 1,
      kategori: "PPPK"
    }
];

// =====================
// LOGIKA KUIS
// =====================
let currentQuestion = 0;
let score = 0;
let answered = false;
let jawabanUser = []; // menyimpan jawaban tiap soal

const questionCounter = document.getElementById('questionCounter');
const scoreDisplay = document.getElementById('scoreDisplay');
const progressFill = document.getElementById('progressFill');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextBtn');
const quizContainer = document.getElementById('quizContainer');
const quizResult = document.getElementById('quizResult');

function loadQuestion() {
    answered = false;
    nextBtn.disabled = true;
    nextBtn.textContent = currentQuestion === quizData.length - 1 
        ? 'Lihat Hasil →' : 'Selanjutnya →';

    const q = quizData[currentQuestion];
    
    // ===== INDIKATOR SOAL =====
    questionText.innerHTML = `
        <div class="indikator-soal">
            <span class="indikator-nomor">Soal ${currentQuestion + 1} / ${quizData.length}</span>
            <span class="indikator-kategori">📚 ${q.kategori}</span>
        </div>
        <div class="pertanyaan-teks">${q.question}</div>
    `;
    
    scoreDisplay.textContent = `Skor: ${score}`;
    progressFill.style.width = `${(currentQuestion / quizData.length) * 100}%`;

    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        
        // Label A, B, C, D
        const label = ['A', 'B', 'C', 'D'][index];
        btn.innerHTML = `<span class="opsi-label">${label}.</span> ${opt}`;
        btn.onclick = () => selectAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function selectAnswer(selectedIndex, btn) {
    if (answered) return;
    answered = true;

    const correctIndex = quizData[currentQuestion].answer;
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.add('disabled'));

    // Simpan jawaban user
    jawabanUser[currentQuestion] = selectedIndex;

    if (selectedIndex === correctIndex) {
        btn.classList.add('correct');
        score++;
        // Tampilkan keterangan benar
        const benar = document.createElement('div');
        benar.className = 'keterangan-jawaban benar';
        benar.innerHTML = '✅ <strong>Benar!</strong> Jawaban kamu tepat.';
        optionsContainer.appendChild(benar);
    } else {
        btn.classList.add('wrong');
        allOptions[correctIndex].classList.add('correct');
        // Tampilkan keterangan salah
        const salah = document.createElement('div');
        salah.className = 'keterangan-jawaban salah';
        salah.innerHTML = `❌ <strong>Salah.</strong> Jawaban yang benar: <strong>${quizData[currentQuestion].options[correctIndex]}</strong>`;
        optionsContainer.appendChild(salah);
    }

    scoreDisplay.textContent = `Skor: ${score}`;
    nextBtn.disabled = false;
    progressFill.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;
}

nextBtn.addEventListener('click', () => {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
});

// =====================
// TAMPILKAN HASIL AKHIR
// =====================
function showResult() {
    quizContainer.classList.add('hidden');
    quizResult.classList.remove('hidden');
    
    document.getElementById('finalScore').textContent = score;
    document.getElementById('totalQuestions').textContent = quizData.length;

    // ===== KETERANGAN BERDASARKAN JUMLAH BENAR =====
    let kategoriHasil = '';
    let keterangan = '';
    let iconHasil = '';
    let warnaHasil = '';

    if (score >= 1 && score <= 10) {
        kategoriHasil = 'BAIK';
        keterangan = 'Kamu sudah cukup memahami materi dasar Pramuka Penegak. Terus belajar untuk meningkatkan pemahamanmu!';
        iconHasil = '👍';
        warnaHasil = '#FF9800'; // orange
    } else if (score >= 11 && score <= 20) {
        kategoriHasil = 'CUKUP BAIK';
        keterangan = 'Pemahamanmu sudah bagus! Sedikit lagi kamu akan menjadi ahli Pramuka Penegak. Ayo pelajari materi yang masih kurang!';
        iconHasil = '🌟';
        warnaHasil = '#4CAF50'; // hijau
    } else if (score >= 21 && score <= 30) {
        kategoriHasil = 'SANGAT BAIK';
        keterangan = 'Luar biasa! Kamu benar-benar menguasai materi Pramuka Penegak. Pertahankan semangat belajarmu! 🏕️';
        iconHasil = '🏆';
        warnaHasil = '#2E7D32'; // hijau tua
    } else {
        kategoriHasil = 'PERLU BELAJAR LAGI';
        keterangan = 'Jangan menyerah! Baca kembali materi Pramuka Penegak, lalu coba kuis ini lagi.';
        iconHasil = '📚';
        warnaHasil = '#F44336'; // merah
    }

    // Update tampilan hasil
    const resultIcon = document.querySelector('.result-icon');
    const resultScore = document.querySelector('.result-score');
    const resultMessage = document.getElementById('resultMessage');
    
    resultIcon.textContent = iconHasil;
    resultMessage.innerHTML = `
        <div class="hasil-kategori" style="color: ${warnaHasil}; font-size: 1.5rem; font-weight: 700; margin: 15px 0;">
            Kategori: ${kategoriHasil}
        </div>
        <p>${keterangan}</p>
        <div class="hasil-detail" style="background: #f5f5f5; padding: 15px; border-radius: 10px; margin-top: 20px; text-align: left;">
            <p><strong>📊 Detail Jawaban:</strong></p>
            <p>✅ Benar: <strong>${score}</strong> soal</p>
            <p>❌ Salah: <strong>${quizData.length - score}</strong> soal</p>
            <p>📈 Persentase: <strong>${Math.round((score / quizData.length) * 100)}%</strong></p>
        </div>
    `;
    
    resultScore.innerHTML = `Skor Anda: <strong>${score}</strong> / <strong>${quizData.length}</strong>`;
    
    quizResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    jawabanUser = [];
    quizResult.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    loadQuestion();
    quizContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// =====================
// ANIMASI SCROLL
// =====================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .kegiatan-item, .stat-item, .struktur-item, .materi-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// INIT
loadQuestion();
