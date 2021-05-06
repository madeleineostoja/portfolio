---
to: src/pages/<%= name %>.tsx
---
import { css } from '@emotion/react';
import { Meta } from '../components/Meta';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
<% if (staticProps) { -%>
import { GetStaticProps } from 'next';
<% } -%>
<% if (prismic) { -%>
import { get } from '../lib/prismic';
import { <%= h.changeCase.pascal(name) %> } from '../../@types/_generated/prismic';
<% } -%>

const styles = {};

/**
 * <%= h.changeCase.sentence(name) %> page
 */
export default function <%= h.changeCase.pascal(name) %>Page({
  <% if (staticProps) { -%>data<% } %>
}: { data: <%= h.changeCase.pascal(name) %> }) {
  return (
    <>
      <Meta <% if (prismic) { %>title={data.meta_title} description={data.meta_description} <% } %> />
      <Header />

      <Footer />
    </>
  );
}

<% if (staticProps) { -%>
/** Page data */
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      data: <%- prismic ? `await get('${name}', context)` : '{}' %><% if (prismic) { %>,
      preview: context.preview || null<% } %>
    }
  };
};
<% } -%>
