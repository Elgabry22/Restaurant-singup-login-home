import Nav from "@/Components/Nav";
import Reviews from "@/Components/Reviews";
import Welcome from "@/Components/welcome";
import About from "@/Components/about";
import Menu from "@/Components/menu";

export default function Container(){
    return(
        <div>
            <Nav />
            <Welcome />
            <Reviews />
            <About />
            <Menu />
            
            
        </div>
    )
}