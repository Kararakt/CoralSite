import { counterItems } from "./UtilityHelper";
import { handbagsView } from "./ProductHelper";
import { formInformation } from "./CheckOutHelper";

export interface Order {
  id: string;
  date: string;
  status: string;
  discount: number;
  deliveryFee: number;
  subTotal: number;
  totalPrice: number;
  orderItems: counterItems<handbagsView>[];
  informationABoutUser: formInformation;
}

export const orderArray = ref<Order[]>([]);

export const orderArrayHasItem = computed(() => orderArray.value.length > 0);

export const addItemToOrder = (
  id: string,
  date: string,
  status: string,
  discount: number,
  deliveryFee: number,
  subTotal: number,
  totalPrice: number,
  orderItems: counterItems<handbagsView>[],
  informationABoutUser: formInformation
) => {
  orderArray.value.push({
    id: id,
    date: date,
    status: status,
    discount: discount,
    deliveryFee: deliveryFee,
    subTotal: subTotal,
    totalPrice: totalPrice,
    orderItems: orderItems,
    informationABoutUser: informationABoutUser,
  });
};

export const getRandomId = () => {
  const ada = Math.floor(1 + Math.random() * 900000000);
  const stringId = String(ada);
  return stringId;
};

export const Search = ref<string>("");

export const searchOrderItem = computed(() =>
  orderArray.value.filter((item) => {
    return item.id.toLowerCase().includes(Search.value.toLowerCase());
  })
);

export const searchOrderHasItem = computed(
  () => searchOrderItem.value.length > 0
);
