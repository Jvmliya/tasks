import "./Home.scss";
import { CiTwitter } from "react-icons/ci";


const Home = () => {
    return (
        <div className="container">

            <div className="main">

                <div className="leftContainer">
                    <div className="leftImage">
                        <img src="https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="girl" />
                    </div>
                </div>

                <div className="rightContainer">

                    <div className="forUser">
                        <h3>Sarah Anderson</h3>
                        <button> Product Designer</button>
                    </div>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque architecto soluta rerum assumenda. Necessitatibus, a consectetur architecto dicta repellat fuga libero deserunt accusamus numquam error, nesciunt eligendi quisquam quae earum.</p>

                    <div className='contact'>

                        <div>
                            <p>icon</p>
                            <p>contact</p>
                        </div>

                        <div>
                            <p>icon</p>
                            <p>follow</p>
                        </div>

                    </div>

                    <div className="btmright">
                        <div className="icons">
                            <CiTwitter />
                            <CiTwitter />
                            <CiTwitter />
                        </div>

                        <div className="location">
                            <CiTwitter /> shsdajlfwkfjhajs
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Home
