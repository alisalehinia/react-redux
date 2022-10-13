import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/icecream/IceCreamActions";

const HookIceCreamContainer = () => {
    const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>number of cakes -{numOfIceCream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>buy icecream</button>
        </div>
    );
}

export default HookIceCreamContainer;