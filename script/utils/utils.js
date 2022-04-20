import UserInfo from "../components/UserInfo.js";
import { popupInputName, popupInputAbout } from "./constants.js";

export function addValuesInInputs() {
  const userInfo = new UserInfo({ name: '.profile__name', info: '.profile__text' });
  const obj = userInfo.getUserInfo();
  popupInputName.value = obj.name;
  popupInputAbout.value = obj.info;
}
