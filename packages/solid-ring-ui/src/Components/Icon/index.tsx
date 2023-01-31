import {Color, Size} from "./icon__constants";
import {JSX, ParentProps} from "solid-js";
import styles from "./Icon.module.scss"

export type IconType = any;

export interface IconProps extends JSX.HTMLAttributes<HTMLElement> {
    color: Color
    glyph: string | IconType | null
    height?: number | undefined
    size?: Size | null | undefined
    width?: number | undefined
    loading?: boolean | undefined
    suppressSizeWarning?: boolean | null | undefined
}


export default function Icon(p: ParentProps<IconProps>) {

    return (
        <span {...p} class={[styles.icon, p.class].join(" ")} classList={{
            [styles[p.color]]: !!p.color,
            [styles.loading]: p.loading
        }}>
        {
            p.glyph
        }
        </span>
    )
}

export {Color, Size};
