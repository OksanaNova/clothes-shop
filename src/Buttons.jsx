function Buttons({filterClothes}) {
    return (
        <div className="cont">
            <button className="change" onClick={() => filterClothes("dress")} >Dresses</button>
            <button className="change" onClick={() => filterClothes("pants")} >Pants</button>
            <button className="change" onClick={() => filterClothes("skirt")} >Skirts</button>
            <button className="change" onClick={() => filterClothes("shoes")} >Shoes</button>
            <button className="change" onClick={() => filterClothes("shirt")} >Shirts</button>
        </div>
    )
}

export default Buttons;