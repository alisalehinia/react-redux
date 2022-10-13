import { buyCake } from "../redux/cake/CakeActions";
import { connect } from "react-redux";
import { useState } from "react";
const CakeContainer = (props) => {
    const [numbers, setNumbers] = useState(0);
    return (
        <div>
            <h2>number of cakes -{props.numOfCakes}</h2>
            <input type="text" onChange={e => setNumbers(e.target.value)} />
            <button onClick={() => props.buyCake(numbers)}>buy cake</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (n) => dispatch(buyCake(n))            //در خط 10 هنگام فراخوانی تابع از پراپس این خط اچرا می شود.برای همین اینجا هم باید ورودی ها را بدهیم
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
