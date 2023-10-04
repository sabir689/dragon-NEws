import Header from "../../Layout/Shared/Header/Header";
import LeftSIDeNav from "../../Layout/Shared/LeftSideNav/LeftSIDeNav";
import RightSideNav from "../../Layout/Shared/Right-side-nav/RightSideNav";
import Navbar from "../../Layout/Shared/navbar/Navbar";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
        
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
                <div className="border">
                    <LeftSIDeNav></LeftSIDeNav>
                </div>
                <div className="col-span-2 border">
                    <h2 className="text-4xl">news coming soon</h2>
                </div>
                <div className="border rounded-xl text-center">
                    <RightSideNav></RightSideNav>
                     </div>
            </div>
        </div>
    );
};

export default Home;