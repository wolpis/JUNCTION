import { Fragment } from "react/jsx-runtime"
import { HeaderBar, MainBanner, More, NewIdea, RealTimeHot, TopicProcess } from "./mainpage_compo"


const MainPage = () => {
    return (
        <Fragment>
            <HeaderBar />
            <MainBanner />
            <TopicProcess />
            <RealTimeHot />
            <NewIdea />
            <More />
            {/* <Footer /> */}
        </Fragment>
    )
}

export default MainPage