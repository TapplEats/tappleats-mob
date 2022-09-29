export const defaultSettings = {
  selectedColor: { name: null, code: null },
  theme: 'light',
  layout: 'social',
}

export const drawerItems = [
  {
    key: 'Profile',
    title: 'Profile',
    routes: [
      { nav: 'Profile', routeName: 'Info', title: 'Info' },
      { nav: 'Profile', routeName: 'Bio', title: 'Bio' },
      { nav: 'Profile', routeName: 'Picture', title: 'Picture' },
    ],
  },
  {
    key: 'Menu',
    title: 'My Menu',
    routes: [
      { nav: 'Menu', routeName: 'MenuHome', title: 'Menu Home' },
      // {nav: 'MainDrawer', routeName: 'Settings2', title: 'Settings 2'},
    ],
  },
]