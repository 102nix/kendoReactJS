import * as React from "react"
import { useLocation, useHistory } from "react-router-dom"
import { Drawer, DrawerContent } from "@progress/kendo-react-layout"
import { Button } from "@progress/kendo-react-buttons"
import '../App.scss' 
const items = [
  {
    text: "Inbox",
    icon: "k-i-inbox",
    selected: true,
    route: "/",
  },
  {
    separator: true,
  },
  {
    text: "Notifications",
    icon: "k-i-bell",
    route: "/notifications",
  },
  {
    text: "Calendar",
    icon: "k-i-calendar",
    route: "/calendar",
  },
  {
    separator: true,
  },
  {
    text: "Attachments",
    icon: "k-i-hyperlink-email",
    route: "/attachments",
  },
  {
    text: "Favourites",
    icon: "k-i-star-outline",
    route: "/favourites",
  },
]

export const DrawerRouterContainer = ({ children }) => {
  const [expanded, setExpanded] = React.useState(true)
  const location = useLocation()
  const history = useHistory()

  const handleClick = () => {
    setExpanded(!expanded)
  }

  const onSelect = (e) => {
    history.push(e.itemTarget.props.route)
    setExpanded(!expanded)
  }

  const setSelectedItem = (pathName) => {
    let currentPath = items.find((item) => item.route === pathName)

    if (currentPath.text) {
      return currentPath.text
    }
  }

  let selected = setSelectedItem(location.pathname)
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <Button icon="menu" fillMode="flat" onClick={handleClick} />
        <span className="mail-box">Mail Box</span>
      </div>
      <Drawer
        expanded={expanded}
        position={"start"}
        mode={"push"}
        mini={true}
        items={items.map((item) => ({
          ...item,
          selected: item.text === selected,
        }))}
        onSelect={onSelect}
      >
        <DrawerContent>{children}</DrawerContent>
      </Drawer>
    </div>
  )
}

