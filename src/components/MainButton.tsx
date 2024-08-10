import style from "./component.module.css"
import { PropsWithChildren, CSSProperties } from 'react'

type StyleProps = {
    style: CSSProperties
}

export const MainButton = (props: PropsWithChildren<StyleProps>) => {
    return (
        <div className={style.submit_button} style={props.style}>
            {props.children}
        </div>
    )
}