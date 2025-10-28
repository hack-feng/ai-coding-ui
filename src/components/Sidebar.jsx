import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      icon: '📝',
      label: '发布文章',
      path: '/publish/article'
    },
    {
      icon: '🎨',
      label: '发布动态',
      path: '/publish/status'
    },
    {
      icon: '📊',
      label: '发布问卷',
      path: '/publish/survey'
    },
    {
      icon: '💬',
      label: '发布讨论',
      path: '/publish/discussion'
    },
    {
      icon: '📁',
      label: '我的草稿',
      path: '/drafts'
    },
    {
      icon: '📚',
      label: '我的发布',
      path: '/my-publish'
    },
    {
      icon: '⚙️',
      label: '设置',
      path: '/settings'
    }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <span>📱</span> 社区平台
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`sidebar-menu-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <Link to={item.path}>
              <span className="menu-icon">{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;