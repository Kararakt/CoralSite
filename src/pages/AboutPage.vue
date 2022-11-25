<script lang="ts" setup></script>
<template>
  <div class="py-36 flex flex-col gap-4 paddingX">
    <div class="relative h-auto">
      <div
        class="absolute z-10 top-[50%] right-[5%] textPositionAbout flex flex-col gap-2"
      >
        <h1 class="text-5xl colorTextHomePage text-[#13101E] font-bold textEnd">
          About
        </h1>
        <div class="text-xl smallText text-[#626262]">
          Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
          simply dummy text of the printing.
        </div>
      </div>
      <el-image
        src="/src/assets/main_about_pic.png"
        class="w-full imageAboutPage"
      />
    </div>
    <div class="flex flex-col gap-2 text-center pt-16 pb-16">
      <h1 class="text-[#171520] text-2xl">About</h1>
      <div class="text-xl text-[#626262]">
        Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply
        dummy text of<br />
        the printing. Lorem Ipsum is simply dummy text of the printing. Lorem
        Ipsum is simply dummy<br />
        text of the printing. Lorem Ipsum is simply dummy text of the printing.
        Lorem Ipsum is simply dummy text of the printing.
      </div>
    </div>
    <div class="container mx-auto flex flex-col gap-10">
      <div class="grid grid-cols-2 clearFlex gap-10">
        <div class="flex flex-col gap-2 justify-center">
          <h1 class="text-[#171520] text-2xl font-bold text-center">About</h1>
          <div class="text-xl text-[#626262]">
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing. Lorem Ipsum is simply dummy text
            of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing.
          </div>
        </div>
        <el-image src="/src/assets/about_one.png" />
      </div>
      <div class="grid grid-cols-2 clearFlex gap-10">
        <el-image src="/src/assets/about_two.png" />
        <div class="flex flex-col gap-2 justify-center">
          <h1 class="text-[#171520] text-2xl font-bold text-center">About</h1>
          <div class="text-xl text-[#626262]">
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing. Lorem Ipsum is simply dummy text
            of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing.
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 clearFlex gap-10">
        <div class="flex flex-col gap-2 justify-center">
          <h1 class="text-[#171520] text-2xl font-bold text-center">About</h1>
          <div class="text-xl text-[#626262]">
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing. Lorem Ipsum is simply dummy text
            of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing.
          </div>
        </div>
        <el-image src="/src/assets/about_three.png" />
      </div>
    </div>
  </div>
</template>
