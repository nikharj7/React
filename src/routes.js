import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import SumLayout from 'src/layouts/SumLayout';
import ActLayout from 'src/layouts/ActLayout';
import CrLayout from 'src/layouts/CrLayout';
import RELayout from 'src/layouts/RELayout';
import MmLayout from 'src/layouts/MmLayout';
import CMLayout from 'src/layouts/CMLayout';
import ARLayout from 'src/layouts/ARLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import ConfListView from 'src/views/conf/ConfListView';
import RefListView from 'src/views/ref/RefListView';
import PaymentListView from 'src/views/payment/PaymentListView';
import DashboardView from 'src/views/reports/DashboardView';
import DashView from 'src/views/rep/DashView';
import ActView from 'src/views/Act/ActView';
import REView from 'src/views/re/REView';
import CRView from 'src/views/CR/CRView';
import CR1View from 'src/views/CR/CR1View';
import MMView from 'src/views/MM/MMView';
import MM1View from 'src/views/MM/MM1View';
import CMView from 'src/views/CM/CMView';
import CM1View from 'src/views/CM/CM1View';
import CM2View from 'src/views/CM/CM2View';
import CM3View from 'src/views/CM/CM3View';
import CM4View from 'src/views/CM/CM4View';
import ARView from 'src/views/AR/ARView';
import AR1View from 'src/views/AR/AR1View';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'payment', element: <PaymentListView /> },
      { path: 'account', element: <AccountView /> },
      { path: 'conf', element: <ConfListView /> },
      { path: 'ref', element: <RefListView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/summary',
    element: <SumLayout />,
    children: [
      { path: 'Dash', element: <DashView /> },
    ]
  },
  {
    path: '/activity',
    element: <ActLayout />,
    children: [
      { path: 'Act', element: <ActView /> },
    ]
  },
  {
    path: '/CR',
    element: <CrLayout />,
    children: [
      { path: 'ts', element: <CRView /> },
      { path: 'to', element: <CR1View /> },
    ]
  },
  {
    path: '/RE',
    element: <RELayout />,
    children: [
      { path: 're', element: <REView /> },
    ]
  },
  {
    path: '/MM',
    element: <MmLayout />,
    children: [
      { path: 'music', element: <MMView /> },
      { path: 'video', element: <MM1View /> },
    ]
  },
  {
    path: '/CM',
    element: <CMLayout />,
    children: [
      { path: 'lb', element: <CMView /> },
      { path: 'ub', element: <CM1View /> },
      { path: 'al', element: <CM2View /> },
      { path: 'dc', element: <CM3View /> },
      { path: 'rb', element: <CM4View /> },
    ]
  },
  {
    path: '/AR',
    element: <ARLayout />,
    children: [
      { path: 'ar', element: <ARView /> },
      { path: 'ac', element: <AR1View /> },
    ]
  },
];

export default routes;
