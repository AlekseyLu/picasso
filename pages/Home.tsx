import { Routes, Route } from "react-router-dom";
import { Layout } from "../entities/Layout/Layout";
import { Posts } from "../entities/Posts/Posts";
import { CurrentPost } from "../entities/CurrentPost/CurrentPost";
import { NotFound } from "./NotFound";

import "../app/styles/index.css";

export const Home = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<CurrentPost />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
);
