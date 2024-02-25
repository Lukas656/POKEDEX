import React from "react";

const Pagination = (props)=>{
    const {page, totalPages, onLeftClick, onRightClick} = props
    
    return(
        <div className="pagination-container">
            <button onClick={onRightClick}>➡️</button>
            <div>{page} de {totalPages}</div>
            <button onClick={onLeftClick}>⬅️</button>
        </div>
    )
}

export default Pagination;