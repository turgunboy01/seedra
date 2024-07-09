/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".custom-btn": {
          "@apply text-[#359740] border border-[#EFEFEF] bg-white rounded-[8px] px-[33px] py-[11px] text-[16px] font-medium leading-[178.187%] tracking-[-0.56px]":
            {},
        },
        ".custom-btnG": {
          "@apply text-white bg-[#359740] rounded-[8px] px-[33px] py-[11px] text-[16px] font-medium leading-[178.187%] tracking-[-0.56px]":
            {},
        },
        ".custom-title": {
          "@apply text-[#1F2533] text-[36px] font-semibold leading-[54px] tracking-[-1.8px]":
            {},
        },
      });
    },
  ],
};
