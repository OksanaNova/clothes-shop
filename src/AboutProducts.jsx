import { useParams, useNavigate } from "react-router";
import { data } from "./data";

function AboutProduct() {

    const navigate = useNavigate();
    const { title } = useParams();

    return(
        <div>
            {data.filter((item) => item.title === title).map((element, index) => {
                return (
                    <div key={index}>
                        <h3>{element.name}</h3>
                        <img src={element.image} alt="product" width="400px" />
                        <button className="btn" onClick={() => navigate(-1)}>Back</button>
                    </div>
                )
            })}
        </div>
    )
}

export default AboutProduct;