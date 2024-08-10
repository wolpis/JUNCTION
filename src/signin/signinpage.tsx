
import { Fragment } from "react/jsx-runtime"
import { HeaderBar } from "../mainpage/mainpage_compo"
import { SignIn } from "./signinpage_compo"

const LoginPage = () => {
    return (
        <Fragment>
            <HeaderBar />
            <SignIn />
        </Fragment>
    )
}

export default LoginPage;