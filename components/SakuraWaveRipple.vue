<template>
    <svg
      class="sakura-waves-ripple" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28"
      preserveAspectRatio="none" shape-rendering="auto"
    >
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="var(--va-c-bg-soft)"/>
      </defs>
      <g class="sakura-waves-ripple-parallax">
        <use xlink:href="#gentle-wave" x="48" y="0"/>
        <use xlink:href="#gentle-wave" x="48" y="3"/>
        <use xlink:href="#gentle-wave" x="48" y="5"/>
        <use xlink:href="#gentle-wave" x="48" y="7"/>
      </g>
    </svg>
</template>
  
<style lang="scss" scoped>
  .sakura-waves-ripple {
    position: absolute;
    width: 100%;
    height: 15vh;
    min-height: 100px;
    max-height: 150px;
    bottom: 0;
    left: 0;
  
    &-parallax > use {
      animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    }
  
    &-parallax > use:nth-child(4) {
      opacity: 0.9;
      animation-delay: -2s;
      animation-duration: 7s;
    }
  
    &-parallax > use:nth-child(3) {
      opacity: 0.7;
      animation-delay: -3s;
      animation-duration: 10s;
    }
    &-parallax > use:nth-child(2) {
      opacity: 0.5;
      animation-delay: -4s;
      animation-duration: 13s;
    }
  
    &-parallax > use:nth-child(1) {
      opacity: 0.3;
      animation-delay: -5s;
      animation-duration: 20s;
    }
  }
  
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
  
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
  
  /* Shrinking for mobile */
  
  @media (width <= 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }
  }
</style>
  