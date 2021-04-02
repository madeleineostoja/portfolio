---
to: src/pages/<%= name %>.tsx
---
<% if (staticProps) { -%>
import { InferGetStaticPropsType, GetStaticProps, GetStaticPropsContext } from 'next';
<% } -%>
import { css } from '@emotion/react';
import { Meta } from '../components/Meta';
<% if (prismic) { -%>
import { get } from '../lib/prismic';
<% } -%>

const styles = {};

/**
 * <%= h.changeCase.sentence(name) %> page
 */
export default function <%= h.changeCase.pascal(name) %>Page({
  <% if (staticProps) { -%>data<% } %>
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Meta <% if (prismic) { %>title={data.meta_title} description={data.meta_description} <% } %> />
    </>
  );
}

<% if (staticProps) { -%>
/** Page data */
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  return {
    props: {
      data: <%- prismic ? `await get('${name}', context)` : '{}' %><% if (prismic) { %>,
      preview: context.preview || null<% } %>
    }
  };
};
<% } -%>
