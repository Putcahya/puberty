
import { Hotspot, QuizQuestion, DialogueMessage } from '../types';

export const slide1Content = {
  title: "Welcome to Puberty!",
  text: "Pubertas adalah masa transisi penting di mana seorang anak mengalami perubahan fisik, hormonal, dan emosional menuju dewasa yang mampu melakukan reproduksi. Pada masa pubertas, tubuh mulai memproduksi hormon khusus, yaitu testosteron pada anak laki-laki dan estrogen pada anak perempuan, yang memicu munculnya ciri-ciri seksual sekunder seperti tumbuhnya jakun dan suara yang lebih berat pada laki-laki, serta pertumbuhan payudara dan menstruasi pada perempuan. Selain itu, terjadi pertumbuhan tinggi badan, perubahan bentuk tubuh, dan aktivitas kelenjar minyak yang membuat kulit lebih berminyak. Masa ini bukan hanya perubahan fisik, tapi juga perubahan emosi dan sosial yang menuntut remaja untuk belajar menerima dirinya sendiri dan memahami peran sosialnya. Semua proses ini adalah hal yang normal dan menandai kesiapan tubuh dan jiwa menghadapi kehidupan dewasa."
};

export const maleHotspots: Hotspot[] = [
    { id: 'm-head', top: '20%', left: '45%', title: 'Kepala/Leher', explanation: 'Suara pecah dan jakun muncul karena hormon ini memengaruhi pita suara dan pertumbuhan tulang rawan di leher yang membentuk jakun. Perubahan ini membuat suara menjadi lebih dalam dan kadang pecah atau serak.', image: '/images/anggota_tubuh/headneck.jpg' },
    { id: 'm-shoulder', top: '25%', left: '25%', title: 'Bahu & Otot', explanation: 'Tubuh yang tumbuh lebih tinggi dan berotot karena testosteron merangsang pertumbuhan tulang dan pembentukan massa otot. Bahu menjadi lebih lebar dan otot-otot lebih jelas karena otot berkembang lebih besar dan kuat.', image: '/images/anggota_tubuh/shoulders.jpg' },
    { id: 'm-armpit', top: '30%', left: '65%', title: 'Ketiak', explanation: 'Banyaknya keringat dan bau badan muncul karena kelenjar keringat menjadi lebih aktif, berfungsi untuk membantu tubuh mengatur suhu saat metabolisme meningkat pada masa pertumbuhan.', image: '/images/anggota_tubuh/ketiak.jpg' },
    { id: 'm-face', top: '10%', left: '50%', title: 'Wajah', explanation: 'Kulit yang berminyak dan muncul jerawat terjadi karena kelenjar minyak aktif menghasilkan lebih banyak minyak, yang bisa menyumbat pori-pori dan menyebabkan jerawat.', image: '/images/anggota_tubuh/face.jpg' },
    { id: 'm-private', top: '60%', left: '50%', title: 'Organ Reproduksi', explanation: 'Testis mulai membesar dan meningkatkan produksi hormon testosteron, yang memicu pertumbuhan organ reproduksi. Penis dan skrotum bertambah besar, menandakan kesiapan tubuh untuk fungsi reproduksi di masa depan. Proses ini biasanya dimulai antara usia 10 hingga 14 tahun.', image: '/images/anggota_tubuh/kemaluan_cowok.jpg' },
    { id: 'm-pubic', top: '55%', left: '45%', title: 'Area Kemaluan', explanation: 'Rambut wajah, ketiak, dan kemaluan tumbuh sebagai tanda kedewasaan seksual yang dipicu oleh hormon testosteron yang menstimulasi folikel rambut di area-area tersebut untuk tumbuh lebih tebal dan gelap.', image: '/images/hotspots/m-pubic.svg' },
    { id: 'm-mood', top: '30%', left: '45%', title: 'Hati & Suasana Hati', explanation: 'Perubahan hati dan suasana hati juga normal karena hormon memengaruhi bagian otak yang mengatur emosi. Oleh sebab itu, fluktuasi suasana hati sering terjadi selama pubertas.', image: '/images/anggota_tubuh/chest.jpg' },
];

export const femaleHotspots: Hotspot[] = [
    { id: 'f-breast', top: '30%', left: '35%', title: 'Payudara', explanation: "Tanda pertama pubertas adalah 'tunas payudara' — benjolan kecil di bawah puting. Ini adalah awal pertumbuhan payudara yang normal, bisa disertai rasa nyeri ringan yang akan berkurang seiring waktu.", image: '/images/hotspots/f-breast.svg' },
    { id: 'f-hair', top: '55%', left: '60%', title: 'Rambut', explanation: 'Rambut yang lebih kasar mulai tumbuh di area kemaluan, di bawah lengan, dan di kaki. Tumbuhnya rambut kemaluan bisa menjadi tanda pertama pubertas sebelum payudara berkembang.', image: '/images/hotspots/f-hair.svg' },
    { id: 'f-discharge', top: '62%', left: '50%', title: 'Keputihan', explanation: 'Keputihan bening atau putih dalam jumlah sedikit hingga sedang, biasanya muncul 6-12 bulan sebelum menstruasi pertama. Ini adalah tanda normal tubuh merespons peningkatan hormon estrogen.', image: '/images/hotspots/f-discharge.svg' },
    { id: 'f-menstruation', top: '58%', left: '35%', title: 'Menstruasi', explanation: 'Menstruasi pertama biasanya terjadi 2-3 tahun setelah tunas payudara muncul, rata-rata sekitar usia 12 tahun. Ini menandai tubuh mulai siap untuk fungsi reproduksi.', image: '/images/hotspots/f-menstruation.svg' },
    { id: 'f-mood', top: '25%', left: '45%', title: 'Hati & Suasana Hati', explanation: 'Sama seperti laki-laki, perubahan hormon estrogen juga sangat mempengaruhi suasana hati. Mood swings, atau perasaan yang berubah-ubah, adalah hal yang sangat wajar dialami.', image: '/images/hotspots/f-mood.svg' },
];


export const quizQuestions: QuizQuestion[] = [
    { question: 'Tubuh perempuan juga memproduksi testosteron, walaupun dalam jumlah kecil.', isTrue: true },
    { question: 'Jakun laki-laki bisa bergerak naik turun saat menelan atau berbicara.', isTrue: true },
    { question: 'Hormon estrogen membuat kulit lebih halus, bukan cuma membuat payudara tumbuh.', isTrue: true },
    { question: 'Lelaki bisa mengalami pembesaran payudara sementara karena hormon saat pubertas.', isTrue: true },
    { question: 'Testosteron tidak memengaruhi suasana hati atau energi seseorang.', isTrue: false, explanation: 'Testosteron sangat memengaruhi suasana hati dan energi.' },
    { question: 'Suara laki-laki berubah karena pita suara mereka memendek saat pubertas.', isTrue: false, explanation: 'Suara berubah karena pita suara memanjang dan menebal.' },
    { question: 'Rambut tumbuh di wajah laki-laki karena sel rambut terpengaruh hormon testosteron.', isTrue: true },
    { question: 'Keputihan adalah pertanda tidak sehat dan bukan bagian dari pubertas perempuan.', isTrue: false, explanation: 'Keputihan adalah hal normal dan bagian dari pubertas perempuan.' },
    { question: 'Mimpi basah adalah proses tubuh membuang sperma yang telah diproduksi.', isTrue: true },
    { question: 'Estrogen pada laki-laki berperan menjaga metabolisme dan kesehatan jantung.', isTrue: true },
];

export const dialogueMessages: DialogueMessage[] = [
    { speaker: "Guru", text: "Hai semuanya! Sudah tahu kan apa itu pubertas dan perubahan yang terjadi saat kamu mengalami masa ini?", align: "left" },
    { speaker: "Siswa 1", text: "Iya, Tapi jujur, kadang aku bingung dan takut sama perubahan itu.", align: "right" },
    { speaker: "Guru", text: "Wajar kok merasa begitu. Tapi ingat, menerima perubahan tubuh dan perasaanmu itu penting banget supaya kamu bisa tumbuh jadi pribadi yang sehat dan percaya diri.", align: "left" },
    { speaker: "Siswa 2", text: "Kalau aku nggak terima, apa bahayanya, ya?", align: "right" },
    { speaker: "Guru", text: "Kalau kamu menolak atau takut, itu bisa bikin stres atau kecemasan yang cukup serius. Bisa juga berdampak ke kesehatan mental, yang tentu nggak baik, kan?", align: "left" },
    { speaker: "Siswa 2", text: "Aku kadang malu buat jaga jarak sama teman yang beda jenis kelamin. Gimana ya?", align: "right" },
    { speaker: "Guru", text: "Itu juga penting nih. Pahami batasan bergaul yang sehat, hormati ruang pribadi dan privasi temanmu. Berteman boleh, tapi jaga batas supaya tetap nyaman dan hormat satu sama lain.", align: "left" },
    { speaker: "Siswa 3", text: "Berarti selain tubuh kita berubah, kita juga harus berubah cara bersikap ya?", align: "right" },
    { speaker: "Guru", text: "Betul sekali! Menerima diri sendiri, menjaga tubuh, dan bergaul dengan baik adalah pondasi supaya kamu tumbuh jadi pribadi yang sehat, bahagia, dan siap hadapi masa depan.", align: "left" },
    { speaker: "Siswa 1", text: "Terima kasih, guru. Aku jadi lebih paham dan semangat!", align: "right" },
];

export const selfCareContent = {
    title: "Menjaga Kebersihan dan Kesehatan Diri",
    intro: "Selama pubertas, kelenjar keringat dan minyak menjadi lebih aktif. Makanya, menjaga kebersihan diri jadi makin penting agar tubuh tetap sehat, segar, dan kamu makin percaya diri!",
    cards: [
        {
            title: "Mandi Teratur",
            text: "Mandi dua kali sehari dengan sabun. Ini membantu menghilangkan kuman, keringat, dan minyak berlebih yang bisa menyebabkan bau badan.",
            icon: "shower"
        },
        {
            title: "Kebersihan Wajah",
            text: "Cuci wajahmu pagi dan malam hari dengan pembersih ringan untuk mengontrol minyak dan mencegah munculnya jerawat.",
            icon: "face"
        },
        {
            title: "Gunakan Deodoran",
            text: "Setelah mandi, gunakan deodoran atau antiperspirant di ketiak untuk membantu mengontrol keringat dan mencegah bau badan.",
            icon: "deodorant"
        },
        {
            title: "Pakaian Bersih",
            text: "Ganti pakaian dalam setiap hari. Kenakan pakaian yang bersih dan menyerap keringat agar kulit bisa bernapas.",
            icon: "tshirt"
        },
        {
            title: "Kebersihan Gigi & Mulut",
            text: "Sikat gigi minimal dua kali sehari dan gunakan benang gigi untuk menjaga napas tetap segar dan gigi sehat.",
            icon: "toothbrush"
        },
        {
            title: "Perawatan Area Intim",
            text: "Bersihkan area kelamin dengan air bersih setiap hari. Untuk perempuan saat menstruasi, ganti pembalut setiap 4-6 jam.",
            icon: "water"
        }
    ]
};