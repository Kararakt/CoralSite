import { orderBy } from "lodash";

export const selectedSorting = ref<string>();
export const sortingDirection = ref<"asc" | "desc">("asc");
export const countPerPage = ref(15);
export const currentPage = ref(1);
export const collapseColor = ref<string[]>([]);
export const collapseBrand = ref<string[]>([]);
export const collapseSize = ref<string[]>([]);
export const collapsePriceRange = ref<string[]>([]);
export let activeTab = ref(1);
export let secondActiveTab = ref(1);

export interface handbagsView {
  id: number;
  src: string;
  title: string;
  name: string;
  cost: number;
  costOld: string;
  sale: string;
  rate: string;
  color: string;
  size: string;
  priceRange: string;
  url: string;
}

export const allItems = ref<handbagsView[]>([
  {
    id: 1,
    src: "/src/assets/first_preview_product.png",
    title: "Grande",
    name: "Blossom Pouch",
    cost: 39.49,
    costOld: "$78.66",
    sale: "50% OFF",
    rate: "43 Ratings ",
    color: "Blue",
    size: "XS",
    priceRange: "from 0$ to 40$",
    url: "/Grande",
  },
  {
    id: 2,
    src: "/src/assets/second_preview_product.png",
    title: "Coach",
    name: "Leather Coach Bag",
    cost: 54.69,
    costOld: "$78.66",
    sale: "50% OFF",
    rate: "43 Ratings ",
    color: "Maroon Red",
    size: "S",
    priceRange: "from 40$ to 55$",
    url: "/Coach",
  },
  {
    id: 3,
    src: "/src/assets/third_preview_product.png",
    title: "Remus",
    name: "Brown Strap Bag",
    cost: 57.54,
    costOld: "$78.66",
    sale: "50% OFF",
    rate: "43 Ratings ",
    color: "Seinna Pink",
    size: "M",
    priceRange: "from 55$ and above",
    url: "/Remus",
  },
  {
    id: 4,
    src: "/src/assets/fourth_preview_product.png",
    title: "Boujee",
    name: "Black Bag",
    cost: 56.49,
    costOld: "$78.66",
    sale: "50% OFF",
    rate: "43 Ratings ",
    color: "Teal",
    size: "L",
    priceRange: "from 55$ and above",
    url: "/Boujee",
  },
  {
    id: 5,
    src: "/src/assets/first_preview_product.png",
    title: "Grande",
    name: "Blossom Pouch",
    cost: 39.49,
    costOld: "$78.66",
    sale: "50% OFF",
    rate: "43 Ratings ",
    color: "Aquamarine",
    size: "XL",
    priceRange: "from 0$ to 40$",
    url: "/Grande",
  },
  {
    id: 6,
    src: "/src/assets/second_preview_product.png",
    title: "Coach",
    name: "Leather Coach Bag",
    cost: 54.69,
    costOld: "$78.66",
    sale: "50% OFF",
    rate: "43 Ratings ",
    color: "Off-White",
    size: "XS",
    priceRange: "from 40$ to 55$",
    url: "/Coach",
  },
  {
    id: 7,
    src: "/src/assets/third_preview_product.png",
    title: "Remus",
    name: "Brown Strap Bag",
    cost: 57.54,
    costOld: "$78.66",
    sale: "50% OFF",
    rate: "43 Ratings ",
    color: "Muave Orange",
    size: "S",
    priceRange: "from 55$ and above",
    url: "/Remus",
  },
  {
    id: 8,
    src: "/src/assets/fourth_preview_product.png",
    title: "Boujee",
    name: "Black Bag",
    cost: 56.49,
    costOld: "$78.66",
    sale: "50% OFF",
    rate: "43 Ratings ",
    color: "Muave Orange",
    size: "M",
    priceRange: "from 55$ and above",
    url: "/Boujee",
  },
  {
    id: 9,
    src: "/src/assets/first_preview_product.png",
    title: "Grande",
    name: "Blossom Pouch",
    cost: 39.49,
    costOld: "$78.66",
    sale: "50% OFF",
    rate: "43 Ratings ",
    color: "Off-White",
    size: "L",
    priceRange: "from 0$ to 40$",
    url: "/Grande",
  },
  {
    id: 10,
    src: "/src/assets/second_preview_product.png",
    title: "Coach",
    name: "Leather Coach Bag",
    cost: 54.69,
    costOld: "$78.66",
    sale: "50% OFF",
    rate: "43 Ratings ",
    color: "Aquamarine",
    size: "XL",
    priceRange: "from 40$ to 55$",
    url: "/Coach",
  },
  {
    id: 11,
    src: "/src/assets/third_preview_product.png",
    title: "Remus",
    name: "Brown Strap Bag",
    cost: 57.54,
    costOld: "$78.66",
    sale: "50% OFF",
    rate: "43 Ratings ",
    color: "Teal",
    size: "XS",
    priceRange: "from 55$ and above",
    url: "/Remus",
  },
  {
    id: 12,
    src: "/src/assets/fourth_preview_product.png",
    title: "Boujee",
    name: "Black Bag",
    cost: 56.49,
    costOld: "$78.66",
    sale: "50% OFF",
    rate: "43 Ratings ",
    color: "Off-white",
    size: "S",
    priceRange: "from 55$ and above",
    url: "/Boujee",
  },
  {
    id: 13,
    src: "/src/assets/first_preview_product.png",
    title: "Grande",
    name: "Blossom Pouch",
    cost: 39.49,
    costOld: "$78.66",
    sale: "50% OFF",
    rate: "43 Ratings ",
    color: "Seinna Pink",
    size: "M",
    priceRange: "from 0$ to 40$",
    url: "/Grande",
  },
  {
    id: 14,
    src: "/src/assets/second_preview_product.png",
    title: "Coach",
    name: "Leather Coach Bag",
    cost: 54.69,
    costOld: "$78.66",
    sale: "50% OFF",
    rate: "43 Ratings ",
    color: "Crimson Red",
    size: "L",
    priceRange: "from 40$ to 55$",
    url: "/Coach",
  },
  {
    id: 15,
    src: "/src/assets/third_preview_product.png",
    title: "Remus",
    name: "Brown Strap Bag",
    cost: 57.54,
    costOld: "$78.66",
    sale: "50% OFF",
    rate: "43 Ratings ",
    color: "Blue",
    size: "XL",
    priceRange: "from 55$ and above",
    url: "/Remus",
  },
]);
export const TabRemusItems = [
  {
    id: 1,
    src: "/src/assets/third_preview_product.png",
    count: 1,
  },
  {
    id: 2,
    src: "/src/assets/third_preview_product.png",
    count: 2,
  },
  {
    id: 3,
    src: "/src/assets/third_preview_product.png",
    count: 3,
  },
  {
    id: 4,
    src: "/src/assets/third_preview_product.png",
    count: 4,
  },
];
export const TabGrandeItems = [
  {
    id: 1,
    src: "/src/assets/first_preview_product.png",
    count: 1,
  },
  {
    id: 2,
    src: "/src/assets/first_preview_product.png",
    count: 2,
  },
  {
    id: 3,
    src: "/src/assets/first_preview_product.png",
    count: 3,
  },
  {
    id: 4,
    src: "/src/assets/first_preview_product.png",
    count: 4,
  },
];
export const TabCoachItems = [
  {
    id: 1,
    src: "/src/assets/second_preview_product.png",
    count: 1,
  },
  {
    id: 2,
    src: "/src/assets/second_preview_product.png",
    count: 2,
  },
  {
    id: 3,
    src: "/src/assets/second_preview_product.png",
    count: 3,
  },
  {
    id: 4,
    src: "/src/assets/second_preview_product.png",
    count: 4,
  },
];
export const TabBoujeeItems = [
  {
    id: 1,
    src: "/src/assets/fourth_preview_product.png",
    count: 1,
  },
  {
    id: 2,
    src: "/src/assets/fourth_preview_product.png",
    count: 2,
  },
  {
    id: 3,
    src: "/src/assets/fourth_preview_product.png",
    count: 3,
  },
  {
    id: 4,
    src: "/src/assets/fourth_preview_product.png",
    count: 4,
  },
];
export const titleTabs = [
  {
    id: 1,
    title: "Product Description",
    currentTab: 1,
  },
  {
    id: 2,
    title: "Related Products",
    currentTab: 2,
  },
  {
    id: 3,
    title: "Ratings and Reviews",
    currentTab: 3,
  },
];
export const descriptionTabs = [
  {
    id: 1,
    firstDescription:
      "Lorem Lorem Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique.",
    secondDescription:
      "Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. ",
    thirdDescription:
      "Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.",
    count: 1,
  },
  {
    id: 2,
    firstDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique.",
    secondDescription:
      "Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. ",
    thirdDescription:
      "Eget Eget Eget est vel sagittis amet ssdaaddait eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.",
    count: 2,
  },
  {
    id: 3,
    firstDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique.",
    secondDescription:
      "Dolor Dolor Dolor augue mattis daaa duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. ",
    thirdDescription:
      "Eget est vel sagittis dasdas amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.",
    count: 3,
  },
];
export const collapseColorItems = [
  "Blue",
  "Maroon Red",
  "Crimson Red",
  "Seinna Pink",
  "Teal",
  "Aquamarine",
  "Muave Orange",
];
export const collapseBrandItems = ["Grande", "Coach", "Remus", "Boujee"];
export const collapseSizeItems = ["XS", "S", "M", "L", "XL"];
export const collapsePriceRangeItems = [
  "from 0$ to 40$",
  "from 40$ to 55$",
  "from 55$ and above",
];

export const sortedItems = computed(() =>
  orderBy(allItems.value, selectedSorting.value, sortingDirection.value)
    .filter(
      (e) =>
        (collapseBrand.value.length > 0
          ? collapseBrand.value.includes(e.title)
          : e) &&
        (collapseColor.value.length > 0
          ? collapseColor.value.includes(e.color)
          : e) &&
        (collapseSize.value.length > 0
          ? collapseSize.value.includes(e.size)
          : e) &&
        (collapsePriceRange.value.length > 0
          ? collapsePriceRange.value.includes(e.priceRange)
          : e)
    )
    .slice(
      countPerPage.value * (currentPage.value - 1),
      countPerPage.value * currentPage.value
    )
);

export const copyText = () => {
  navigator.clipboard.writeText("ORDER100");
};

export const itemsPagesCounts = computed(() =>
  Math.ceil(allItems.value.length / countPerPage.value)
);
