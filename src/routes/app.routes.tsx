import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';


const AppRoutes: React.FC = () => {
    return (
        <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/list/:type" element={<List match={{
            params: {
              type: ''
            }
          }} />} />
        </Routes>
      </Layout>
    );
};

export default AppRoutes;