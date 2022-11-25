import { handbagsView } from "./ProductHelper";
import { counterItems } from "./UtilityHelper";
import { sumBy } from "lodash";

export const basketItemsArray = ref<counterItems<handbagsView>[]>([]);

export const addItemToBasket = (item: handbagsView, count: number) => {
  basketItemsArray.value.push({ item, count: count });
};

export const removeItemFromBasket = (item: counterItems<handbagsView>) => {
  const index = basketItemsArray.value.indexOf(item);
  if (index > -1) {
    basketItemsArray.value.splice(index, 1);
  }
};

export const basketHasItems = computed(() => basketItemsArray.value.length > 0);

export const subTotal = computed(
  () =>
    +sumBy(
      basketItemsArray.value,
      (item) => item.count * item.item.cost
    ).toFixed(2)
);

export let discountValue = ref(0);
export const deliveryFee = ref(0);

export const totalPrice = computed(
  () => +(subTotal.value + deliveryFee.value - discountValue.value).toFixed(2)
);
