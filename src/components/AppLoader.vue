<template>
  <div :class="$style.root">
    <div :class="$style.circle1"></div>
    <div :class="$style.circle2"></div>
    <div :class="$style.circle3"></div>

    <div v-for="i in 4" :key="i" :class="$style[`orbit${i}`]">
      <div :class="$style[`pos${i}`]">
        <div :class="$style[`dot${i}`]"></div>
      </div>
    </div>
  </div>
</template>

<style module>
.root {
  transform: rotateX(75deg);
  transform-style: preserve-3d;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
}

.circle1,
.circle2,
.circle3 {
  border-radius: 50%;
  border: 1px solid var(--base-light);
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  margin-left: -0.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotateX(-75deg);
}

.circle1 {
  -webkit-animation: spinner1 1.5s infinite ease;
  font-size: 6em;
}

.circle2 {
  -webkit-animation: spinner2 2s infinite ease;
  font-size: 5em;
}

.circle3 {
  -webkit-animation: spinner3 2.5s infinite ease;
  font-size: 4em;
}

.orbit1,
.orbit2,
.orbit3,
.pos1,
.pos2,
.pos3 {
  animation-duration: 3s;
}

.orbit1,
.orbit2,
.orbit3 {
  transform-style: preserve-3d;
  position: absolute;
  top: 50%;
  left: 50%;
  animation-name: orbit;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  width: 8em;
  height: 8em;
  margin-top: -4em;
  margin-left: -4em;
  border-radius: 50%;
}

.pos1,
.pos2,
.pos3 {
  position: absolute;
  width: 2em;
  height: 2em;
  margin-left: -1em;
  margin-top: -1em;
  animation-name: invert;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  left: 50%;
  top: -1px;
}

.dot1,
.dot2,
.dot3 {
  background-color: var(--base-light);
  width: 0.5em;
  height: 0.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -0.25em;
  margin-left: -0.25em;
  border-radius: 50%;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  font-size: 0.2em;
}

.orbit1,
.dot1,
.pos1 {
  animation-delay: -1s;
}

.orbit2,
.orbit2,
.pos2 {
  animation-delay: -2s;
}

@keyframes orbit {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(-360deg);
  }
}

@keyframes invert {
  0% {
    transform: rotateX(-90deg) rotateY(360deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
  }
}

@keyframes spinner1 {
  0% {
    -webkit-transform: rotate3d(1, 0, 1, 0deg);
  }
  50% {
    -webkit-transform: rotate3d(1, 0, 1, 180deg);
  }
  100% {
    -webkit-transform: rotate3d(1, 0, 1, 360deg);
  }
}

@keyframes spinner2 {
  0% {
    -webkit-transform: rotate3d(0, 1, 1, 0deg);
  }
  50% {
    -webkit-transform: rotate3d(0, 1, 1, 180deg);
  }
  100% {
    -webkit-transform: rotate3d(0, 1, 1, 360deg);
  }
}

@keyframes spinner3 {
  0% {
    -webkit-transform: rotate3d(1, 1, 0, 0deg);
  }
  50% {
    -webkit-transform: rotate3d(1, 1, 0, 180deg);
  }
  100% {
    -webkit-transform: rotate3d(1, 1, 0, 360deg);
  }
}
</style>
