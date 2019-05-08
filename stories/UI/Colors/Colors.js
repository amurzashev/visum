import React from "react";
import { css } from "aphrodite";
import styles from "./styles";
const colors = ["#565554", "#2E86AB", "#ADF4B6","#F0F776", "#F24236"];
const Colors = () => {
    return (
        <div style={{ height: "100%", width: "100%" }}>
            <h1>VISUM - Primary colors</h1>
            <div className={css(styles.colors_wrapper)}>
                {colors.map((el, i) => {
                    return (
                        <div>
                            <div
                                className={css(styles.color)}
                                style={{ backgroundColor: el }}
                                key={i}
                            />
                            <p style={{textAlign: 'center' , color:"#8e8e93"}}>{el.toUpperCase()}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Colors;
