import React, { useState } from "react";
import lvivPhoto from "C:/KPI/3y_kurs/1semestr/O-Front-end-T/Lab7/lab7_1/src/images/4cd6916ff31ce68b7a0043c4df272f90374f56e6_1585229828.png";

function Image() {
    const [imgWidth, setImgWidth] = useState(600);
    const [imgVisible, setImgVisible] = useState(true);

    const addImage = () => setImgVisible(true);
    const increase = () => setImgWidth(imgWidth + 50);
    const decrease = () => { if (imgWidth > 50) setImgWidth(imgWidth - 50); };
    const removeImage = () => setImgVisible(false);

    return (
        <div>
            <div id="image-block">
                {imgVisible && <img src={lvivPhoto} alt="Фото Львова" width={imgWidth} />}
            </div>

            <div className="controls">
                <button onClick={addImage}>Додати</button>
                <button onClick={increase}>Збільшити</button>
                <button onClick={decrease}>Зменшити</button>
                <button onClick={removeImage}>Видалити</button>
            </div>
        </div>
    );
}

export default Image;


