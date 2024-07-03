<template>
  <div class="keypad h-full rounded-md bg-[#050505] mx-1 p-1">
    <Row>
      <KBtn class="w-10 items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">
        esc
      </KBtn>
      <KBtn>
        <IconBrightnessDown class="icon" />
        <span class="inline-block mt-1">F1</span>
      </KBtn>
      <KBtn>
        <IconBrightnessUp class="icon" />
        <span class="inline-block mt-1">F2</span>
      </KBtn>
      <KBtn>
        <IconTable class="icon" />
        <span class="inline-block mt-1">F3</span>
      </KBtn>
      <KBtn>
        <IconSearch class="icon" />
        <span class="inline-block mt-1">F4</span>
      </KBtn>
      <KBtn>
        <IconMicrophone class="icon" />
        <span class="inline-block mt-1">F5</span>
      </KBtn>
      <KBtn>
        <IconMoon class="icon" />
        <span class="inline-block mt-1">F6</span>
      </KBtn>
      <KBtn>
        <IconPlayerTrackPrev class="icon" />
        <span class="inline-block mt-1">F7</span>
      </KBtn>
      <KBtn>
        <IconPlayerSkipForward class="icon" />
        <span class="inline-block mt-1">F8</span>
      </KBtn>
      <KBtn>
        <IconPlayerTrackNext class="icon" />
        <span class="inline-block mt-1">F9</span>
      </KBtn>
      <KBtn>
        <IconVolume3 class="icon" />
        <span class="inline-block mt-1">F10</span>
      </KBtn>
      <KBtn>
        <IconVolume2 class="icon" />
        <span class="inline-block mt-1">F11</span>
      </KBtn>
      <KBtn>
        <IconVolume class="icon" />
        <span class="inline-block mt-1">F12</span>
      </KBtn>
      <KBtn>
        <div class="icon-circle">
          <div class="inner-circle" />
        </div>
      </KBtn>
    </Row>
    <Row>
      <KBtn>
        <span class="block">~</span>
        <span class="block mt-1">`</span>
      </KBtn>
      <KBtn>
        <span class="block">!</span>
        <span class="block">1</span>
      </KBtn>
      <KBtn>
        <span class="block">@</span>
        <span class="block">2</span>
      </KBtn>
      <KBtn>
        <span class="block">#</span>
        <span class="block">3</span>
      </KBtn>
      <KBtn>
        <span class="block">$</span>
        <span class="block">4</span>
      </KBtn>
      <KBtn>
        <span class="block">%</span>
        <span class="block">5</span>
      </KBtn>
      <KBtn>
        <span class="block">^</span>
        <span class="block">6</span>
      </KBtn>
      <KBtn>
        <span class="block">&</span>
        <span class="block">7</span>
      </KBtn>
      <KBtn>
        <span class="block">*</span>
        <span class="block">8</span>
      </KBtn>
      <KBtn>
        <span class="block">(</span>
        <span class="block">9</span>
      </KBtn>
      <KBtn>
        <span class="block">)</span>
        <span class="block">0</span>
      </KBtn>
      <KBtn>
        <span class="block">&mdash;</span>
        <span class="block">_</span>
      </KBtn>
      <KBtn>
        <span class="block">+</span>
        <span class="block">=</span>
      </KBtn>
      <KBtn class="w-10 items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">
        delete
      </KBtn>
    </Row>
    <Row>
      <KBtn class="w-10 items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">
        tab
      </KBtn>
      <KBtn>
        <span class="block">Q</span>
      </KBtn>
      <KBtn>
        <span class="block">W</span>
      </KBtn>
      <KBtn>
        <span class="block">E</span>
      </KBtn>
      <KBtn>
        <span class="block">R</span>
      </KBtn>
      <KBtn>
        <span class="block">T</span>
      </KBtn>
      <KBtn>
        <span class="block">Y</span>
      </KBtn>
      <KBtn>
        <span class="block">U</span>
      </KBtn>
      <KBtn>
        <span class="block">I</span>
      </KBtn>
      <KBtn>
        <span class="block">O</span>
      </KBtn>
      <KBtn>
        <span class="block">P</span>
      </KBtn>
      <KBtn>
        <span class="block">}</span>
        <span class="block">[</span>
      </KBtn>
      <KBtn>
        <span class="block">}</span>
        <span class="block">]</span>
      </KBtn>
      <KBtn>
        <span class="block">|</span>
        <span class="block">\\</span>
      </KBtn>
    </Row>
    <Row>
      <KBtn class="w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">
        caps lock
      </KBtn>
      <KBtn>
        <span class="block">A</span>
      </KBtn>
      <KBtn>
        <span class="block">S</span>
      </KBtn>
      <KBtn>
        <span class="block">D</span>
      </KBtn>
      <KBtn>
        <span class="block">F</span>
      </KBtn>
      <KBtn>
        <span class="block">G</span>
      </KBtn>
      <KBtn>
        <span class="block">H</span>
      </KBtn>
      <KBtn>
        <span class="block">J</span>
      </KBtn>
      <KBtn>
        <span class="block">K</span>
      </KBtn>
      <KBtn>
        <span class="block">L</span>
      </KBtn>
      <KBtn>
        <span class="block">:</span>
        <span class="block">;</span>
      </KBtn>
      <KBtn>
        <span class="block">"</span>
        <span class="block">'</span>
      </KBtn>
      <KBtn class="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">
        return
      </KBtn>
    </Row>
    <Row>
      <KBtn class="w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">
        shift
      </KBtn>
      <KBtn>
        <span class="block">Z</span>
      </KBtn>
      <KBtn>
        <span class="block">X</span>
      </KBtn>
      <KBtn>
        <span class="block">C</span>
      </KBtn>
      <KBtn>
        <span class="block">V</span>
      </KBtn>
      <KBtn>
        <span class="block">B</span>
      </KBtn>
      <KBtn>
        <span class="block">N</span>
      </KBtn>
      <KBtn>
        <span class="block">M</span>
      </KBtn>
      <KBtn>
        <span class="block"><</span>
        <span class="block">,</span>
      </KBtn>
      <KBtn>
        <span class="block">></span>
        <span class="block">.</span>
      </KBtn>
      <KBtn>
        <span class="block">?</span>
        <span class="block">/</span>
      </KBtn>
      <KBtn class="w-[3.75rem] items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">
        shift
      </KBtn>
    </Row>
    <Row>
      <KBtn class="w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">
        control
      </KBtn>
      <KBtn class="items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">
        option
      </KBtn>
      <KBtn class="items-end justify-start pl-[4px] pb-[2px]" childrenClassName="items-start">
        command
      </KBtn>
      <KBtn class="w-36 items-end justify-center pl-[4px] pb-[2px]" childrenClassName="items-center">
        <div class="space-bar h-full w-full" :style="spaceBarStyle"></div>
      </KBtn>
      <KBtn class="items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">
        command
      </KBtn>
      <KBtn class="items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">
        option
      </KBtn>
      <KBtn class="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]" childrenClassName="items-end">
        control
      </KBtn>
    </Row>
  </div>
</template>

<script setup>
const spaceBarStyle = {
  boxShadow: "0px 0px 1px 1px #00000020 inset",
};

import { defineComponent } from "vue";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconTable,
  IconSearch,
  IconMicrophone,
  IconMoon,
  IconPlayerTrackPrev,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconVolume3,
  IconVolume2,
  IconVolume,
} from "@tabler/icons-vue";
import KBtn from "./KBtn.vue";
import Row from "./Row.vue";
</script>

<style scoped>
.space-bar {
  box-shadow: 0px 0px 1px 1px #00000020 inset;
}
</style>
