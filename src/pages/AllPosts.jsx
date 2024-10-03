import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from '../appwrite/config'

const AllPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {}, []);

    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents);
        }
    })

  return (
    <div>
      
    </div>
  )
}

export default AllPosts;
