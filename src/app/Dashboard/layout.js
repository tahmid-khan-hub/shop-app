import DashboardLayoutClient from "./LayoutClient";

export const metadata = {
  title: "ShopApp | Dashboard",
  description: "This is Dashboard",
  
};

export default function DashboardLayout({ children }) {
  return <DashboardLayoutClient>{ children }</DashboardLayoutClient>;
}
