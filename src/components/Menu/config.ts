import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://echoswap.app/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://echoswap.app/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://echoswap.app/nests'
  },



 
  {
    label: 'Voting (Coming Soon)',
    href: '/comingsoon',
    icon: 'NftIcon',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'http://echoswap.app/lottery'
  // },\


  {
    label: 'IFO',
    icon: 'GroupsIcon',
    href: 'https://docs.google.com/forms/d/1HJCHwZ4XGDCktfNAYALEzHMkq2yTPs5X-cDUuOeTtcs/',
},
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x6aaa14929d74b8533343c1a5b6e42443f59b6f6f',
      },
      {
        label: 'ECHO token Address',
        href: 'https://bscscan.com/address/0x6aaa14929D74b8533343C1A5b6e42443f59b6F6F',
      },
      {
        label: 'LOCKED Liquidity',
        href: 'https://cryptexlock.me/pair/0xC75D369eE2Baf51151462E39162BB530abb3487d',
      },
      {
        label: 'USD CHART',
        href: 'https://www.livecoinwatch.com/price/EchelonDAO-ECHO',
      },
      {
        label: 'Echelon Podcast',
        href: 'https://anchor.fm/Echo-engage',
      },
    ]
  },
  
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Blog',
        href: 'https://echelondao.medium.com/echelon-dao-d7ab030ac02d',
      },
    ],
  },
 
  
]

export default config
