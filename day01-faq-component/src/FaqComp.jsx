import FaqItem from "./faqItem";

const FaqComp = ({ data }) => {

    return <>
        <div className="container">
            <h1>Frequently Asked Questions</h1>
            {
                data.map((item, index) => {
                    return <FaqItem item={item} key={index} />
                })
            }
        </div>
    </>
};

export default FaqComp;