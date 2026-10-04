/* ==================================================
   NAMA TAMU
================================================== */

const params =
    new URLSearchParams(
        window.location.search
    );

const guest =
    params.get("to");


if (guest) {

    const guestName =
        document.getElementById(
            "guestName"
        );

    if (guestName) {

        guestName.textContent =
            decodeURIComponent(guest)
                .replace(/\+/g, " ");

    }

}


/* ==================================================
   ELEMENT
================================================== */

const button =
    document.getElementById(
        "openInvitation"
    );

const cover =
    document.getElementById(
        "cover"
    );

const wedding =
    document.getElementById(
        "wedding"
    );


let isOpening = false;


/* ==================================================
   BUKA UNDANGAN
   COVER → HALAMAN 2
================================================== */

if (
    button &&
    cover &&
    wedding
) {

    button.addEventListener(
        "click",
        function () {

            if (isOpening) {
                return;
            }

            isOpening = true;


            /*
             * COVER MULAI MENGHILANG
             */

            cover.classList.add(
                "leaving"
            );


            /*
             * TUNGGU SAMPAI TRANSISI COVER
             * SELESAI
             */
            setTimeout(
                function () {

                    cover.style.display =
                        "none";

                    /*
                    * BUKA KUNCI SCROLL
                    */
                    document.documentElement.classList.remove(
                        "cover-locked"
                    );

                    document.body.classList.remove(
                        "cover-locked"
                    );

                    /*
                    * HALAMAN 2 MULAI MASUK
                    */
                    requestAnimationFrame(
                        function () {

                            requestAnimationFrame(
                                function () {

                                    wedding.classList.add(
                                        "visible"
                                    );

                                }
                            );

                        }
                    );

                    isOpening =
                        false;

                },
                1600
            );

        }
    );

}


/* ==================================================
   HALAMAN 2 — REVEAL
================================================== */

if (wedding) {

    const weddingObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.25
            }

        );


    weddingObserver.observe(
        wedding
    );

}


/* ==================================================
   HALAMAN 4 — UCAPAN SALAM
================================================== */

const greetingSection =
    document.getElementById(
        "greeting"
    );


if (greetingSection) {

    const greetingObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.20
            }

        );


    greetingObserver.observe(
        greetingSection
    );

}

/* ==================================================
   HALAMAN 5 — DATA MEMPELAI
================================================== */

const coupleSection =
    document.getElementById(
        "couple"
    );


if (coupleSection) {

    const coupleObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.20
            }

        );


    coupleObserver.observe(
        coupleSection
    );

}

/* ==================================================
   HALAMAN 7 — AKAD & RESEPSI
================================================== */

const scheduleSection =
    document.getElementById(
        "schedule"
    );


if (scheduleSection) {

    const scheduleObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.20
            }

        );


    scheduleObserver.observe(
        scheduleSection
    );

}

/* ==================================================
   COUNTDOWN — HALAMAN 2
================================================== */

const weddingCountdownDate =
    new Date(
        "2027-01-30T08:00:00+07:00"
    ).getTime();


const weddingCountDays =
    document.getElementById(
        "weddingCountDays"
    );


const weddingCountHours =
    document.getElementById(
        "weddingCountHours"
    );


const weddingCountMinutes =
    document.getElementById(
        "weddingCountMinutes"
    );


const weddingCountSeconds =
    document.getElementById(
        "weddingCountSeconds"
    );


const weddingCountdownFinished =
    document.getElementById(
        "weddingCountdownFinished"
    );


function updateWeddingCountdown() {

    const now =
        new Date().getTime();


    const distance =
        weddingCountdownDate - now;


    if (distance <= 0) {

        const timer =
            document.querySelector(
                ".wedding-countdown-timer"
            );


        if (timer) {

            timer.style.display =
                "none";

        }


        if (weddingCountdownFinished) {

            weddingCountdownFinished.classList.add(
                "show"
            );

        }

        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (
                distance %
                (1000 * 60)
            ) /
            1000
        );


    if (weddingCountDays) {

        weddingCountDays.textContent =
            String(days).padStart(
                2,
                "0"
            );

    }


    if (weddingCountHours) {

        weddingCountHours.textContent =
            String(hours).padStart(
                2,
                "0"
            );

    }


    if (weddingCountMinutes) {

        weddingCountMinutes.textContent =
            String(minutes).padStart(
                2,
                "0"
            );

    }


    if (weddingCountSeconds) {

        weddingCountSeconds.textContent =
            String(seconds).padStart(
                2,
                "0"
            );

    }

}


updateWeddingCountdown();


setInterval(
    updateWeddingCountdown,
    1000
);

/* ==================================================
   WEDDING GIFT — COPY NOMOR REKENING
   SUPPORT iPHONE / SAFARI
================================================== */

document.querySelectorAll(".gift-copy-button").forEach((button) => {

    button.addEventListener("click", () => {

        const nomorRekening = button.dataset.copy;
        const textElement = button.querySelector("span");
        const tulisanAsli = textElement.textContent;

        if (!nomorRekening) {
            textElement.textContent = "Nomor tidak tersedia";

            setTimeout(() => {
                textElement.textContent = tulisanAsli;
            }, 2000);

            return;
        }

        // Coba Clipboard API terlebih dahulu
        if (
            navigator.clipboard &&
            window.isSecureContext
        ) {

            navigator.clipboard.writeText(nomorRekening)
                .then(() => {

                    textElement.textContent = "Berhasil disalin ✓";

                    setTimeout(() => {
                        textElement.textContent = tulisanAsli;
                    }, 2000);

                })
                .catch(() => {

                    // Kalau Safari gagal → gunakan fallback
                    copyFallback(nomorRekening, textElement, tulisanAsli);

                });

        } else {

            // Fallback untuk iPhone / Safari
            copyFallback(nomorRekening, textElement, tulisanAsli);

        }

    });

});


/* ==================================================
   FALLBACK COPY — iPHONE / SAFARI
================================================== */

function copyFallback(text, textElement, tulisanAsli) {

    const textarea = document.createElement("textarea");

    textarea.value = text;

    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.width = "1px";
    textarea.style.height = "1px";
    textarea.style.padding = "0";
    textarea.style.border = "0";
    textarea.style.opacity = "0";
    textarea.style.pointerEvents = "none";

    document.body.appendChild(textarea);

    // Khusus iPhone / iPad
    textarea.focus();
    textarea.setSelectionRange(0, textarea.value.length);

    let berhasil = false;

    try {
        berhasil = document.execCommand("copy");
    } catch (error) {
        berhasil = false;
    }

    document.body.removeChild(textarea);

    if (berhasil) {

        textElement.textContent = "Berhasil disalin ✓";

    } else {

        textElement.textContent = "Tekan lama untuk menyalin";

    }

    setTimeout(() => {
        textElement.textContent = tulisanAsli;
    }, 2000);
}

/* ==================================================
   RSVP — GOOGLE SHEETS
================================================== */

/*
   MASUKKAN URL WEB APP GOOGLE APPS SCRIPT DI SINI
*/
const RSVP_API_URL =
    "https://script.google.com/macros/s/AKfycbyHqytWvUImc57DuFBBN-SDR-Tgo9RNGHTkSlnM_0BFHWPkE0ZldlX-XNN3hMgpoLyJ9g/exec";


const rsvpForm =
    document.getElementById("rsvpForm");

const rsvpSuccess =
    document.getElementById("rsvpSuccess");


rsvpForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();

        const guestName =
            document.getElementById("rsvpGuestName").value.trim();

        const attendance =
            document.getElementById("attendance").value;

        const guestMessage =
            document.getElementById("guestMessage").value.trim();


        /* ==============================
           VALIDASI
        ============================== */

        if (!guestName || !attendance) {

            alert(
                "Silakan isi nama dan konfirmasi kehadiran."
            );

            return;
        }


        /* ==============================
           TOMBOL
        ============================== */

        const submitButton =
            rsvpForm.querySelector(".rsvp-submit");

        const tulisanTombol =
            submitButton.innerHTML;


        submitButton.disabled = true;

        submitButton.innerHTML =
            "Mengirim...";


        /* ==============================
           DATA
        ============================== */

        const formData =
            new URLSearchParams();

        formData.append(
            "nama",
            guestName
        );

        formData.append(
            "kehadiran",
            attendance
        );

        formData.append(
            "ucapan",
            guestMessage
        );


        /* ==============================
           TIMEOUT 15 DETIK
        ============================== */

        const controller =
            new AbortController();

        const timeout =
            setTimeout(() => {

                controller.abort();

            }, 15000);


        try {

            const response =
                await fetch(
                    RSVP_API_URL,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/x-www-form-urlencoded;charset=UTF-8"
                        },

                        body:
                            formData.toString(),

                        signal:
                            controller.signal
                    }
                );


            clearTimeout(timeout);


            /* ==============================
               CEK RESPONSE
            ============================== */

            const result =
                await response.json();


            if (!result.success) {

                throw new Error(
                    result.error ||
                    "Gagal menyimpan data."
                );
            }


            /* ==============================
               BERHASIL
            ============================== */

            rsvpForm.reset();

            /* HILANGKAN FOKUS AGAR iPHONE TIDAK MENAHAN POSISI ZOOM */
            if (document.activeElement) {
                document.activeElement.blur();
            }

            submitButton.innerHTML =
                "Terkirim ✓";
            /* ==============================
               TAMPILKAN TERIMA KASIH
            ============================== */

            if (rsvpSuccess) {

                rsvpSuccess.classList.add(
                    "show"
                );
            }


            /* ==============================
               REFRESH UCAPAN
            ============================== */

            await loadGuestMessages();


            /* ==============================
               KEMBALIKAN TOMBOL
            ============================== */

            setTimeout(() => {

                submitButton.disabled =
                    false;

                submitButton.innerHTML =
                    tulisanTombol;

            }, 1200);


        } catch (error) {

            clearTimeout(timeout);


            console.error(
                "RSVP Error:",
                error
            );


            /* ==============================
               TIMEOUT
            ============================== */

            if (
                error.name ===
                "AbortError"
            ) {

                alert(
                    "Koneksi ke server sedang lambat. Silakan cek apakah ucapan sudah masuk sebelum mengirim ulang."
                );

            } else {

                alert(
                    "Konfirmasi belum berhasil dikirim. Silakan coba lagi."
                );
            }


            /* ==============================
               KEMBALIKAN TOMBOL
            ============================== */

            submitButton.disabled =
                false;

            submitButton.innerHTML =
                tulisanTombol;
        }

    }
);


/* ==================================================
   DAFTAR UCAPAN
================================================== */

const guestMessages =
    document.getElementById(
        "guestMessages"
    );


async function loadGuestMessages() {

    if (!guestMessages) {
        return;
    }


    try {

        const response =
            await fetch(
                RSVP_API_URL
            );


        const data =
            await response.json();


        /*
           KOSONG
        */

        if (
            !Array.isArray(data) ||
            data.length === 0
        ) {

            guestMessages.innerHTML = "";

            return;

        }


        /*
           TAMPILKAN UCAPAN
        */

        guestMessages.innerHTML =
            data.map(
                (item) => {

                    const nama =
                        escapeHTML(
                            item.nama
                        );


                    const ucapan =
                        escapeHTML(
                            String(item.ucapan || "")
                                .trim()
                                .replace(/\s+/g, " ")
                        );


                    const waktu =
                        formatGuestTime(
                            item.waktu
                        );


                    return `
                        <div class="guest-message-header">

                            <div class="guest-message-heart">
                                ♡
                            </div>

                            <div class="guest-message-name">
                                ${nama}
                            </div>

                        </div>

                        <div class="guest-message-body">

                            ${
                                ucapan
                                ? `
                                    <div class="guest-message-text">
                                        ${ucapan}
                                    </div>
                                `
                                : ""
                            }

                            <div class="guest-message-time">
                                ${waktu}
                            </div>

                        </div>
                    `;

                }
            ).join("");


    } catch (error) {

        console.error(
            "Gagal mengambil ucapan:",
            error
        );

    }

}


/* ==================================================
   FORMAT WAKTU
================================================== */

function formatGuestTime(
    waktu
) {

    if (!waktu) {
        return "";
    }


    const date =
        new Date(waktu);


    if (isNaN(date.getTime())) {
        return "";
    }


    const now =
        new Date();


    const difference =
        now.getTime() -
        date.getTime();


    const seconds =
        Math.floor(
            difference / 1000
        );


    if (seconds < 60) {

        return "Baru saja";

    }


    const minutes =
        Math.floor(
            seconds / 60
        );


    if (minutes < 60) {

        return `${minutes} menit yang lalu`;

    }


    const hours =
        Math.floor(
            minutes / 60
        );


    if (hours < 24) {

        return `${hours} jam yang lalu`;

    }


    const days =
        Math.floor(
            hours / 24
        );


    if (days < 30) {

        return `${days} hari yang lalu`;

    }


    const months =
        Math.floor(
            days / 30
        );


    if (months < 12) {

        return `${months} bulan yang lalu`;

    }


    const years =
        Math.floor(
            months / 12
        );


    return `${years} tahun yang lalu`;

}


/* ==================================================
   AMANKAN TEKS DARI TAMU
================================================== */

function escapeHTML(
    text
) {

    return String(text)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* ==================================================
   LOAD UCAPAN SAAT HALAMAN DIBUKA
================================================== */

loadGuestMessages();

/* ==================================================
   AUTO REFRESH UCAPAN
================================================== */

setInterval(() => {
    loadGuestMessages();
}, 10000);

/* ==================================================
   🌸 RANDOM PETALS — KISAH KAMI
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const story = document.querySelector(".story-section");
    const container = document.querySelector(".story-petals");

    if (!story || !container) return;


    const PETAL_COUNT = 14;


    function random(min, max) {
        return Math.random() * (max - min) + min;
    }


    for (let i = 0; i < PETAL_COUNT; i++) {

        const petal = document.createElement("span");

        petal.className = "story-petal";


        /* posisi horizontal random */

        petal.style.setProperty(
            "--start-x",
            `${random(-5, 100)}%`
        );


        /* ukuran random */

        petal.style.setProperty(
            "--size",
            `${random(5, 11)}px`
        );


        /* transparansi random */

        petal.style.setProperty(
            "--opacity",
            random(.18, .42).toFixed(2)
        );


        /* kecepatan random */

        petal.style.setProperty(
            "--duration",
            `${random(10, 22).toFixed(1)}s`
        );


        /* waktu mulai random */

        petal.style.setProperty(
            "--delay",
            `${random(-18, 0).toFixed(1)}s`
        );


        /* arah gerakan random */

        petal.style.setProperty(
            "--drift-1",
            `${random(-35, 35)}px`
        );

        petal.style.setProperty(
            "--drift-2",
            `${random(-70, 70)}px`
        );

        petal.style.setProperty(
            "--drift-3",
            `${random(-45, 80)}px`
        );

        petal.style.setProperty(
            "--drift-4",
            `${random(-80, 60)}px`
        );

        petal.style.setProperty(
            "--drift-5",
            `${random(-100, 100)}px`
        );


        /* rotasi awal random */

        petal.style.transform =
            `rotate(${random(0, 360)}deg)`;


        container.appendChild(petal);

    }

});
