import { useParams, useNavigate } from "react-router";
import { data } from "./data";

function AboutProduct() {

    const navigate = useNavigate();
    const { productName } = useParams();
    console.log(productName);
    // const allParams = useParams();
    // console.log('allParams', allParams);
    // const title = allParams.title;

    return(
        <div>
            {data.filter((item) => item.title === productName).map((element, index) => {
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