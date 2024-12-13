import { Link } from "react-router";

function Clothes({itemsForSale}) {
    return (
        <div className="products">
            {itemsForSale.map((element => {
                const {id, name, price, image} = element;
                return (
                    <div className="product-card" key={id}>
                        <Link to={`/about/${element.title}`}>
                           <img src={image} width="400px" height="500px" alt=""/>
                        </Link>
                        <div className="product-info">
                            <h3>{name}</h3>
                            <h4>$ {price}</h4>
                        </div>
                    </div>
                )
            }))}

        </div>
    )
}

export default Clothes;