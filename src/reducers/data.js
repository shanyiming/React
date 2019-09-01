const BASE_URL = '/';

const navItems = [
    {
      label: 'Home',
      url: BASE_URL,
      icon: 'Home'

    },
    {
      label: 'Colors',
      url: BASE_URL + 'colors',
      icon: 'Palette'

    },
    {
      label: 'Components',
      url: BASE_URL + 'components',
      icon: 'Widgets',
      subNavItems: [
        {
          label: 'Avatar',
          url: BASE_URL + 'components/avatar',
          icon: 'NavigateNext'

        },
        {
          label: 'Chips',
          url: BASE_URL + 'components/chips',
          icon: 'NavigateNext'
        },
      ]
    },
    {
      label: 'Charts',
      url: BASE_URL + 'charts',
      icon: 'Timeline',
      subNavItems: [
        {
          label: 'Pie',
          url: BASE_URL + 'charts/pie',
          icon: 'NavigateNext'

        },
        {
          label: 'Vertical Bar',
          url: BASE_URL + 'charts/verticalbar',
          icon: 'NavigateNext'
        },
      ]
    },
    {
      label: 'Icons',
      url: BASE_URL + 'icons',
      icon: 'BlurOn'

    }
];

const rightMenu = [
  {
    label: 'Sample',
    link: 'https://chaozhang.github.io/Material-UI-React/'
  }
];


export default {navItems,rightMenu}
