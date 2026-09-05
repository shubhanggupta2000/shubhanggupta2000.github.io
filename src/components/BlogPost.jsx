import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mediaQueries } from "./Themes";
import { Link, useParams } from "react-router-dom";
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import { Blogs } from "../data/BlogData";
import { motion } from "framer-motion";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import AnchorComponent from "../subComponents/Anchor";

const PostContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  ${mediaQueries(30)`
        width: 90%;
        padding: 1rem;
    `}
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.5;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
    const currentPost = Blogs.find((blog) => blog.id === parseInt(slug));
    setPost(currentPost);
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <PostContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LogoComponent />
      <PowerButton />
      <SocialIcons />
      <AnchorComponent number={numbers} />
      <Title>{post.name}</Title>
      <Content>
        {post.content}
      </Content>
      <BackLink to="/blog">← Back to Blogs</BackLink>
    </PostContainer>
  );
};

export default BlogPost;
