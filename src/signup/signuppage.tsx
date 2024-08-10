
import { Fragment } from "react/jsx-runtime"
import { HeaderBar } from "../mainpage/mainpage_compo"
import { SignUp } from "./signuppage_compo"

const SignUpPage = () => {
    return (
        <Fragment>
            <HeaderBar />
            <SignUp />
        </Fragment>
    )
}

export default SignUpPage;