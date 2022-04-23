import { popupInputName, popupInputAbout, userInfo, submitAddCard, obj } from "./constants.js";
import { popupEditProfile, popupCreateCard, validatorFormAddCard } from "../../pages/index.js";

export function addValuesInInputs() {
  const objValues = userInfo.getUserInfo();
  popupInputName.value = objValues.name;
  popupInputAbout.value = objValues.info;
  popupEditProfile.open();
}

export function openCreateCardPopup() {
  popupCreateCard.open();
  validatorFormAddCard.disableSubmitButton(submitAddCard, obj.inactiveButtonClass);
}

