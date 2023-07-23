import { defineDocumentType, makeSource } from 'contentlayer/source-files'
// Remark packages
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkToc from 'remark-toc'
import remarkBreaks from 'remark-breaks'
// Rehype packages
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeKatex from 'rehype-katex'
import rehypePresetMinify from 'rehype-preset-minify'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.md*`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    category: {
      type: 'string',
      description: 'The category of the post',
      required: true,
    },
    tags: {
      type: 'list',
      description: 'The tags of the post',
      of: { type: 'string' },
    },
    subtitle: {
      type: 'string',
      description: 'The subtitle of the post',
    },
    lastmod: {
      type: 'date',
      description: 'The last date of the post',
    },
    draft: {
      type: 'boolean',
      description: 'If true the post is ignored',
      required: true,
    },
    metadescription: {
      type: 'string',
      description: 'The meta description of the post',
    },
    image: {
      type: 'string',
      description: 'The path to the image file.',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
    },
    archiveSlug: {
      type: 'string',
      resolve: (doc) => doc.date.substring(0, 7).replace('-', '_'),
    },
    path: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}))

export const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: `about/**/*.md*`,
  contentType: 'mdx',
  fields: {
    heroTitle: {
      type: 'string',
      description: 'The title of the Hero section in the About page',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the Hero section in the About page',
    },
    buttonEnable: {
      type: 'boolean',
      description: 'If false the button in the Hero section is not displayed',
      required: true,
    },
    buttonText: {
      type: 'string',
      description: 'The text of the button in the Hero section',
    },
    buttonHref: {
      type: 'string',
      description: 'The href of the button in the Hero section',
    },
    image: {
      type: 'string',
      description: 'The path to the image file.',
    },
    bgColorLight: {
      type: 'string',
      description:
        'The hexadecimal value for the background color of the Hero section when it is in light mode.',
    },
    bgColorDark: {
      type: 'string',
      description:
        'The hexadecimal value for the background color of the Hero section when it is in dark mode.',
    },
  },
  computedFields: {},
}))

export const Board = defineDocumentType(() => ({
  name: 'Board',
  filePathPattern: `board/**/*.md*`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the board',
      required: true,
    },
    draft: {
      type: 'boolean',
      description: 'If true this board is ignored',
      required: true,
    },
    bgColorLight: {
      type: 'string',
      description:
        'The hexadecimal value for the background color of the Hero section when it is in light mode.',
    },
    bgColorDark: {
      type: 'string',
      description:
        'The hexadecimal value for the background color of the Hero section when it is in dark mode.',
    },
  },
  computedFields: {},
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Post, About, Board],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkBreaks,
      remarkGfm,
      remarkMath,
      [remarkToc, { heading: 'Table of contents', tight: true, prefix: 'toc-' }],
    ],
    rehypePlugins: [
      rehypeAccessibleEmojis,
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeKatex,
      rehypeCodeTitles,
      [rehypePrismPlus, { ignoreMissing: true, showLineNumbers: false }],
      rehypePresetMinify,
    ],
  },
})
