import Header from "./components/header/Header";
import PostItem from "./components/post/Post";

function Home() {
    return ( 
        <div>
            <Header/>
            <PostItem organ={"Cục lãnh sự"} field={"Hàng không"} />
            <PostItem organ={"Cục lãnh sự"} field={"Xuất nhập khẩu"} />
        </div> 
    );
}

export default Home;