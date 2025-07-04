import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md";


const FaqItem = ({ item }) => {
    const [show, setShow] = useState(false);

    return <>
        <div className="faq_container">

            <div className="box" style={{ borderBottom: "1px solid", marginTop: "10px" }}>
                <div className="question">
                    {
                        show ? <button><MdKeyboardArrowDown onClick={() => setShow(false)} /></button> : <button><MdKeyboardArrowLeft onClick={() => setShow(true)} /></button>
                    }
                    <h3>{item.question}</h3>
                </div>
                {show && <p>{item.answer}</p>}
            </div>

        </div>
    </>
};

export default FaqItem;