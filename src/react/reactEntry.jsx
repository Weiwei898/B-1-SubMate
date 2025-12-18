// assets/react/reactEntry.jsx

// 1. 核心邏輯和渲染器
import React from 'react';
import { createRoot } from 'react-dom/client';

// 2. 引入您的元件
import ProductListComponent from './product_list.jsx'; 

// 3. 執行渲染函數
const container = document.getElementById('react-app-root'); 


if (container) {
    const root = createRoot(container);
    root.render(<ProductListComponent />);
}
