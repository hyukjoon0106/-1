const cookie = document.getElementById("cookie");
const title = document.getElementById("paper");
const desc = document.getElementById("fortuneText");

const fortunes = [
    {
        title: "치킨",
        desc: "뼈 or 순살?"
    },
    {
        title: "햄버거",
        desc: "참깨빵 위에 순 쇠고기.."
    },
    {
        title: "피자",
        desc: "시내 도미노 맛없음(?)"
    }
];

let opened = false;

cookie.addEventListener("mouseenter", () => {
    if (opened) return;

    cookie.classList.add("shake");

    setTimeout(() => {
        cookie.classList.remove("shake");
    }, 400);
});

cookie.addEventListener("click", () => {
    if (opened) return;
    opened = true;

    const random = fortunes[Math.floor(Math.random() * fortunes.length)];
    title.textContent = random.title;

    // 👉 처음엔 ... 표시
    desc.textContent = "...";

    // 1️⃣ 흔들림
    cookie.classList.add("shake");

    setTimeout(() => {
        cookie.classList.remove("shake");

        // 2️⃣ 깨짐
        cookie.classList.add("broken");

        const left = document.querySelector(".left");

        left.addEventListener("transitionend", () => {

            // 📜 제목 등장
            title.classList.add("show");

            // 📖 ... 먼저 등장
            desc.classList.add("show");

            // ⏳ 일정 시간 후 실제 운세로 변경
            setTimeout(() => {
                desc.textContent = random.desc;
            }, 100); // ← 이 값으로 "뜸 들이는 느낌" 조절

        }, { once: true });

    }, 400);
});
