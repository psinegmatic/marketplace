export interface NavigationItem {
  id: number,
  visible: boolean,
  name: string;
  url?: string;
  type?: string;
  childList: NavigationItem[]
}
