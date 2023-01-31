import {JSX, ParentProps} from "solid-js";

const LEFT_BUTTON = 0;

const isPlainLeftClick = (e: MouseEvent) =>
    e.button === LEFT_BUTTON && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;

export interface ClickableLinkProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
    onConditionalClick?:
        | ((isPlainLeft: boolean, e: MouseEvent) => void)
        | null
        | undefined
    onPlainLeftClick?: ((e: MouseEvent) => void) | null | undefined
    activeClassName?: string | null | undefined
    disabled?: boolean | undefined
}

export default function ClickableLink(p: ParentProps<ClickableLinkProps>) {

    function onClick(e: MouseEvent) {

        const isPlainLeft = isPlainLeftClick(e);

        if (onClick) {
            onClick(e);
        }

        if (p.onConditionalClick) {
            p.onConditionalClick(isPlainLeft, e);
        }

        if (p.onPlainLeftClick && isPlainLeft) {
            e.preventDefault();
            p.onPlainLeftClick(e);
        }
    };
    return <a {...p} href={p.href} onClick={onClick}>{p.children}</a>;
}