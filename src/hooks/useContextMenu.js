import { useEffect, useRef } from "react";
const remote = window.require("@electron/remote");
const Menu = window.require("@electron/remote").Menu;
const MenuItem = window.require("@electron/remote").MenuItem;

const useContextMenu = (items, targetSelector, devList) => {
    const clickElement = useRef(null);

    useEffect(() => {
        const menu = new Menu();
        items.forEach(item => {
            menu.append(new MenuItem(item));
        });
        const handleContextMenu = (e) => {
            if (document.querySelector(targetSelector).contains(e.target)) {
                menu.popup({ window: remote.getCurrentWindow() });
                clickElement.current = e.target;
            }
        };
        window.addEventListener("contextmenu", handleContextMenu);

        return () => { window.removeEventListener("contextmenu", handleContextMenu) }
    }, devList);
    return clickElement;
}

export default useContextMenu;