import { GoodsItem } from "./goodsItem";

function GoodsList(props) {
    const {goods = [], addToBasket = Function.prototype} = props;

    if (!goods.length) {
        return <h3>Not Found</h3>;
    }

    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.offerId} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    );
}

export { GoodsList };