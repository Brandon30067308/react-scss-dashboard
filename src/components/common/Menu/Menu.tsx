import { useState, FC, useRef, useEffect } from "react";
import MenuStyles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import breakpoints from "../../../breakpoints/breakpoints";

type MenuProps = {
  menuGroups: {
    header?: string;
    children: (JSX.Element | string)[];
  }[];
  alt?: boolean;
  showCaveat?: boolean;
  classes?: string;
  def?: string | JSX.Element;
  style?: {};
};

const Menu: FC<MenuProps> = ({
  menuGroups,
  alt = false,
  showCaveat = true,
  classes,
  def,
  style,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<[number, number]>([0, 0]);
  const { width } = useWindowDimensions();
  const selectedRef = useRef<HTMLLIElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (gi: number, i: number) => {
    setSelected([gi, i]);
  };

  useEffect(() => {
    if (containerRef.current && selectedRef.current) {
      const offset =
        containerRef.current.scrollTop + containerRef.current.clientHeight;

      (selectedRef.current.offsetTop > offset ||
        selectedRef.current.offsetTop < offset) &&
        /* scroll to offset position */
        containerRef.current.scrollTo({
          top: selectedRef.current.offsetTop - 51,
          behavior: "smooth",
        });
    }
  }, [selected]);

  return (
    <div
      className={`${MenuStyles.menu} flex relative ${classes}`}
      style={style}
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      onKeyDown={(e) => {
        e.preventDefault();
        switch (e.code) {
          case "Space": {
            setIsOpen(!isOpen);
            break;
          }
          case "ArrowDown": {
            const isDivide =
              menuGroups[selected[0]].children.length - 1 >= selected[1] + 1 &&
              menuGroups[selected[0]].children[selected[1] + 1] ===
                "menu-divide";

            const hasReachedEnd =
              menuGroups[selected[0]].children.length - 1 === selected[1]
                ? true
                : !isDivide
                ? false
                : menuGroups[selected[0]].children.length - 1 ===
                  selected[1] + 1;
            const cellIndex =
              menuGroups[selected[0]].children[selected[1] + 1] ===
              "menu-divide"
                ? selected[1] + 2
                : selected[1] + 1;

            setSelected((prev) => {
              const indices: [number, number] = hasReachedEnd
                ? menuGroups.length - 1 >= prev[0] + 1
                  ? [
                      prev[0] + 1,
                      menuGroups[prev[0] + 1].children[0] === "menu-divide"
                        ? 1
                        : 0,
                    ]
                  : prev
                : [prev[0], cellIndex];
              return indices;
            });
            break;
          }
          case "ArrowUp": {
            const isDivide =
              0 <= selected[1] - 1 &&
              menuGroups[selected[0]].children[selected[1] - 1] ===
                "menu-divide";

            let hasReachedStart =
              selected[1] === 0
                ? true
                : !isDivide
                ? false
                : selected[1] + 1 === 0;
            const cellIndex =
              menuGroups[selected[0]].children[selected[1] - 1] ===
              "menu-divide"
                ? selected[1] - 2
                : selected[1] - 1;
            const prevGroupLastIndex =
              menuGroups[selected[0] - 1] &&
              menuGroups[selected[0] - 1].children.length - 1;

            setSelected((prev) => {
              const indices: [number, number] = hasReachedStart
                ? 0 <= prev[0] - 1
                  ? [
                      prev[0] - 1,
                      menuGroups[prev[0] - 1].children[prevGroupLastIndex] ===
                      "menu-divide"
                        ? prevGroupLastIndex - 1
                        : prevGroupLastIndex,
                    ]
                  : prev
                : [prev[0], cellIndex];
              return indices;
            });
            break;
          }
          case "Enter":
            !isOpen && setIsOpen(true);
            break;
          case "Escape":
            isOpen && setIsOpen(false);
            break;
        }
      }}
    >
      {alt ? (
        <FontAwesomeIcon icon={faEllipsisH} className="icon-muted pointer" />
      ) : (
        <span
          className="text-muted flex pointer"
          style={{
            width: "auto",
            minWidth: width >= breakpoints["xs"] ? "83px" : "fit-content",
          }}
        >
          <span className={`font-md ${showCaveat && "mr-0-35"}`}>
            {def || menuGroups[selected[0]].children[selected[1]]}
          </span>
          {showCaveat && (
            <FontAwesomeIcon
              className={`${MenuStyles.icon}`}
              icon={faChevronDown}
              style={{
                transform: `${isOpen ? "rotate(180deg)" : "rotate(0deg)"}`,
              }}
            />
          )}
        </span>
      )}
      {isOpen && (
        <div
          className={`${MenuStyles.itemsContainer} absolute flex bg-light align-flex-start 
              px-0-15 py-0-35 shadow-md`}
          style={{
            right: alt ? "0" : `${menuGroups.length * -15}px`,
          }}
          ref={containerRef}
        >
          {menuGroups &&
            menuGroups.map((group, gi) => (
              <ul
                key={`menu-group-${gi}`}
                className={`${MenuStyles.itemsGroup} flex flex-column row-gap-0-15`}
              >
                {group.header && (
                  <span
                    className={`${MenuStyles.groupHeader}
                        flex justify-flex-start font-sm text-muted weight-500 py-0-75 px-0-65 w-100`}
                  >
                    {group.header}
                  </span>
                )}
                {group.children.map((c, i) => {
                  const isSelected = selected[0] === gi && selected[1] === i;

                  return c === "menu-divide" ? (
                    <hr key={`menu-item-${i}`} className="my-0-35" />
                  ) : (
                    <li
                      key={`menu-item-${i}`}
                      className={`${MenuStyles.item} ${
                        isSelected && MenuStyles.selectedItem
                      } ${alt && "w-100 text-align-left"} 
                            w-100 py-0-75 px-0-85 flex justify-flex-start text-md 
                            text-muted pointer font-md`}
                      ref={isSelected ? selectedRef : null}
                      onClick={() => handleClick(gi, i)}
                    >
                      {c}
                    </li>
                  );
                })}
              </ul>
            ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
