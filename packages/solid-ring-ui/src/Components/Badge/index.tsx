import {JSX, ParentProps} from "solid-js";
import styles from "./Badge.module.scss"

export interface BadgeProps extends JSX.HTMLAttributes<HTMLElement> {
    gray?: boolean | undefined
    valid?: boolean | undefined
    invalid?: boolean | undefined
    disabled?: boolean | undefined
    'data-test'?: string | null | undefined
}

export function Badge(p: ParentProps<BadgeProps>) {

    return (
        <span class={[styles.badge, p.class].join(" ")} classList={{
            [styles.gray]: p.gray,
            [styles.valid]: p.valid,
            [styles.invalid]: p.invalid,
            [styles.disabled]: p.disabled
        }}>
            {p.children}
        </span>
    )
}