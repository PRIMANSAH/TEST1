function submitQuiz() {
    let correctAnswers = 0; // Menyimpan jumlah jawaban benar
    const totalQuestions = 25; // Total jumlah soal

    // Kunci jawaban yang benar
    const correct = {
        q1: "a", q2: "b", q3: "a", q4: "b", q5: "b",
        q6: "b", q7: "b", q8: "a", q9: "b", q10: "b",
        q11: "a", q12: "b", q13: "b", q14: "b", q15: "a",
        q16: "b", q17: "a", q18: "a", q19: "a", q20: "b",
        q21: "b", q22: "a", q23: "b", q24: "a", q25: "a"
    };

    // Loop untuk memeriksa jawaban pengguna
    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`); // Ambil jawaban pengguna
        if (userAnswer && userAnswer.value === correct[`q${i}`]) {
            correctAnswers++; // Tambah jumlah jawaban benar jika sesuai
        }
    }

    // Hitung skor
    const score = (correctAnswers / totalQuestions) * 100;

    // Tampilkan hasil
    const resultDiv = document.getElementById('result');
    const scoreText = document.getElementById('score');

    scoreText.innerText = `Anda menjawab ${correctAnswers} dari ${totalQuestions} soal dengan benar. Nilai Anda: ${score.toFixed(2)}%`;
    resultDiv.style.display = 'block';
}
