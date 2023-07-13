import { NavbarItem } from "../navbarGroup/navbarGroup"
let Items: Array<NavbarItem>;
export default Items =
  [
    {
      link: "",
      caption: "Dashboard",
      type: "default"
    },
    {
      link: "",
      caption: "Interface",
      type: "heading",
      items: [
        {
          caption: "Components",
          fa: "cog",
          type: "default",
          innreCaption: "CUSTOM COMPONENTS:",
          items: [
            {
              caption: "Buttons",
            },
            {
              caption: "Cards",
            }
          ]
        },
        {
          caption: "Utilities",
          fa: "wrench",
          type: "default",
          innreCaption: "CUSTOM UTILITIES:",
          items: [
            {
              caption: "Colors",
            },
            {
              caption: "Borders",
            },
            {
              caption: "Animations",
            },
            {
              caption: "Other",
            }
          ]
        }
      ]
    }
  ]
