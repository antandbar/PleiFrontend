import { Outlet } from 'react-router-dom';
import {layouts} from './index';

import './LayoutPage.css';

function LayoutPage() {
  return (
    <div className="layout">
      <layouts.Header className="layout-header bordered" />
      <main className="layout-main bordered">
        <Outlet />
      </main>
      <footer className="layout-footer bordered">© 2022 Plei</footer>
    </div>
  );
}

export default LayoutPage;
