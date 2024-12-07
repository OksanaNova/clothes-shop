function Buttons({filteredClothes}) {
    return (
        <div className="cont">
            <button className="change" onClick={() => filteredClothes("dress")} >Dresses</button>
            <button className="change">Pants</button>
            <button className="change">Skirts</button>
            <button className="change">Shoes</button>
            <button className="change">Shirts</button>
        </div>
    )
}

export default Buttons;