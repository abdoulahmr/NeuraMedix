import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Dashboard,
  Science,
  Analytics,
  Assignment,
  Settings,
  Help,
  Notifications,
  AccountCircle,
  ChevronLeft,
  ChevronRight,
  Home,
  Biotech,
  Description,
  Timeline,
  ExpandMore,
  ChevronRight as ChevronRightSmall
} from '@mui/icons-material';
import './../assets/aside.css';

const Aside = ({ isCollapsed, onToggle, activeItem = 'dashboard' }) => {
  const navigate = useNavigate();
  const [currentActiveItem, setCurrentActiveItem] = useState(activeItem);

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <Dashboard />,
      path: '/user-dashboard'
    },
    {
      id: 'home',
      label: 'Home',
      icon: <Home />,
      path: '/'
    },
    {
      id: 'ai-agents',
      label: 'AI Agents',
      icon: <Science />,
      path: '#',
      submenu: [
        { id: 'lungiq4', label: 'LungIQ4', path: '/services/lungiq' },
        { id: 'cardio-ai', label: 'CardioAI', path: '/services/heart-prediction' },
        { id: 'pathoquant', label: 'PathoQuant', path: '/services/ihc-insight' },
        { id: 'cellscope', label: 'CellScope AI', path: '/services/cell-count' }
      ]
    },
    {
      id: 'research-tools',
      label: 'Research Tools',
      icon: <Biotech />,
      path: '#',
      submenu: [
        { label: 'ManuscriptMate', path: '/tools/manuscript' },
        { label: 'PaperSage', path: '/tools/papersage' },
        { label: 'BindPredict', path: '/tools/bindpredict' },
        { label: 'DockSim', path: '/tools/docksim' }
      ]
    },
    {
      id: 'notes',
      label: 'My Notes',
      icon: <Assignment />,
      path: '/my-notes'
    }
  ];

  const bottomItems = [
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings />,
      path: '/settings'
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: <Help />,
      path: '/help'
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <AccountCircle />,
      path: '/profile'
    }
  ];

  const handleItemClick = (item) => {
    if (item.submenu) {
      // Toggle submenu visibility for items with submenus
      if (currentActiveItem === item.id) {
        setCurrentActiveItem(null); // Close submenu if already open
      } else {
        setCurrentActiveItem(item.id); // Open submenu
      }
    } else {
      // Navigate for items without submenus
      setCurrentActiveItem(item.id);
      navigate(item.path);
    }
  };

  const handleSubItemClick = (subItem) => {
    navigate(subItem.path);
  };

  const renderMenuItem = (item) => (
    <li key={item.id} className={`aside-item ${currentActiveItem === item.id ? 'active' : ''}`}>
      <button 
        className="aside-link"
        onClick={() => handleItemClick(item)}
        title={isCollapsed ? item.label : ''}
      >
        <span className="aside-icon">{item.icon}</span>
        {!isCollapsed && (
          <>
            <span className="aside-label">{item.label}</span>
            {item.badge && <span className="aside-badge">{item.badge}</span>}
            {item.submenu && (
              <span className={`aside-arrow ${currentActiveItem === item.id ? 'open' : ''}`}>
                <ExpandMore />
              </span>
            )}
          </>
        )}
      </button>
      {item.submenu && !isCollapsed && currentActiveItem === item.id && (
        <ul className="aside-submenu">
          {item.submenu.map((subItem, index) => (
            <li key={index} className="aside-subitem">
              <button 
                className="aside-sublink"
                onClick={() => handleSubItemClick(subItem)}
              >
                {subItem.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <aside className={`aside-container ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      {/* Toggle Button */}
      <button 
        className="aside-toggle"
        onClick={onToggle}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
      </button>

      {/* Logo/Brand Section */}
      <div className="aside-header">
        {!isCollapsed ? (
          <div className="aside-brand">
            <img src="/img/1.png" alt="NeuraMedix" className="aside-logo" />
          </div>
        ) : (
          <div className="aside-brand-collapsed">
            <img src="/img/4.png" alt="NeuraMedix" className="aside-logo-small" />
          </div>
        )}
      </div>

      {/* Main Navigation */}
      <nav className="aside-nav">
        <ul className="aside-menu">
          {menuItems.map(renderMenuItem)}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="aside-bottom">
        <ul className="aside-menu">
          {bottomItems.map(renderMenuItem)}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
