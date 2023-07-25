# Campanula

A simple blog template built with Next.js that allows you to generate static blog pages from Markdown files.

- [Next.js by Vercel](https://nextjs.org/) ver13
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Designed using themes and components from [daisyUI](https://daisyui.com/)
- All pages & blog articles are made with Mardown file
- Switchable dark mode
- Support [MDX](https://mdxjs.com/) file

## Demo

Check out the live demo: [https://campanula-demo.vercel.app/](https://campanula-demo.vercel.app/)

## Usage

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/en) (version 16.8 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sakurabird/Campanula.git
   cd Campanula
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Update the site metadata in the `data/siteMetadata.js` file.
2. Please place the favicon, icon, and apple-icon images directly under the `app` folder. For detailed instructions, please refer to the official website: [Metadata Files: favicon, icon, and apple-icon | Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons)
3. Please create the static pages [following the instructions below](#creating-static-pages).
4. Please create the blog posts [following the instrucsions below](#creating-blog-posts).
5. Please edit `data/headerNavLinks.ts` to set the navigation items for the header.

## Creating static pages

TODO

## Creating Blog Posts

1. Create new blog posts by adding Markdown files to the `data/blog` directory. Please use the extension mdx. ex: `title-of-your-post.mdx`. The filenames of MDX files will be used as part of the URL. To avoid compatibility and encoding issues in the URL, it is recommended to use characters from the ASCII character set.

2. Add necessary frontmatter to each Markdown file, including `title`, `date`, and any other relevant information.

### Frontmatter

Each blog post must have a front matter.

Currently 9 fields are supported.

```
title: (required)
date: (required)
category: (required)
tags: (optional)
subtitle: (optional)
lastmod: (optional)
draft: (required)
metadescription: (optional)
image: (optional, if none provided defaults to ogImage in siteMetadata config)
```

Here's an example of a post's frontmatter:

```
---
title: "Cats: The Adorable Feline Friends"
date: "2022-02-22"
category: "Animal"
tags: ["cat"]
subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit rhoncus risus, nec rutrum sapien sodales sit amet."
lastmod: "2023-04-23"
draft: false
metadescription: "Cats are cute, cuddly, and make great companions."
image: "/images/blog/cat.jpg"
---
```

### Deployment

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To deploy your blog to the production server, run the following command:

```bash
npm run build
```
TODO

## Customization

Feel free to customize the template to suit your needs. You can modify the layout, styles, and even add new features.


## Referenced information

Thank you for the reference to quality information.
Mr. timlrx's code was fantastic, and I have adopted many aspects of it in this project. Thank you so much for your contributions.

- [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)
- [NextJS 13 Tutorial: Create a Static Blog from Markdown Files - YouTube](https://www.youtube.com/watch?v=Hiabp1GY8fA)
- [The Net Ninja - YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw)

## Resources

I used the materials from the following websites. Thank you very much!

- [icooon-mono cat icon](https://icooon-mono.com/13670-%e3%82%af%e3%83%ad%e3%83%8d%e3%82%b3%e3%82%a2%e3%82%a4%e3%82%b3%e3%83%b32/)
- [Iconify Design: All popular icon sets, one framework.](https://iconify.design/)
- <a href="https://unsplash.com/ja/s/%E5%86%99%E7%9C%9F/cat-and-dog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>の<a href="https://unsplash.com/@sera_fima?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Serafima Lazarenko</a>が撮影した写真

## Notes

- If you change the `theme` variable in siteMetadata.js, the screen will automatically switch to the light mode when you refresh the page after building. If you want to display the dark mode, please press the theme toggle button in the header.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
