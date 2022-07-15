import React, { lazy, Suspense, useContext, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { AppContainer } from '../../components/layout/AppContainer';
import { Sidebar } from '../../components/layout/Sidebar';
import ToolBar from '../../components/layout/ToolBar';
import { SidebarContext } from '../../context/sidebarcontext';
import routes, { Fallback } from '../../routes';

const NotFound = lazy(() => import('../NotFound'));

const Dashboard = () => {
  const { isSidebarOpen } = useContext(SidebarContext) || {};
  const location = useLocation();

  useEffect(() => {
    console.log(location, routes);
  }, [isSidebarOpen, location]);

  return (
    <div className={`flex h-screen ${isSidebarOpen && 'overflow-hidden'}`}>
      <Sidebar />

      <div className="flex flex-col flex-1 w-full overflow-y-auto relative h-full py-20">
        <ToolBar />

        <AppContainer>
          <Suspense fallback={<Fallback />}>
            <Routes>
              {routes.map(
                (
                  route: { component: React.ComponentType; path: string },
                  i: React.Key | null | undefined
                ) => {
                  return route.component ? (
                    <Route
                      key={i}
                      path={`${route.path}`}
                      element={<route.component />}
                    />
                  ) : null;
                }
              )}
              <Route path="" element={<Navigate to="/app/dashboard" />} />
              <Route path={'*'} element={<NotFound />} />
            </Routes>
          </Suspense>
        </AppContainer>
      </div>
    </div>
  );
};

export default Dashboard;
