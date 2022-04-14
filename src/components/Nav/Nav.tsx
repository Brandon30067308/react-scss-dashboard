import { Dispatch, FC } from "react";
import commentIcon from "../../images/comment.svg";
import bellIcon from "../../images/bell.svg";
import searchIcon from "../../images/search.svg";
import deImg from "../../images/DE-img.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChartPie, faCog } from "@fortawesome/free-solid-svg-icons";

import NavStyles from "./Nav.module.scss";
import Menu from "../common/Menu/Menu";
import userImg from "../../images/user-img-1.jpg";
import breakpoints from "../../breakpoints/breakpoints";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const menuChildren = [
  <div className="flex column-gap-0-45">
    <FontAwesomeIcon icon={faUser} />
    <span className="text-muted font-sm">Profile</span>
  </div>,
  <div className="flex column-gap-0-45">
    <FontAwesomeIcon icon={faChartPie} />
    <span className="text-muted font-sm">Analytics</span>
  </div>,
  "menu-divide",
  "Settings & Privacy",
  "Help",
  "Sign out",
];

const Nav: FC<{
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<boolean>;
}> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { width } = useWindowDimensions();

  return (
    <nav
      className={`${
        NavStyles.container
      } w-100 secondary bg-light shadow-sm flex justify-space-between 
          ${width >= breakpoints["xs"] ? "px-2" : "px-0-35"}`}
    >
      {/* left side */}
      <div className="flex column-gap-1">
        <button
          className={NavStyles.navToggler}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <span className={NavStyles.navBurger}></span>
          <span className={NavStyles.navBurger}></span>
          <span className={NavStyles.navBurger}></span>
        </button>
        {width >= breakpoints["lg"] && (
          <div className="flex">
            <input
              className={`${NavStyles.field} py-0-65 px-0-85 font-md shadow-sm round-sm`}
              placeholder="Search projects..."
            />
            <span
              className={`${NavStyles.searchContainer} flex pointer px-0-75`}
            >
              <img alt="" src={searchIcon} className={NavStyles.navIcon} />
            </span>
          </div>
        )}
        <div className="flex">
          <Menu
            /* dummy data */
            menuGroups={[
              {
                children: Array(9)
                  .fill(null)
                  .map((_, i) => `item ${i + 1}...`),
                header: "Header 1",
              },
              {
                children: Array(7)
                  .fill(null)
                  .map((_, i) => `item ${i + 10}...`),
                header: "Header 2",
              },
              {
                children: Array(9)
                  .fill(null)
                  .map((_, i) => `item ${i + 17}...`),
                header: "Header 3",
              },
            ]}
            style={{ width: "100px" }}
          />
        </div>
      </div>
      {/* right side */}
      <div
        className={`flex ${
          width >= breakpoints["xs"] ? "column-gap-1-75" : "column-gap-1-45"
        }`}
      >
        <div className={`${NavStyles.navIconContainer} flex relative pointer`}
        style={{width: '30px'}}
        >
          <img alt="" className={NavStyles.navIcon} src={commentIcon} />
          <span
            className={`${NavStyles.indicator} absolute flex round-full bg-primary 
              p-0-25 font-md text-light text-align-center`}
          >
            4
          </span>
        </div>
        <div className={`${NavStyles.navIconContainer} flex pointer`}>
          <img alt="" src={bellIcon} className={NavStyles.navIcon} />
        </div>
        <img
          alt=""
          src={deImg}
          className={`${NavStyles.flag} round-full pointer`}
        />
        {width >= breakpoints["lg"] ? (
          <div className="flex justify-flex-start column-gap-0-65">
            <div className="pointer">
              <img
                src={userImg}
                alt="profile"
                className={`${NavStyles.userImg} round-full`}
              />
            </div>
            <Menu
              menuGroups={[
                {
                  children: menuChildren,
                },
              ]}
              def="Shaun Philips"
            />
          </div>
        ) : (
          width >= breakpoints["xxs"] && (
            <Menu
              menuGroups={[
                {
                  children: menuChildren,
                },
              ]}
              showCaveat={false}
              def={
                <FontAwesomeIcon
                  icon={faCog}
                  className={`${NavStyles.navIcon} icon-muted`}
                />
              }
              style={{
                width: width >= breakpoints["lg"] ? "100px" : "22px",
              }}
              classes={NavStyles.navIcon}
            />
          )
        )}
      </div>
    </nav>
  );
};

export default Nav;
