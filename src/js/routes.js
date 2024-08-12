import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  AboutUs,
  Dashboard,
  Navbar,
  ContactUs,
  NotFound,
  CreateDonor,
} from './pages';

const routes = (
  <Routes>
    <Route element={<Navbar />}>
      <Route index element={<Dashboard />} />
      <Route path="service/:name" element={<CreateDonor />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactUs />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);
export default routes;
