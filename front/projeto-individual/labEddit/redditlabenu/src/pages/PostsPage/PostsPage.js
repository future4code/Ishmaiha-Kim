import React from "react";
import { CardPost } from "../../components/CardPost/CardPost";
import { useProtectedPage } from "../../hooks/UseProtectedPage";

export const Posts = () => {
  useProtectedPage()
  return (
    <div>
      <CardPost />
    </div>
  );
}