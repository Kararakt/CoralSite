import { handbagsView } from "./ProductHelper";

export const wishlistItemsArray = ref<handbagsView[]>([]);

export const wishlistHasItem = computed(
  () => wishlistItemsArray.value.length > 0
);

export const addItemToWishlist = (item: handbagsView) => {
  wishlistItemsArray.value.push(item);
};

export const hasActiveHeart = (item: handbagsView) => {
  const wishlistItem = wishlistItemsArray.value.find((el) => el === item);
  return wishlistItem != null ? true : false;
};

export const removeItemFromWishlist = (item: handbagsView) => {
  const element = wishlistItemsArray.value.find((el) => el === item);
  if (element) {
    const index = wishlistItemsArray.value.indexOf(element);
    wishlistItemsArray.value.splice(index, 1);
  }
};
