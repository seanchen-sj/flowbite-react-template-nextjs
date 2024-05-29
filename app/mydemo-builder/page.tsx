import { Alert } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface SectionHeaderProps {
  leftIconSrc: string;
  centerText: string;
  rightIconSrc: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  leftIconSrc,
  centerText,
  rightIconSrc,
}) => (
  <div className="mt-3 flex flex-nowrap justify-between gap-5 self-center text-2xl text-black backdrop:items-start">
    <img src={leftIconSrc} alt="" className="aspect-square w-8 shrink-0" />
    <div className="my-auto self-stretch">{centerText}</div>
    <img src={rightIconSrc} alt="" className="aspect-square w-8 shrink-0" />
  </div>
);

export default function MyPage() {
  return (
    <>
      <section className="flex max-w-[375px] flex-col bg-white pt-3 mix-blend-luminosity">
        <header className="z-10 flex w-full flex-col px-4">
          <SectionHeader
            leftIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fa495ad42dd5d0bb3c7f2a1ec365c683bdadd18970f8e7d0bffa1f11867b72b2?apiKey=4539d83b05234f3aaadbfd08f2338dd6&"
            centerText="訂單資訊"
            rightIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f0ad6bf055a4e8e7e84399ff57f1b94fdd96c95a18a0eba25b52eac4b2feba95?apiKey=4539d83b05234f3aaadbfd08f2338dd6&"
          />
        </header>

        <form className="mt-3 flex gap-3 whitespace-nowrap rounded-xl bg-stone-100 px-2 py-7 shadow-sm">
          <div className="flex flex-col">
            <label
              htmlFor="serial"
              className="text-lg font-bold tracking-wide text-black"
            >
              序列號
            </label>
            <div className="mt-5 flex justify-between gap-5 rounded-lg border border-solid border-neutral-200 bg-white py-1 pl-4 pr-2 text-base text-neutral-400">
              <span className="my-auto">S/N.</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c6bcb35c4438858e454938373930a941531806ee73b02aa583160f9e4973eab?apiKey=4539d83b05234f3aaadbfd08f2338dd6&"
                alt="Check icon"
                className="aspect-square w-8 shrink-0"
              />
            </div>
          </div>
          <button
            type="button"
            className="mt-9 flex flex-col justify-center self-end rounded-xl text-center text-sm font-medium tracking-widest text-black shadow-sm"
          >
            <div className="justify-center rounded-xl bg-yellow-400 px-7 py-3.5">
              核對
            </div>
          </button>
        </form>

        <section className="mt-4 flex w-full flex-col whitespace-nowrap rounded-xl bg-blue-50 px-2 pb-2 pt-4">
          <header className="flex justify-between gap-5">
            <h2 className="text-lg font-bold tracking-wide text-black">
              送貨單資訊
            </h2>
            <span className="my-auto text-xs font-medium tracking-widest text-sky-600">
              查看更多
            </span>
          </header>
          <div className="mt-4 flex gap-4 rounded-xl text-base tracking-normal text-black">
            <div className="flex flex-1 flex-col justify-center rounded-lg bg-white px-4 py-0.5">
              <span>總數量</span>
              <span className="self-center">13</span>
            </div>
            <div className="flex flex-1 flex-col justify-center rounded-lg bg-white px-4 py-0.5">
              <span>已掃描</span>
              <span className="self-center">0</span>
            </div>
            <div className="flex flex-1 flex-col justify-center rounded-lg bg-white px-4 py-0.5">
              <span>待掃描</span>
              <span className="self-center">2</span>
            </div>
          </div>
        </section>

        <section className="mt-4 flex w-full flex-col justify-center whitespace-nowrap rounded-xl border border-dashed border-neutral-400 bg-stone-100 pb-3.5 text-center text-white">
          <span className="size-4 items-center justify-center self-end rounded-full bg-green-400 px-1.5 text-xs font-bold tracking-widest">
            5
          </span>
          <div className="flex gap-2 overflow-x-auto pr-5 text-sm font-medium tracking-widest">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcd81a66d699ac905eaaef6c9d2bbd5828bb5f1e6ab9108dd7c1c2f85d45a7ba?apiKey=4539d83b05234f3aaadbfd08f2338dd6&"
              alt="Image 1"
              className="aspect-square w-[72px] shrink-0"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/99a4ae7a1a8a2ac795c4e4db3071187ab8b25c3f50a04085734f67a1719e3d6b?apiKey=4539d83b05234f3aaadbfd08f2338dd6&"
              alt="Image 2"
              className="aspect-square w-[72px] shrink-0"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/99a4ae7a1a8a2ac795c4e4db3071187ab8b25c3f50a04085734f67a1719e3d6b?apiKey=4539d83b05234f3aaadbfd08f2338dd6&"
              alt="Image 3"
              className="aspect-square w-[72px] shrink-0"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/99a4ae7a1a8a2ac795c4e4db3071187ab8b25c3f50a04085734f67a1719e3d6b?apiKey=4539d83b05234f3aaadbfd08f2338dd6&"
              alt="Image 4"
              className="aspect-square w-[72px] shrink-0"
            />
            <div className="flex size-[72px] flex-col rounded-xl bg-neutral-200 px-5 py-2.5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc4994bceeb4d7333ce99faf000b142bf613d204f85817938b9dabcb4dd86a58?apiKey=4539d83b05234f3aaadbfd08f2338dd6&"
                alt="Upload icon"
                className="aspect-square w-8 self-center"
              />
              <span>上傳</span>
            </div>
          </div>
        </section>

        <h2 className="mt-5 text-center text-lg font-bold tracking-wide text-black">
          序列號紀錄
        </h2>
        <section className="mt-2 flex flex-col flex-wrap content-start whitespace-nowrap rounded-3xl bg-yellow-50 p-4 tracking-wide text-black shadow-sm">
          <h3 className="text-lg font-bold">AA7R047</h3>
          <p className="mt-1 justify-center rounded-3xl bg-white py-1 text-base">
            AA7R047002496
          </p>
        </section>

        <div className="mt-3 h-2.5 shrink-0 content-start rounded-3xl bg-yellow-50 shadow-sm" />

        <footer className="-mt-3 flex w-full flex-col justify-center whitespace-nowrap px-11 py-3 text-center text-sm font-medium tracking-widest text-white">
          <div className="flex gap-4">
            <button
              type="button"
              className="flex flex-col justify-center rounded-xl shadow-sm"
            >
              <div className="justify-center rounded-xl bg-green-400 px-7 py-3.5">
                完成
              </div>
            </button>
            <button
              type="button"
              className="flex flex-col justify-center rounded-xl shadow-sm"
            >
              <div className="justify-center rounded-xl bg-amber-500 px-7 py-3.5">
                跟進
              </div>
            </button>
            <button
              type="button"
              className="flex flex-col justify-center rounded-xl shadow-sm"
            >
              <div className="justify-center rounded-xl bg-neutral-400 px-7 py-3.5">
                取消
              </div>
            </button>
          </div>
        </footer>
      </section>
    </>
  );
}
