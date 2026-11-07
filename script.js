const cookie = document.getElementById("cookie");
const title = document.getElementById("paper");
const desc = document.getElementById("fortuneText");

const fortunes = [
    {
        title: "집중력 MAX 📚",
        desc: "오늘은 집중력이 매우 좋은 날입니다. 지금 공부한 내용이 시험에서 그대로 나올 가능성이 높습니다."
    },
    {
        title: "노력의 결과 💯",
        desc: "지금까지 쌓아온 노력이 시험에서 빛을 발합니다. 자신감을 가지고 문제를 풀어보세요."
    },
    {
        title: "침착함이 답 🧠",
        desc: "긴장하지 않는 것이 가장 중요합니다. 아는 문제도 긴장하면 틀릴 수 있으니 천천히 읽고 풀어보세요."
    },
    {
        title: "역전 가능 🔥",
        desc: "지금까지 부족했다고 느꼈더라도 괜찮습니다. 마지막 집중이 결과를 바꿀 수 있습니다."
    },
    {
        title: "컨디션 관리 ⚡",
        desc: "시험도 중요하지만 몸 상태가 더 중요합니다. 충분한 휴식이 오히려 점수를 올려줄 수 있습니다."
    },
    {
        title: "문제 운 상승 🍀",
        desc: "오늘은 문제 운이 좋은 날입니다. 찍는 문제도 맞을 확률이 높습니다."
    },
    {
        title: "시간 관리 필수 ⏳",
        desc: "시간 분배가 오늘의 핵심입니다. 한 문제에 오래 붙잡히지 마세요."
    },
    {
        title: "기초가 답 📖",
        desc: "어려운 문제보다 기본 문제에서 점수를 챙기는 것이 중요합니다. 실수를 줄이세요."
    },
    {
        title: "멘탈 유지 💪",
        desc: "한 문제 틀렸다고 흔들리지 마세요. 시험은 끝까지 집중하는 사람이 이깁니다."
    },
    {
        title: "마무리가 중요 ✍️",
        desc: "마지막 10분이 점수를 바꿉니다. 꼭 검토 시간을 남겨두세요."
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