# Wattanit.info Source Code

This is the source code of www.wattanit.info , a personal landing website of Dr Wattanit Hotrakool.

The site is a [Gatsby](https://www.gatsbyjs.org/) website based on "Exhibition" theme also designed specifically for Wattanit.info.

## Quick start

1.  **Install the Gatsby CLI**

    ```sh
    # install the Gatsby CLI globally
    npm install -g gatsby-cli
    ```
2.  **Start the development server**

    ```sh
    cd wattanit-info/
    gatsby develop
    ```

3.  **Build the static version**

    ```sh
    gatsby build
    ```

## Directory structure

- **src** : The main source code of the website, most parts are written in [React](https://reactjs.org/) framework.
  - **components** : Reusable page components, including the layout, buttons, navigations, and CSS files. No need to be modified by most users.
  - **images** : Static images used in the website are stored here.
  - **pages** : The pages files of the website. There are two types of pages:
    1. Normal page: normal pages are written as a React page component and have full flexibilities and freedom. They can use every layout and styling component.
    2. Article page: article pages are written as a Markdown-formatted text. Gatsby will compile and build each page directly during build.
  - **templates** : template files for article pages autogeneration.
- _gatsby-node.js_ : Gatsby APIs to create article pages
- _gatsby-config.js_ : Configuration file for site metadata, Navbar, etc.
- _package.json_ : node.js package.json file
