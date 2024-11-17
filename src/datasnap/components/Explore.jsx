import React from "react";
import image1 from "../assets/rsc/radu-florin-4_QFycgpC4c-unsplash.jpg";
import image2 from "../assets/rsc/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg";
import image3 from "../assets/rsc/joshua-earle-ICE__bo2Vws-unsplash.jpg";
import image4 from "../assets/rsc/arnold-francisca-nPhl2x4fk2s-unsplash.jpg";
import { FaPlus } from "react-icons/fa";


const tagSections = [
  {
    title: "Trending Tags",
    subtitle: "Tags with most number of articles",
    items: [
      { tag: "Javascript", articles: "178 articles this week" },
      { tag: "Python", articles: "120 articles this week" },
      { tag: "Java", articles: "150 articles this week" },
      { tag: "Ruby", articles: "80 articles this week" },
      { tag: "PHP", articles: "95 articles this week" },
      { tag: "Swift", articles: "60 articles this week" },
      { tag: "Kotlin", articles: "110 articles this week" },
      { tag: "TypeScript", articles: "130 articles this week" },
      { tag: "Go", articles: "75 articles this week" },
      { tag: "Dart", articles: "50 articles this week" },
      { tag: "Scala", articles: "40 articles this week" },
      { tag: "C#", articles: "85 articles this week" },
    ],
  },
];

const blogSections = [
  {
    title: "Trending and Popular Blogs",
    subtitle: "Blogs that are loved by the developer community",
    blogs: [
      {
        profileImg: image1,
        author: "Coding Pastor",
        url: "codingpastor.hashnode.dev",
        posts: [
          {
            date: "8 Jul, 2022",
            title: "Jokes only programmers will understand",
          },
          { date: "4 Jul, 2022", title: "Ultimate guide to solidity" },
          { date: "2 Jul, 2022", title: "What the hell is SSH?" },
        ],
      },
      {
        profileImg: image2,
        author: "Tech Guru",
        url: "techguru.hashnode.dev",
        posts: [
          { date: "12 Aug, 2022", title: "Understanding React Hooks" },
          { date: "9 Aug, 2022", title: "JavaScript ES6 Features" },
          { date: "5 Aug, 2022", title: "CSS Grid vs Flexbox" },
        ],
      },
      {
        profileImg: image3,
        author: "Dev Insights",
        url: "devinsights.hashnode.dev",
        posts: [
          { date: "1 Aug, 2022", title: "How to use Webpack" },
          { date: "27 Jul, 2022", title: "Serverless Architecture Overview" },
          { date: "20 Jul, 2022", title: "TypeScript vs JavaScript" },
        ],
      },
      {
        profileImg: image4,
        author: "Code Master",
        url: "codemaster.hashnode.dev",
        posts: [
          { date: "15 Jul, 2022", title: "Building REST APIs with Node.js" },
          { date: "10 Jul, 2022", title: "GraphQL Basics" },
          { date: "6 Jul, 2022", title: "Performance Optimization in React" },
        ],
      },
      {
        profileImg: image2,
        author: "Frontend Expert",
        url: "frontendexpert.hashnode.dev",
        posts: [
          {
            date: "11 Aug, 2022",
            title: "Best Practices for Responsive Design",
          },
          { date: "8 Aug, 2022", title: "Creating Dynamic UIs with Vue.js" },
          { date: "4 Aug, 2022", title: "Introduction to Next.js" },
        ],
      },
      {
        profileImg: image1,
        author: "Backend Engineer",
        url: "backendengineer.hashnode.dev",
        posts: [
          { date: "9 Aug, 2022", title: "Introduction to Docker" },
          { date: "6 Aug, 2022", title: "Understanding Microservices" },
          { date: "3 Aug, 2022", title: "API Security Best Practices" },
        ],
      },
      {
        profileImg: image1,
        author: "Alt Engineer",
        url: "backendengineer.hashnode.dev",
        posts: [
          { date: "9 Aug, 2022", title: "Introduction to Docker" },
          { date: "6 Aug, 2022", title: "Understanding Microservices" },
          { date: "3 Aug, 2022", title: "API Security Best Practices" },
        ],
      },
    ],
  },
];

const BlogPage = () => {

  return (
    <div className="px-2 md:p-8 ">
      <h1 className="text-2xl md:text-3xl md:text-center font-bold mb-4">
        Explore Tech Blogs & Tags
      </h1>
      <div className="mt-2">
        {tagSections.map((section, index) => (
          <div key={index} className="mb-8  ">
            <div className="text-xl font-semibold mb-4">
              <h3 className="text-blue-600">{section.title}</h3>
              <p className="">{section.subtitle}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`flex justify-between items-center p-2 border rounded-lg border-gray-600 bg-gray-50 text-gray-800 dark:text-gray-100 dark:bg-black`}
                >
                  <div>
                    <h4 className="text-lg font-medium">{item.tag}</h4>
                    <p className="">{item.articles}</p>
                  </div>
                  <button className="px-2 rounded-full text-3xl">
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {blogSections.map((section, index) => (
          <div key={index} className="mb-8">
            <div className="my-4">
              <p className="text-xl text-blue-600 font-semibold mb-2">
                {section.title}
              </p>
              <p className="">{section.subtitle}</p>
            </div>
            <div className="space-y-8">
              {section.blogs.map((blog, blogIndex) => (
                <div
                  key={blogIndex}
                  className={`bg-gray-50 text-gray-800 dark:text-gray-100 dark:bg-black border border-gray-200 p-4 rounded-lg shadow-md`}
                >
                  <div className="flex flex-col lg:flex-row items-center justify-between mb-4">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <img
                        src={blog.profileImg}
                        alt="Profile"
                        className="w-16 h-16 object-cover rounded-full border-2 border-blue-600 shadow-md mr-4"
                      />
                      <div>
                        <h4 className="text-xl font-semibold ">
                          {blog.author}
                        </h4>
                        <p className="">{blog.url}</p>
                      </div>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                      <span>Follow</span>
                      <FaPlus className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    {blog.posts.map((post, postIndex) => (
                      <div key={postIndex} className="pt-2 mt-2">
                        <p className="">
                          <span className="font-medium">{post.date}</span> -{" "}
                          {post.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {blogSections.map((section, index) => (
          <div key={index} className="mb-8">
            <div className="my-4">
              <p className="text-xl text-blue-600 font-semibold mb-2">
                {section.title}
              </p>
              <p className="">{section.subtitle}</p>
            </div>
            <div className="space-y-8">
              {section.blogs.map((blog, blogIndex) => (
                <div
                  key={blogIndex}
                  className={`$bg-gray-50 text-gray-800 dark:text-gray-100 dark:bg-black border border-gray-300 p-4 rounded-lg shadow-md`}
                >
                  <div className="flex flex-col lg:flex-row items-center justify-between mb-4">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <img
                        src={blog.profileImg}
                        alt="Profile"
                        className="w-16 h-16 object-cover rounded-full border-2 border-blue-600 shadow-md mr-4"
                      />
                      <div>
                        <h4 className="text-xl font-semibold">
                          {blog.author}
                        </h4>
                        <p >{blog.url}</p>
                      </div>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                      <span>Following</span>
                    </button>
                  </div>
                  <div>
                    {blog.posts.map((post, postIndex) => (
                      <div key={postIndex} className="pt-2 mt-2">
                        <p className="">
                          <span className="font-medium">{post.date}</span> -{" "}
                          {post.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
