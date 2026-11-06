import type { StoryCopyContent } from "../_types/story-copy";

export type StoryPhotoAsset = {
    slotNumber: number;
    src: string | null;
    alt: string;
    objectPosition?: string;
};

export const conversationStory = {
    eyebrow: "함께라서 달라지는 하루",
    title: "조금 더,\n같이 있고 싶은 사람.",
    description: "헤어지기 아쉬운 대화,\n돌아오는 길에도 떠오르는 웃음.",
    accent: {
        target: "title",
        text: "같이",
        className:
            "top-[.08em] -left-[.08em] h-[1.35em] w-[2.45em] -rotate-[32deg] bg-[#e2d8cd]/70",
    },
} satisfies StoryCopyContent;

export const todayStory = {
    eyebrow: "오늘을 함께하는 사람들",
    title: "오늘,\n같이 할까요?",
    description:
        "문득 걷고 싶은 저녁, 가볍게 나누는 커피 한 잔.\n시간이 맞는 사람들과 오늘의 작은 약속을 만들어요.",
    accent: {
        target: "description",
        text: "시간이",
        className: "top-[.25em] -left-[.15em] h-[2em] w-[5em] -rotate-[28deg] bg-[#d4dfdc]/40",
    },
} satisfies StoryCopyContent;

export const clubsStory = {
    eyebrow: "좋아하는 것으로 이어지는 동아리",
    title: "다음 주에도,\n우리 만나요.",
    description:
        "같은 취미로 모여, 함께하는 시간이 쌓이면.\n좋아하는 일 곁에 좋아하는 사람들이 남아요.",
    accent: {
        target: "eyebrow",
        text: "동아리",
        className: "-top-[.55em] -left-[.35em] h-[2.8em] w-[3.8em] -rotate-[34deg] bg-[#d7cabb]/65",
    },
} satisfies StoryCopyContent;

export const storyPhotos = {
    conversation: {
        slotNumber: 3,
        src: "/images/tilde/photography/conversation/02-cafe.png",
        alt: "카페에서 마주 앉아 대화하는 두 사람",
    },
    conversationWalk: {
        slotNumber: 1,
        src: "/images/tilde/photography/conversation/06-woman-rooftop.png",
        alt: "노을빛 옥상에서 뒤돌아보며 웃는 여성",
        objectPosition: "34% 50%",
    },
    conversationSmile: {
        slotNumber: 12,
        src: "/images/tilde/photography/conversation/03-man-music-room.png",
        alt: "음악 작업실 의자에 앉아 미소 짓는 남성",
        objectPosition: "45% 50%",
    },
    conversationMoment: {
        slotNumber: 10,
        src: "/images/tilde/photography/conversation/03-bookstore.png",
        alt: "책장 앞에서 이야기를 나누는 두 사람",
    },
    conversationEveryday: {
        slotNumber: 5,
        src: "/images/tilde/photography/conversation/03-formal-couple.png",
        alt: "햇살이 비치는 벽 앞에서 손을 잡은 두 사람",
    },
    conversationLittleMoment: {
        slotNumber: 2,
        src: "/images/tilde/photography/conversation/02-woman-car-window.png",
        alt: "열린 차 창문 너머로 미소 짓는 여성",
    },
    conversationCoffee: {
        slotNumber: 9,
        src: "/images/tilde/photography/conversation/08-man-night-park.png",
        alt: "밤 공원 벤치에서 책을 들고 앉아 있는 남성",
    },
    conversationWindow: {
        slotNumber: 8,
        src: "/images/tilde/photography/conversation/05-first-meeting-flowers.png",
        alt: "꽃이 놓인 거리에서 상대를 보며 환하게 웃는 여성",
    },
    conversationLaugh: {
        slotNumber: 7,
        src: "/images/tilde/photography/conversation/06-couple-beach-hug.png",
        alt: "해 질 무렵 바닷가에서 서로를 안아 주는 두 사람",
    },
    conversationBakery: {
        slotNumber: 4,
        src: "/images/tilde/photography/conversation/05-couple-mirror-selfie.png",
        alt: "서로 기대어 거울 사진을 찍는 두 사람",
        objectPosition: "42% 50%",
    },
    conversationFountain: {
        slotNumber: 6,
        src: "/images/tilde/photography/conversation/04-park-bench.png",
        alt: "공원 벤치에 나란히 앉아 대화하는 두 사람",
    },
    conversationEvening: {
        slotNumber: 13,
        src: "/images/tilde/photography/conversation/07-couple-shoulder-lean.png",
        alt: "야외 계단에서 어깨에 기대어 앉아 있는 두 사람",
    },
    conversationNewMemory: {
        slotNumber: 11,
        src: "/images/tilde/photography/conversation/01-woman-at-home.png",
        alt: "따뜻한 조명 아래 소파에 기대어 바라보는 여성",
    },
    todayDetail: {
        slotNumber: 14,
        src: "/images/tilde/photography/today/14.png",
        alt: "햇살 아래 야외 테니스 코트에서 공을 치는 여성",
    },
    todayGroup: {
        slotNumber: 17,
        src: "/images/tilde/photography/today/17.png",
        alt: "햇살이 비치는 나무 아래에서 카메라를 들고 사진을 찍는 여성",
    },
    todayWalk: {
        slotNumber: 15,
        src: "/images/tilde/photography/today/15.png",
        alt: "원목 벽 앞에서 펼친 카드를 얼굴 옆에 들고 미소 짓는 여성",
    },
    todayCoffee: {
        slotNumber: 16,
        src: "/images/tilde/photography/today/16.png",
        alt: "햇살 아래 야외 트랙을 달리는 여성",
    },
    todaySunset: {
        slotNumber: 18,
        src: "/images/tilde/photography/today/18.png?v=fa20b60d",
        alt: "햇살이 비치는 공원에서 골든 리트리버와 함께 있는 남성",
    },
    todayLaugh: {
        slotNumber: 19,
        src: "/images/tilde/photography/today/19.png",
        alt: "푸른 하늘 아래 골프장에서 스윙하는 여성",
    },
    clubActivity: {
        slotNumber: 20,
        src: "/images/tilde/photography/clubs/20.png?v=853a0f82",
        alt: "골프장에서 함께 모여 장난스러운 표정으로 단체 셀카를 찍는 친구들",
    },
    clubDetail: {
        slotNumber: 21,
        src: "/images/tilde/photography/clubs/21.png",
        alt: "야간 풋살장에서 빨간 조끼를 입고 공을 차는 남성",
    },
    clubReading: {
        slotNumber: 22,
        src: "/images/tilde/photography/clubs/22.png",
        alt: "생일 케이크 앞에 모여 함께 사진을 찍는 다섯 친구",
    },
    clubMaking: {
        slotNumber: 23,
        src: "/images/tilde/photography/clubs/23.png",
        alt: "연습실에서 회색 트레이닝복을 입고 함께 거울 사진을 찍는 다섯 친구",
    },
    clubOutdoor: {
        slotNumber: 24,
        src: "/images/tilde/photography/clubs/24-campfire.png",
        alt: "캠핑장에서 모닥불을 둘러앉아 함께 웃는 친구들",
    },
} satisfies Record<string, StoryPhotoAsset>;
