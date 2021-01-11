export const dashboardURL = process.env.NEXT_PUBLIC_API_URL;

export const isLinkActive = ({ pathname, href }: { pathname: string; href: string }) => {
  return pathname === href || `/${pathname.split("[")[0].split("/")[1]}` === href;
};
