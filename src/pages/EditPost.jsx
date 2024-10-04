import React, { useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from '../appwrite/config';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {

  const [post, setPosts] = useState(null);
  const {slug} = useParams();
  const navigate = useNavigate();

  return (
    <div>
      
    </div>
  )
}

export default EditPost;
