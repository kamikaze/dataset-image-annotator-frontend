import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from 'react-router-dom';

import {ScoreboardPage} from './pages/ScoreboardPage';
import {TeamListPage} from './pages/TeamListPage';
import {TeamViewPage} from './pages/TeamViewPage';
import {TeamEditPage} from './pages/TeamEditPage';
import {TeamCreatePage} from './pages/TeamCreatePage';
import {UserListPage} from './pages/UserListPage';
import {UserViewPage} from './pages/UserViewPage';
import {UserEditPage} from './pages/UserEditPage';
import {UserCreatePage} from './pages/UserCreatePage';
import {LoginPage} from './pages/LoginPage';
import {PageLayout} from "./components/PageLayout";
import {RequireAuth} from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";
import {PlayPage} from "./pages/PlayPage";
import {ConfigProvider} from "antd";
import {ImageListPage} from "./pages/ImageListPage";
import {ImageViewPage} from "./pages/ImageViewPage";
import {RegistrationPage} from "./pages/RegistrationPage";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path={'/'} element={<PageLayout />}>
    <Route index element={<ScoreboardPage />} />
    <Route path={'play'} element={<RequireAuth><PlayPage /></RequireAuth>} />
    <Route path={'admin'}>
      <Route path={'images'} element={<RequireAuth><ImageListPage /></RequireAuth>} />
      <Route path={'images/:id'} element={<RequireAuth><ImageViewPage /></RequireAuth>} />
      <Route path={'teams'} element={<RequireAuth><TeamListPage /></RequireAuth>} />
      <Route path={'teams/:id'} element={<RequireAuth><TeamViewPage /></RequireAuth>} />
      <Route path={'teams/:id/edit'} element={<RequireAuth><TeamEditPage /></RequireAuth>} />
      <Route path={'teams/new'} element={<RequireAuth><TeamCreatePage /></RequireAuth>} />
      <Route path={'users'} element={<RequireAuth><UserListPage /></RequireAuth>} />
      <Route path={'users/:id'} element={<RequireAuth><UserViewPage /></RequireAuth>} />
      <Route path={'users/:id/edit'} element={<RequireAuth><UserEditPage /></RequireAuth>} />
      <Route path={'users/new'} element={<RequireAuth><UserCreatePage /></RequireAuth>} />
    </Route>
    <Route path={'login'} element={<LoginPage />} />
    <Route path={'register'} element={<RegistrationPage />} />
    <Route path={'*'} element={<Navigate to={'/'} replace />} />
  </Route>
))

function App() {
  return (
    <AuthProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#80F',
            colorPrimaryBg: '#80F',
            colorFill: '#fff'
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </AuthProvider>
  );
}

export default App;
