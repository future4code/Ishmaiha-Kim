import React from "react";
import { CardPost } from "../../components/CardPost/CardPost";
import { useProtectedPage } from "../../hooks/UseProtectedPage";
import { useRequestData } from "../../hooks/UseRequestData";
import { baseURL } from "../../constants/Url";
import { useHistory } from "react-router";


export const FeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const posts = useRequestData([], `${baseURL}/posts`)

  const onClickCard = (id) => {
    history.push('/Posts/:id/comments')
  }
 

  const postCard = posts.map((posts) => {
    return (
      <CardPost
        key={posts.id}
        title={posts.title}
        body={posts.body}
        onClick={() => onClickCard(posts.id)}
      />)
  })

  const publishPost = () => {  
    history.push ("/FeedPage")
  }

  return (
    <div>
      <div>
        <input placeholder="What are you thinking?"/>
        <button onClick ={publishPost}>Post</button>
      </div>
      
      {postCard}
    </div>
  );
}