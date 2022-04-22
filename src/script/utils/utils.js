import { popupInputName, popupInputAbout, userInfo } from "./constants.js";
import { popupEditProfile } from "../../pages/index.js";

export function addValuesInInputs() {
  const obj = userInfo.getUserInfo();
  popupInputName.value = obj.name;
  popupInputAbout.value = obj.info;
  popupEditProfile.open();
}


