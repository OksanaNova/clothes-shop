function Buttons({filterClothes, allClothes}) {
    return (
        <div className="cont">
            <button onClick={() => allClothes()}>All products</button>
            <button className="change" onClick={() => filterClothes("dress")} >Dresses</button>
            <button className="change" onClick={() => filterClothes("pants")} >Pants</button>
            <button className="change" onClick={() => filterClothes("skirt")} >Skirts</button>
            <button className="change" onClick={() => filterClothes("shoes")} >Shoes</button>
            <button className="change" onClick={() => filterClothes("shirt")} >Shirts</button>
        </div>
    )
}

export default Buttons;