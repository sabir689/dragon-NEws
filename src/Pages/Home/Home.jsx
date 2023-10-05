import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../Layout/Shared/Header/Header";
import LeftSIDeNav from "../../Layout/Shared/LeftSideNav/LeftSIDeNav";
import RightSideNav from "../../Layout/Shared/Right-side-nav/RightSideNav";
import Navbar from "../../Layout/Shared/navbar/Navbar";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData(); // Call the useLoaderData function to get the news data
    console.log(news);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="">
                    <LeftSIDeNav></LeftSIDeNav>
                </div>

                {/* news container */}
                <div className="col-span-2">
                   {news.map(aNews => (
                        <NewsCard key={aNews._id} news={aNews}></NewsCard>
                    ))}
                </div>
                <div className=" rounded-xl text-center">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
