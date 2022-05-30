import { FC } from 'react'
// @ts-ignore
import { GetStaticProps, GetStaticPaths } from 'next'

// @ts-ignore
import Head from 'next/head'

// @ts-ignore
import PostInfo from '/components/PostInfo'

import { postType } from '../../types'

type postTypeProps = {
  post: postType
}

export const getStaticPaths:GetStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  
  const paths = data.map(({ id }) => {
    return {
      params: { id: id.toString() }
    }
  })
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps:GetStaticProps = async (context) => {
  const { id } = context.params
  
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  
  if (!data) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: { post: data },
  }
};

const Post: FC<postTypeProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Post page</title>
      </Head>
      <PostInfo post={post}/>
    </>
  )
}

export default Post