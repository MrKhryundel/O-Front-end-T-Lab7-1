import React from "react";
function Image() {
    const [imgWidth, setImgWidth] = React.useState(600);
    const [imgVisible, setImgVisible] = React.useState(true);

    const addImage = () => setImgVisible(true);
    const increase = () => setImgWidth(imgWidth + 50);
    const decrease = () => { if (imgWidth > 50) setImgWidth(imgWidth - 50); };
    const removeImage = () => setImgVisible(false);

    const lvivPhoto = process.env.PUBLIC_URL + "/img/4cd6916ff31ce68b7a0043c4df272f90374f56e6_1585229828.png";

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





