import type { StoryCopyContent } from "../_types/story-copy";

export type StoryPhotoAsset = {
    slotNumber: number;
    src: string | null;
    alt: string;
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
    conversation: { slotNumber: 3, src: null, alt: "카페에서 편안하게 대화하는 두 사람" },
    conversationWalk: { slotNumber: 1, src: null, alt: "햇살 아래 나란히 걷는 두 사람" },
    conversationSmile: { slotNumber: 12, src: null, alt: "상대방의 이야기를 들으며 웃는 순간" },
    conversationMoment: { slotNumber: 10, src: null, alt: "함께 보내는 평범한 오후의 한 장면" },
    conversationEveryday: { slotNumber: 5, src: null, alt: "서로의 일상에 스며드는 작은 순간" },
    conversationLittleMoment: { slotNumber: 2, src: null, alt: "함께 웃으며 남긴 작은 추억" },
    conversationCoffee: { slotNumber: 9, src: null, alt: "커피 한 잔과 함께 이어지는 대화" },
    conversationWindow: {
        slotNumber: 8,
        src: null,
        alt: "창가에서 서로의 이야기에 귀 기울이는 순간",
    },
    conversationLaugh: { slotNumber: 7, src: null, alt: "마주 보고 자연스럽게 웃는 모습" },
    conversationBakery: { slotNumber: 4, src: null, alt: "빵집에서 함께 빵을 고르는 두 사람" },
    conversationFountain: { slotNumber: 6, src: null, alt: "분수대 곁에서 함께 쉬어 가는 오후" },
    conversationEvening: { slotNumber: 13, src: null, alt: "저녁 산책을 함께하는 사람" },
    conversationNewMemory: { slotNumber: 11, src: null, alt: "함께 보내며 새롭게 쌓이는 추억" },
    todayDetail: { slotNumber: 14, src: null, alt: "함께 보내는 저녁의 작은 순간" },
    todayGroup: { slotNumber: 17, src: null, alt: "오늘의 약속을 함께 즐기는 친구들" },
    todayWalk: { slotNumber: 15, src: null, alt: "가볍게 산책하며 이야기를 나누는 친구들" },
    todayCoffee: { slotNumber: 16, src: null, alt: "같이 마시는 커피와 편안한 대화" },
    todaySunset: { slotNumber: 18, src: null, alt: "노을 아래 함께 보내는 저녁" },
    todayLaugh: { slotNumber: 19, src: null, alt: "뜻밖의 약속에서 함께 웃는 순간" },
    clubActivity: { slotNumber: 20, src: null, alt: "같은 취미를 함께 즐기는 동아리 사람들" },
    clubDetail: { slotNumber: 21, src: null, alt: "함께하는 취미 속에서 웃는 사람들" },
    clubReading: { slotNumber: 22, src: null, alt: "좋아하는 책에 대해 이야기하는 동아리" },
    clubMaking: { slotNumber: 23, src: null, alt: "손으로 무언가를 만들며 함께하는 동아리" },
    clubOutdoor: { slotNumber: 24, src: null, alt: "야외에서 같은 취미를 즐기는 친구들" },
} satisfies Record<string, StoryPhotoAsset>;
