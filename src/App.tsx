import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  const HomePage = lazy(() => import("./pages/HomePage"));
  const RequestADemo = lazy(() => import("./pages/RequestADemo"));
  const CorporateStrategy = lazy(
    () => import("./pages/services/CorporateStrategy")
  );
  const InternationalMarketEntry = lazy(
    () => import("./pages/services/InternationalMarketEntry")
  );
  const PerformanceManagement = lazy(
    () => import("./pages/services/PerformanceManagement")
  );
  const ProcessImprovementAndAutomation = lazy(
    () => import("./pages/services/ProcessImprovementAndAutomation")
  );
  const OurTeam = lazy(() => import("./pages/about/OurTeam"));
  const ValuesMissionVison = lazy(
    () => import("./pages/about/ValuesMissionVison")
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader />}>
          <DashboardLayout>
            <HomePage />
          </DashboardLayout>
        </Suspense>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/request-demo",
      element: (
        <Suspense fallback={<Loader />}>
          <DashboardLayout>
            <RequestADemo />
          </DashboardLayout>
        </Suspense>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/services/corporate-strategy",
      element: (
        <Suspense fallback={<Loader />}>
          <DashboardLayout>
            <CorporateStrategy />
          </DashboardLayout>
        </Suspense>
      ),
    },
    {
      path: "/services/international-market-entry",
      element: (
        <Suspense fallback={<Loader />}>
          <DashboardLayout>
            <InternationalMarketEntry />
          </DashboardLayout>
        </Suspense>
      ),
    },
    {
      path: "/services/performance-mangement",
      element: (
        <Suspense fallback={<Loader />}>
          <DashboardLayout>
            <PerformanceManagement />
          </DashboardLayout>
        </Suspense>
      ),
    },
    {
      path: "/services/process-improvement-and-automation",
      element: (
        <Suspense fallback={<Loader />}>
          <DashboardLayout>
            <ProcessImprovementAndAutomation />
          </DashboardLayout>
        </Suspense>
      ),
    },
    {
      path: "/about-team",
      element: (
        <Suspense fallback={<Loader />}>
          <DashboardLayout>
            <OurTeam />
          </DashboardLayout>
        </Suspense>
      ),
    },
    {
      path: "/solutions/values-mission-vision",
      element: (
        <Suspense fallback={<Loader />}>
          <DashboardLayout>
            <ValuesMissionVison />
          </DashboardLayout>
        </Suspense>
      ),
    },
    {
      path: "/*",
      element: <ErrorPage />,
    },
  ]);

  return<>
   <RouterProvider router={router} fallbackElement={<Loader />} />
  </>;
}

export default App;
