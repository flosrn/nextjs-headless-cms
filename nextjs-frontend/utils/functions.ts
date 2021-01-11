export const getProfilePic = (email: string) => {
  const substr = email.split("@")[0].split(/[.*+-/_]/);
  const name = substr[1] ? `${substr[0]}+${substr[1]}` : substr[0];
  return `https://eu.ui-avatars.com/api/?name=${name}&bold=true&rounded=true&background=60A5FA`;
};

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
