import { Link } from "react-router-dom";
import { newAccount } from "../../../api/api-mysql";
const NewAccount = () => {
    const handlerSubmit = async (eve) => {
        eve.preventDefault()
        const { user_handler, email, password } = eve.target
        console.log(user_handler.value, email.value, password.value)
        const recor = await  newAccount({
            user_handler: user_handler.value, 
            email: email.value, 
            password: password.value
        })
        if(recor.status === 401){
            alert(recor.message)
            return
        }
        console.log(recor)
    }
    return (
        <section className="new-account">
            <h1>Login</h1>
            <form onSubmit={handlerSubmit} autoComplete="off">
                <input type="text" name="user_handler" id="user_handler" placeholder="Insert your user handler" autoComplete="off" />
                <input type="email" name="email" id="email" placeholder='Insert your email address' autoComplete="off"  />
                <input type="password" name="password" id="password" placeholder='Insert your password' autoComplete="off" />
                <button type="submit">create new account</button>
            </form>
            <Link className="new-account" to="/login">Do you already have an account?</Link>
        </section>
    );
}
export default NewAccount;