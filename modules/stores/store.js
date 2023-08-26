import { defineStore } from 'pinia'

// const darkModeCheck = localStorage.setItem('darkMode', 'dark')
export const useAppnavStore = defineStore({
    id: 'Nav',
    state: () => {
        return {
            navList: [{
                navTitle: "About",
                statusItem: false,
            },
            {
                navTitle: "Articles",
                statusItem: false,
            },
            {
                navTitle: "Projects",
                statusItem: false,
            },
            {
                navTitle: "Speaking",
                statusItem: false,
            },
            {
                navTitle: "Uses",
                statusItem: false,
            }],
            // darkMode: localStorage.setItem('darkMode', 'dark')
        }
    },
    actions: {
        handleActive(navTitle) {
            this.navList.forEach((navItem) => {
                if (navItem.navTitle ===navTitle ) {
                  navItem.statusItem = true;
                 
                } else {
                  navItem.statusItem = false;
                }
              });
        }
    }

})