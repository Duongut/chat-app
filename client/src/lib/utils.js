import { clsx } from "clsx"; // 605 (gzipped: 356)
import { twMerge } from "tailwind-merge"; // 21k (gzipped: 6.7k)
import animationData from '@/assets/lottie-json.json';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const colors = [
    "bg-[#712c4a57] text-[#ff006e] border-[1px] border-[#ff006faa]",
    "bg-[#ff6d00a2] text-[#ffd60a] border-[1px] border-[#ffd60abb]",
    "bg-[#0066a02a] text-[#0066a0] border-[1px] border-[#0066a0bb]",
    "bg-[#4cc9f02a] text-[#4cc9f0] border-[1px] border-[#4cc9f0bb]",
];

export const getColor = (color) => {
    if (color >= 0 && color < colors.length) {
        return colors[color];
    }
    return colors[0]; // Fallback to the first color if out of range
}
export const animationDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
}
