import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/CakeActions";

const HookCakeContainer = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>number of cakes -{numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>buy cake</button>
        </div>
    );
}

export default HookCakeContainer;