import { defineConfig } from 'vitepress'

const teamSideBar = [{ text: 'Meet the team', link: '/about/team' }];
const project0SideBar  = [{ text: 'Project 0', link: '/events/project-0' }];

export default defineConfig({
  title: "Tokyo Archives",
  description: "A Website for Tokyo Archives, powered by Vitepress",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Events', link: '/events/' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar:{
        '/about': teamSideBar,
        '/events': project0SideBar
    },

    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/tokyo__archives' }
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2023-present <a href="https://tokyoarchives.co">Tokyo Archives</a>'
    }
  }
})
