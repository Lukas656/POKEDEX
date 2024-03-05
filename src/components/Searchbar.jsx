import React, {useState} from "react";

const Searchbar = (props) => {
    const [search, setSearch] = useState("dito")
    const {onSearch} = props
    
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search.toLowerCase())
    }
    const onButtonClickFavorites = () => {
        alert("Em breve você podera ver seus favoritos... Calma o ❤️ bb")
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" onChange={onChangeHandler} />
            </div>
            <div className="btns-conteiner">
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler} >Buscar</button>
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickFavorites} >Favoritos</button>
            </div>
            </div>
        </div>
    )
}

export default Searchbar;