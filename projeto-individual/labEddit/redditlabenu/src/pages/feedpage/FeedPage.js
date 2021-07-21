import React from "react";
import { CardPost } from "../../components/CardPost/CardPost";
import styled from "styled-components";



export const FeedPage = () => {
  return (
    <div>
      <div>
        <input placeholder="What are you thinking?"/>
        <button>Post</button>
      </div>

      <CardPost />
    </div>
  );
}