import {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPropsContext
} from 'next';
import { css } from '@emotion/react';
import { Meta } from '../components/Meta';
import { get } from '../lib/prismic';

/**
 * Home page
 */
export default function HomePage({
  data
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const styles = {};

  return (
    <>
      <Meta />
      <h1>Hello, world</h1>
    </>
  );
}

/** Page data */
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  return {
    props: {
      // data: await get('home', context),
      // data: {},
      preview: context.preview || null
    }
  };
};
