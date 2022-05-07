<template>
    <div class="loading-page">
        <svg class="animate-flicker" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 56 56">
        <defs>
            <linearGradient id="a" x1="1.15" x2="42.43" y1="54.58" y2="13.3" gradientUnits="userSpaceOnUse">
            <stop stop-color="#ff1a55" offset="0"/>
            <stop stop-color="#bf0e66" offset="1"/>
            </linearGradient>
        </defs>
        <title>enok-logo</title>
        <path class="cls-1" d="m30.38 6.38l-24.06 24.11a3.64 3.64 0 0 1 -5.15 -5.14c5.14-5.14 18.92-19 24.06-24.11a3.64 3.64 0 0 1 5.15 5.14zm25.12 21.54a3.64 3.64 0 0 0 -6.21 -2.57l-24.06 24.12a3.58 3.58 0 0 0 -1.06 2.53 3.63 3.63 0 0 0 6.21 2.57l24.06-24.08a3.64 3.64 0 0 0 1.06 -2.57zm-24.06 0a3.64 3.64 0 0 0 -6.21 -2.57l-24.06 24.12a3.63 3.63 0 1 0 5.15 5.13l24.06-24.11a3.6 3.6 0 0 0 1.06 -2.57z"/>
        </svg>
    </div>
</template>

<style scoped>
.loading-page {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(58,60,109);
    background: radial-gradient(circle, rgba(46,46,81,1) 0%, rgba(6,6,12,1) 100%);
}
svg {
    width: 40px;
}
@-webkit-keyframes flickerAnimation {
  0%   { opacity: 1; }
  50%  { opacity: 0.5; }
  100% { opacity: 1; }
}
@keyframes flickerAnimation {
  0%   { opacity: 1; }
  50%  { opacity: 0.5; }
  100% { opacity: 1; }
}

.animate-flicker {
   -webkit-animation: flickerAnimation 1s infinite ease-in-out;
   -moz-animation: flickerAnimation 1s infinite ease-in-out;
   -o-animation: flickerAnimation 1s infinite ease-in-out;
    animation: flickerAnimation 1s infinite ease-in-out;
}
</style>