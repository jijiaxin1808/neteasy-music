import React from "react";
import { Menu, Dropdown } from "antd";
import "./index.less";

export default function Icon3(props) {

  const menuSource = [
    {
      key: "1",
      item: "热门单曲",
      disabled: false,
    },
    {
      key: "2",
      item: "作词作品",
      disabled: true,
    },
    {
      key: "3",
      item: "作曲作品",
      disabled: true,
    },
  ]
  const menu = (
    <Menu
      defaultSelectedKeys={["1"]}
    >
      {
        menuSource.map(item => (
          <Menu.Item key={item.key} disabled={item.disabled}>
            {<span className={item.item === "热门单曲" ? "menu-item menu-active" : "menu-item"}>{item.item}</span>}
          </Menu.Item>
        ))
      }
    </Menu>
  );

	return (
    <Dropdown overlay={menu}>
      <a className="u-btni-1">
        <i className="slt-btn">
          热门单曲
          <em className="arrow"></em>
        </i>
		  </a>
    </Dropdown>
	
	);
}