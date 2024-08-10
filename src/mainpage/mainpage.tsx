import { Fragment } from "react/jsx-runtime"
import { HeaderBar, MainBanner, TopicProcess } from "./mainpage_compo"


const Mainpage = () => {
    return (
        <Fragment>
            <HeaderBar />
            <MainBanner />
            <TopicProcess />
        </Fragment>
    )
}

export default Mainpage