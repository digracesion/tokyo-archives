---
layout: page

prev:
  text: 'About Us'
  link: '/about/'
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '../img/team/austin.png',
    name: 'Austin',
    title: 'Staff',
    links: [
      { icon: 'instagram', link: 'https://instagram.com/auz_martino' },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="m26.24 16.373l-9.14-9.14c-2.661-2.661-7.035-2.603-9.768.131c-2.734 2.734-2.793 7.107-.131 9.768l7.935 7.936m17.767-2.065l7.935 7.935c2.661 2.662 2.603 7.035-.13 9.769c-2.735 2.734-7.108 2.792-9.77.13l-9.14-9.14"></path><path d="M26.11 26.142c2.733-2.734 2.792-7.108.13-9.769m-4.441 5.425c-2.734 2.734-2.792 7.108-.131 9.769"></path></g></svg>'
      },
      link: 'https://linktr.ee/auzmartino',
      ariaLabel: 'linktree link'
      },
    ]
  },
  {
    avatar: '../img/team/aziz.png',
    name: 'Aziz',
    title: 'Staff',
    links: [
      { icon: 'instagram', link: 'https://instagram.com/aziz.nkhv' },
      { icon: 'instagram', link: 'https://instagram.com/aziz.crt' }
    ]
  },
  {
    avatar: '../img/team/grace.png',
    name: 'Grace',
    title: 'Staff',
    links: [
      { icon: 'instagram', link: 'https://instagram.com/gray__in__film' },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="m26.24 16.373l-9.14-9.14c-2.661-2.661-7.035-2.603-9.768.131c-2.734 2.734-2.793 7.107-.131 9.768l7.935 7.936m17.767-2.065l7.935 7.935c2.661 2.662 2.603 7.035-.13 9.769c-2.735 2.734-7.108 2.792-9.77.13l-9.14-9.14"></path><path d="M26.11 26.142c2.733-2.734 2.792-7.108.13-9.769m-4.441 5.425c-2.734 2.734-2.792 7.108-.131 9.769"></path></g></svg>'
      },
      link: 'https://linktr.ee/grayinfilm',
      ariaLabel: 'linktree link'
      }
    ]
  },
  {
    avatar: '../img/team/jaida.png',
    name: 'Jaida',
    title: 'Staff',
    links: [
      { icon: 'instagram', link: 'https://instagram.com/jaidakins' },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="m26.24 16.373l-9.14-9.14c-2.661-2.661-7.035-2.603-9.768.131c-2.734 2.734-2.793 7.107-.131 9.768l7.935 7.936m17.767-2.065l7.935 7.935c2.661 2.662 2.603 7.035-.13 9.769c-2.735 2.734-7.108 2.792-9.77.13l-9.14-9.14"></path><path d="M26.11 26.142c2.733-2.734 2.792-7.108.13-9.769m-4.441 5.425c-2.734 2.734-2.792 7.108-.131 9.769"></path></g></svg>'
      }, link: 'https://www.jaidakins.com',
        ariaLabel: 'website link'
      }
    ]
  },
  {
    avatar: '../img/team/lilian.png',
    name: 'Lilian/Yurina',
    title: 'Staff',
    links: [
      { icon: 'instagram', link: 'https://instagram.com/yurimiio' },
      { icon: 'instagram', link: 'https://instagram.com/35mmino' }
    ]
  },
  {
    avatar: '../img/team/linoa.png',
    name: 'Linoa',
    title: 'Staff',
    links: [
      { icon: 'instagram', link: 'https://instagram.com/linoa.rchive' },
      { icon: 'instagram', link: 'https://instagram.com/linoa.films400' }
    ]
  },
  {
    avatar: '../img/team/lou.png',
    name: 'Lou',
    title: 'Staff',
    links: [
      { icon: 'instagram', link: 'https://instagram.com/lous.nkn' },
      { icon: 'instagram', link: 'https://instagram.com/lous.laboratory' }
    ]
  },
  {
    avatar: '../img/team/sherry.png',
    name: 'Sherry',
    title: 'Staff',
    links: [
      { icon: 'instagram', link: 'https://instagram.com/mii.soh' },
      { icon: 'instagram', link: 'https://instagram.com/l0caltangerine' }
    ]
  }
]

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Meet the Team
    </template>
    <template #lead>
      The creation of Tokyo Archives is pioneered by eight creatives from different backgrounds
      who found a common ground in creating.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
