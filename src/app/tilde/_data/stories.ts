export type StoryPhotoAsset = {
    src: string | null;
    alt: string;
};

export const conversationStory = {
    eyebrow: "서로를 알아가는 시간",
    title: "대화가 편해지는\n순간.",
    description: "좋아하는 것부터 사소한 하루까지.\n이야기를 나눌수록, 조금씩 가까워져요.",
};

export const todayStory = {
    eyebrow: "오늘을 함께하는 사람들",
    title: "오늘,\n같이 할까요?",
    description:
        "문득 걷고 싶은 저녁, 가볍게 나누는 커피 한 잔.\n시간이 맞는 사람들과 오늘의 작은 약속을 만들어요.",
};

export const clubsStory = {
    eyebrow: "좋아하는 것으로 이어지는 동아리",
    title: "다음 주에도,\n우리 만나요.",
    description:
        "같은 취미로 모여, 함께하는 시간이 쌓이면.\n좋아하는 일 곁에 좋아하는 사람들이 남아요.",
};

export const storyPhotos = {
    conversation: { src: null, alt: "카페에서 편안하게 대화하는 두 사람" },
    todayDetail: { src: null, alt: "함께 보내는 저녁의 작은 순간" },
    todayGroup: { src: null, alt: "오늘의 약속을 함께 즐기는 친구들" },
    clubActivity: { src: null, alt: "같은 취미를 함께 즐기는 동아리 사람들" },
    clubDetail: { src: null, alt: "함께하는 취미 속에서 웃는 사람들" },
} satisfies Record<string, StoryPhotoAsset>;
