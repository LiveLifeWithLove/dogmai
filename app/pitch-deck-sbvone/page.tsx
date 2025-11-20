"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedProgress, Box, Deck, FlexBox, FullScreen, Heading, Slide } from "spectacle";

const deckTheme = {
  colors: {
    primary: "#131e63",
    secondary: "#8dbfeb",
    background: "#e6edfc",
  },
  fonts: {
    header: "var(--font-manrope, 'Manrope', sans-serif)",
    text: "var(--font-manrope, 'Manrope', sans-serif)",
  },
};

const slideShell =
  "relative flex min-h-screen flex-col overflow-hidden rounded-[36px] border border-[#131e63]/10 bg-white px-8 py-16 text-[#131e63] lg:px-12 lg:py-20 shadow-[0_30px_80px_rgba(19,30,99,0.12)]";

const DeckTemplate = () => (
  <FlexBox
    justifyContent="space-between"
    alignItems="center"
    position="absolute"
    bottom="1.5rem"
    width={1}
    padding="0 2.5rem"
  >
    <Box padding="0 1em">
      <FullScreen color={deckTheme.colors.primary} />
    </Box>
    <Box padding="0 1em" flex="1" display="flex" justifyContent="center">
      <AnimatedProgress
        size={8}
        color={deckTheme.colors.primary}
        pacmanColor={deckTheme.colors.secondary}
      />
    </Box>
  </FlexBox>
);

const SlideTop = () => (
  <div className="flex flex-wrap items-center justify-between gap-4">
    <Link
      href="/"
      className="flex items-center gap-4 border border-[#131e63]/15 bg-white px-4 py-2 text-[#131e63]  transition hover:border-[#131e63]/40"
    >
      <div className="relative h-12 w-40 overflow-hidden bg-[#e6edfc]">
        <Image
          src="/sbv_logo.png"
          alt="Starting Block Ventures logo"
          fill
          className="object-contain py-1"
          sizes="160px"
        />
      </div>
    </Link>
    <p className="text-[11px] uppercase tracking-[0.35em] text-[#131e63]/50">Partnership Pitch</p>
  </div>
);

const TitleSlide = () => (
  <div className={slideShell}>
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute -left-20 top-[-120px] h-80 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(141, 191, 235, 0.35)" }}
      />
      <div
        className="absolute -right-10 bottom-[-80px] h-72 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(230, 237, 252, 0.65)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6f9ff] via-[#e6edfc] to-white" />
    </div>

    <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-8 text-center">
      <SlideTop />

      <div className="space-y-6">
        <Heading
          fontSize="clamp(3.2rem, 5vw, 4.8rem)"
          lineHeight={1.15}
          fontWeight={700}
          textAlign="center"
          fontFamily="var(--font-manrope, 'Manrope', sans-serif)"
          color="#131e63"
        >
          Strategic Innovation Partnership Proposal
        </Heading>
        <p className="text-lg font-semibold text-[#131e63]">
          Starting Block Ventures &times; Infinivan
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col gap-4 border border-[#131e63]/10 bg-[#f8fbff] px-6 py-8 ">
          <p className="text-sm uppercase tracking-[0.4em] text-[#8dbfeb]">Vision</p>
          <p className="text-base text-[#131e63]/80">
            Aligning venture-backed innovation with national-scale connectivity to accelerate the
            future of Philippine telecommunications &amp; digital infrastructure.
          </p>
        </div>
        <div
          className="border px-6 py-5 text-sm font-semibold"
          style={{
            borderColor: "rgba(141, 191, 235, 0.45)",
            backgroundColor: "rgba(141, 191, 235, 0.25)",
            color: "#131e63",
          }}
        >
          Accelerating the Future of Philippine Telecommunications &amp; Digital Infrastructure
        </div>
      </div>
    </div>
  </div>
);

export default function PitchDeckSBVOne() {
  return (
    <div className="min-h-screen bg-[#e6edfc] text-[#131e63]">
      <div className="relative min-h-screen overflow-hidden bg-[#e6edfc]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-12">
          <Deck template={<DeckTemplate />} theme={deckTheme}>
            <Slide backgroundColor="transparent" padding={0}>
              <TitleSlide />
            </Slide>
          </Deck>
        </div>
      </div>
    </div>
  );
}
