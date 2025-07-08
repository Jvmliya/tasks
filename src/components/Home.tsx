import "./Home.scss";

const Home = () => {
    return (
        <div className="container">
            {Array.from({ length: 16 }).map((_, index) => (
                <div className="col" key={index}>
                    <div className="image">
                        <img
                            src="https://tap.azstatic.com/uploads/medium/2025%2F04%2F29%2F00%2F53%2F47%2F127d9d8c-ade7-4cf6-825a-fa83b971746f%2F27314_nl5hK4zSmPDP2ykAjfmWfg.jpg"
                            alt="product"
                        />
                    </div>

                    <div className="text">
                        <h4>36 000 AZN</h4>
                        <p>20 sot torpaq sahəsi, Qusar rayonu</p>
                        <span>Bakı, bu gün 15:00</span>
                    </div>
                </div>
            ))}
        </div>


    )
}
export default Home
