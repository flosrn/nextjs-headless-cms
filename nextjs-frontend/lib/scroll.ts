export const stopVerticalScroll = (isOpen: boolean) => {
  setTimeout(() => {
    if (isOpen) {
      document.querySelector("body").classList.remove("overflow-y-auto");
      document.querySelector("body").classList.add("overflow-y-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-y-hidden");
      document.querySelector("body").classList.add("overflow-y-auto");
    }
  }, 500);
};
