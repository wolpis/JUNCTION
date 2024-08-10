import { Fragment } from "react/jsx-runtime"
import { HeaderBar, MainBanner, More, NewIdea, RealTimeHot, TopicProcess, Footer_ } from "./mainpage_compo"


const MainPage = () => {
    return (
        <Fragment>
            <HeaderBar />
            <MainBanner />
            <TopicProcess />
            <RealTimeHot />
            <NewIdea />
            <More />
            <Footer_ />
        </Fragment>
    )
}

export default MainPage