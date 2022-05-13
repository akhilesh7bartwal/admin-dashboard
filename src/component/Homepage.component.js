import { useNavigate } from "react-router-dom"

const HomePage = () =>{

    const navigate = useNavigate()


    return(
        <>
            <h1>Admin Dashboard Management System</h1>
            <button onClick={() => navigate('signup/')}>Signup</button>
            <button onClick={() => navigate('signin/')}>Signin</button>
        </>
    )
}
export default HomePage