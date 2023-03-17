import React from "react";
import { styles } from '../styles';

const Created = ()=>{

    return (
        <div className={`${styles.paddingX} bg-[#0E0F1F] h-[60px] flex justify-center items-center`}>
            <p>Created By <span className="text-[#407BFF]">Rishab</span></p>
        </div>
    )
}

export default Created;