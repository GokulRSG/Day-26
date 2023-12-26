import logo from './logo.svg';
import './App.css';
import { Card } from './Card';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Nav } from './Nav';

export const Catagory_List = [{
  catagory : "full stack",
  title : "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
  image :"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
  contend : "When you’re hiring a full-stack developer, what are the most important things you look for?",
  date : "15 November 2023"
},{
  catagory : "full stack",
  title : "Top Differences: Full Stack Developer vs Software Engineer 2024",
  image :"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
  contend : "A Full Stack Developer is a tech all-rounder. They work on both the front and",
  date : "15 November 2023 "
},{
  catagory : "full stack",
  title : "Horizontal vs Vertical Scaling for Efficient System Design",
  image :"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
  contend : "In the world of system design, envision a digital skyscraper – a multifaceted structure built",
  date : "10 November 2023"
},{
  catagory : "data science",
  title : "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
  image :"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
  contend : "Are you someone who’s not interested in coding, but wants to get placed in tech",
  date : "28 November 2023"
},{
  catagory : "data science",
  title : "Impact of Certification Programs on Hiring Data Scientists",
  image :"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-1536x768.webp",
  contend : "Data scientists are the creators behind transforming the raw data into edible data insights. These",
  date : "15 November 2023"
},{
  catagory : "data science",
  title : "Top Product-Based Companies for Data Science Freshers",
  image :"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
  contend : "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
  date : "10 November 2023"
},{
  catagory : "cyber security",
  title : "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
  image :"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
  contend : "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
  date : "4 December 2023"
},{
  catagory : "cyber security",
  title : "What Is Hacking? Types of Hacking & More",
  image :"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
  contend : "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
  date : "25 September 2023"
},{
  catagory : "cyber security",
  title : "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
  image :"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
  contend : "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
  date : "27 December 2022 "
},{
  catagory : "career",
  title : "UI/UX Designer Job Description and Roles & Responsibilities",
  image :"https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg",
  contend : "UI UX is the abbreviated word that’s been rocking the trend over the years, especially",
  date : "13 December 2023"
},{
  catagory : "career",
  title : "Top 5 IT Jobs for Economics Students",
  image :"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
  contend : "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
  date : "4 December 2023"
},{
  catagory : "career",
  title : "Top IT Jobs for Commerce Students: A Lucrative Career Path",
  image :"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
  contend : "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
  date : "2 December 2023"
}];

function App() {
  //console.log(Catagory_List)
  const [courceList, setCourcelist] = useState(Catagory_List);

  return (
    <div className="App">
      <Nav/>
      {/* <div className='top-section'>
        <nav>
          <ul></ul>
        </nav>
      </div> */}
      <div className='main-box-section'>
    <div className='main-section'>
    <Routes>      
        <Route path="/" element={<Card courselist={courceList} Catagory = {"all"}/>} />
        <Route path="/fullstack" element={<Card courselist={courceList} Catagory = {"full stack"}/>} />
        <Route path="/datascience" element={<Card courselist={courceList} Catagory = {"data science"}/>} />
        <Route path="/cypersec" element={<Card courselist={courceList} Catagory = {"cyper sec"}/>} />
        <Route path="/career" element={<Card courselist={courceList} Catagory = {"career"}/>} />
        {/* <Route path="/products/:productid" element={<ProductDetails />} />
        <Route path="/products/add" element={<AddProduct productList={productList} setProductList={setProductList} />} /> */}
      </Routes>
    </div>
  </div>
      

    </div>
  );
}



export default App;
