import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import useProductTour from "./components/useProductTour";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul id="navbar" className='m-4' >
          <li>
            <Link id="home-nav-btn" to="/">Home</Link>
          </li>
          <li>
            <Link id="about-nav-btn" to="/about">About</Link>
          </li>
          <li>
            <Link id="dashboard-nav-btn" to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {
  useProductTour('home')
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  useProductTour('about')
  return (
    <div>
      <h2>About</h2>
      <p id='about-p-1' >this is your about page</p>
      <p id='about-p-2'>if you <b>reach the last step</b> of any tour that means <b>you have done the tour,</b> now if you have came from the home page <b>after finishing the tour</b>, you could <b>go back to the home page</b> again and you will see that <b>you will not see the tour again</b></p>
      <p id='about-p-3'>but if you go to the <b>dashboard page</b> you <b>will</b> see the dashboard tour <b>because you didn't toke the tour there yet</b></p>
      <p>after finishing the tour there you should not see it again</p>
    </div>
  );
}

function Dashboard() {
  useProductTour('dashboard')
  return (
    <div>
      <h2 id='dashboard'>Dashboard</h2>
      <h2 id='iamhigh'>highlight me</h2>
    </div>
  );
}

