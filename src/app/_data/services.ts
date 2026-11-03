export const services = [
    {
        name: "틸드",
        englishName: "TILDE",
        href: "/tilde/",
        description: "취향이 닮은 사람과 나누는 대화, 오늘의 번개모임, 자주 보는 동아리.",
        image: "/images/tilde/photography/community.webp",
        colors: "bg-[#edf0e7] text-[#334631]",
    },
    {
        name: "어썸",
        englishName: "AWESOME",
        href: "/awesome/",
        description: "프로필에서 발견한 공통점에 첫 편지를 담아, 두 사람의 약속까지.",
        image: "/images/awesome/photography/connection-scene.webp",
        colors: "bg-[#eaeaf0] text-[#303b55]",
    },
];

export type CompanyService = (typeof services)[number];
