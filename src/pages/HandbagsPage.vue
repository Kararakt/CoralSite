<script lang="ts" setup>
import PreviewItemsCard from "../components/PreviewItemsCard.vue";
import {
  sortingDirection,
  countPerPage,
  selectedSorting,
  sortedItems,
  itemsPagesCounts,
  currentPage,
  collapseColorItems,
  collapseColor,
  collapseBrandItems,
  collapseBrand,
  collapseSizeItems,
  collapseSize,
  collapsePriceRangeItems,
  collapsePriceRange,
} from "../modules/ProductHelper";
import { scrollToTop } from "../modules/UtilityHelper";

const countItems = [
  {
    id: 1,
    count: 3,
    itemCount: "3 products",
  },
  {
    id: 2,
    count: 6,
    itemCount: "6 products",
  },
  {
    id: 3,
    count: 9,
    itemCount: "9 products",
  },
  {
    id: 4,
    count: 15,
    itemCount: "15 products",
  },
];

const secondCountItems = [
  {
    id: 1,
    label: "Price",
    value: "cost",
  },
  {
    id: 2,
    label: "Brands",
    value: "title",
  },
];

let firstActiveGrid = ref(true);
let secondActiveGrid = ref(false);
let firstActiveColorIcon = ref(true);
let secondActiveColorIcon = ref(false);

const firstActivationGrid = () => {
  secondActiveColorIcon.value = !secondActiveColorIcon.value;
  firstActiveColorIcon.value = !firstActiveColorIcon.value;
  firstActiveGrid.value = !firstActiveGrid.value;
  secondActiveGrid.value = !secondActiveGrid.value;
};
const secondActivationGrid = () => {
  firstActiveColorIcon.value = !firstActiveColorIcon.value;
  secondActiveColorIcon.value = !secondActiveColorIcon.value;
  secondActiveGrid.value = !secondActiveGrid.value;
  firstActiveGrid.value = !firstActiveGrid.value;
};
</script>
<template>
  <div>
    <div class="container mx-auto pt-16 pb-36">
      <div class="relative h-full">
        <div
          class="absolute z-10 flex flex-col gap-6 text-[#13101E] handbagPic right-[15%] top-[25%]"
        >
          <h1 class="font-bold text-7xl">UPTO 70% OFF</h1>
          <span class="text-7xl">BLACK FRIDAY</span>
        </div>
        <el-image
          src="/src/assets/handbags_main_pic.png"
          class="imageHandbag w-full"
        />
      </div>
    </div>
    <div class="container mx-auto flex mainCol PadX gap-[5.5rem]">
      <div class="flex flex-col gap-6 customPadding">
        <div class="flex items-center text-xl gap-3">
          <h1
            class="text-[#1B4B66] text-2xl hover:text-[#639599] cursor-pointer"
            @click="$router.push('/'), scrollToTop()"
          >
            Home
          </h1>
          <el-icon><ArrowRight class="text-[#60578a]" /></el-icon>
          <h1 class="cursor-text text-[#626262] text-2xl">Handbag</h1>
        </div>
        <h1 class="text-4xl font-bold text-[#1B4B66]">Handbags</h1>
        <div class="flex flex-col gap-6 divCollapse">
          <el-collapse class="flex flex-col gap-4"
            ><el-collapse-item
              ><template #title
                ><div class="text-[#13101E] font-bold text-2xl">
                  Size
                </div></template
              >

              <el-checkbox-group
                v-model="collapseSize"
                class="flex flex-col"
                v-for="collapseSizeItem in collapseSizeItems"
              >
                <el-checkbox
                  :label="collapseSizeItem"
                /> </el-checkbox-group></el-collapse-item
            ><el-collapse-item
              ><template #title
                ><div class="text-[#13101E] text-2xl font-bold">
                  Color
                </div></template
              >

              <el-checkbox-group
                v-model="collapseColor"
                class="flex flex-col"
                v-for="collapseColorItem in collapseColorItems"
              >
                <el-checkbox
                  :label="collapseColorItem"
                /> </el-checkbox-group></el-collapse-item
            ><el-collapse-item
              ><template #title
                ><div class="text-[#13101E] font-bold text-2xl">
                  Brands
                </div></template
              >
              <el-checkbox-group
                v-model="collapseBrand"
                class="flex flex-col"
                v-for="collapseBrandItem in collapseBrandItems"
              >
                <el-checkbox
                  :label="collapseBrandItem"
                /> </el-checkbox-group></el-collapse-item
            ><el-collapse-item
              ><template #title
                ><div class="text-[#13101E] font-bold text-2xl">
                  Price Range
                </div></template
              >
              <el-checkbox-group
                v-model="collapsePriceRange"
                class="flex flex-col"
                v-for="collapsePriceRangeItem in collapsePriceRangeItems"
              >
                <el-checkbox
                  :label="collapsePriceRangeItem"
                /> </el-checkbox-group></el-collapse-item
          ></el-collapse>
        </div>
      </div>
      <div class="flex flex-col gap-6 w-full">
        <div class="flex w-full h-10 justify-between colMenu">
          <div class="flex text gap-4 items-center textCenter">
            <div
              class="mainClassIcon"
              id="firstIcon"
              :class="{ firstActiveIcon: firstActiveColorIcon }"
              @click="firstActivationGrid"
            >
              <font-awesome-icon icon="fa-solid fa-list" />
            </div>
            <div
              class="mainClassIcon"
              id="secondIcon"
              :class="{ secondActiveIcon: secondActiveColorIcon }"
              @click="secondActivationGrid"
            >
              <font-awesome-icon icon="fa-solid fa-bars" />
            </div>
            <span class="text-xl"
              >Showing {{ sortedItems.length }} of 15 items
            </span>
          </div>
          <div class="flex items-center space-x-7 divHandBagsSelect">
            <el-radio-group v-model="sortingDirection">
              <el-radio label="asc"
                ><div class="text-lg">Ascending</div></el-radio
              >
              <el-radio label="desc"
                ><div class="text-lg">Descending</div></el-radio
              >
            </el-radio-group>
            <el-select placeholder="Select sorting" v-model="selectedSorting"
              ><el-option
                v-for="secondCountItem in secondCountItems"
                :key="secondCountItem.id"
                :label="secondCountItem.label"
                :value="secondCountItem.value"
              ></el-option
            ></el-select>
            <el-select v-model="countPerPage">
              <el-option
                v-for="countItem in countItems"
                :key="countItem.id"
                :value="countItem.count"
                :label="countItem.itemCount"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div
          :class="{
            firstActiveGrid: firstActiveGrid,
            secondActiveGrid: secondActiveGrid,
          }"
          class="pb-10"
        >
          <div v-for="allItem in sortedItems" :key="allItem.id">
            <PreviewItemsCard :item="allItem" />
          </div>
        </div>
        <div class="flex justify-center paginationDiv">
          <el-pagination
            v-model:current-page="currentPage"
            background
            layout="prev, pager, next"
            :page-count="itemsPagesCounts"
          />
        </div>
      </div>
    </div>
  </div>
</template>
