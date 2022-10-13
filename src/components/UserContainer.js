import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/users/UserActions";
const UserContainer = () => {
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { users, error, loading } = userData;
    useEffect(() => {
        dispatch(fetchUsers());
    }, [])
    const renderUsers = () => {
        if (loading) return <div>loading...</div>
        if (!loading && error) return <div>{error}</div>
        if (!error && !loading && users) return (
            <div>
                <h2>user list</h2>
                {users.map(u => (
                    <p key={u.id}>{u.name}</p>
                ))}
            </div>
        )
    }
    return (
        <div>
            {renderUsers()}
        </div>
    )
}

export default UserContainer;