import {ControlsHeight} from "../../Global/controls-height";
import {JSX} from "solid-js";
import Icon, {Color, IconType, Size} from "../Icon";
import styles from "./Button.module.scss"
import chevronDown from '@jetbrains/icons/chevron-10px';
import ClickableLink, {ClickableLinkProps} from "../Link/clickableLink";

export interface ButtonBaseProps {
    height?: ControlsHeight | undefined
    active?: boolean | undefined
    danger?: boolean | undefined
    delayed?: boolean | undefined
    loader?: boolean | undefined
    primary?: boolean | undefined
    short?: boolean | undefined
    text?: boolean | undefined
    inline?: boolean | undefined
    dropdown?: boolean | undefined
    disabled?: boolean | undefined
    icon?: string | IconType | undefined
    iconSize?: Size | undefined
    iconClassName?: string | undefined
    iconSuppressSizeWarning?: boolean | undefined
}

export interface ButtonButtonProps
    extends JSX.ButtonHTMLAttributes<HTMLButtonElement>,
        ButtonBaseProps {
    href?: undefined
}

export type ButtonProps = ButtonButtonProps | ButtonLinkProps

export interface ButtonLinkProps extends ClickableLinkProps, ButtonBaseProps {
    autoFocus?: never
    href: string
    children?: any
}

export function Button(p: ButtonProps) {

    const content = (
        <span class={styles.content}>
        {p.icon && (
            <span class={[styles.icon, p.iconClassName].join(" ")}>
            <Icon
                color={Color.DEFAULT}
                glyph={p.icon}
                size={p.iconSize}
                loading={p.loader}
                suppressSizeWarning={p.iconSuppressSizeWarning}
            />
          </span>
        )}
            {p.children && (
                <span>{p.children}</span>
            )}
            {p.dropdown && (
                <Icon
                    color={Color.DEFAULT}
                    glyph={chevronDown}
                    class={styles.dropdownIcon}
                />
            )}
      </span>
    );
    const commonProps = {
            tabIndex: p.loader ? -1 : 0,
            ...p,
            className: [styles.button, p.class].join(" "),
            classList: {
                [styles.active]: p.active,
                [styles.danger]: p.danger,
                [styles.delayed]: p.delayed,
                [styles.withIcon]: p.icon,
                [styles.withNormalIcon]: p.icon && !p.active && !p.danger && !p.primary && !p.disabled,
                [styles.withDangerIcon]: p.icon && p.danger,
                [styles.loader]: p.loader && !p.icon,
                [styles.primary]: p.primary,
                [styles.short]: p.short,
                [styles.text]: p.text,
                [styles.inline]: p.inline
            },
            children:
                <>
                    {p.loader && !p.text && !p.icon && <div class={styles.loaderBackground}/>}
                    {content}
                </>
        }
    ;

    return commonProps.href != null
        ? (
            <ClickableLink
                {...commonProps}
            />
        )
        : (
            <button
                // ref={this.buttonRef}
                type="button"
                {...commonProps}
            />
        );
}


export interface ButtonLinkProps extends ClickableLinkProps, ButtonBaseProps {
    autoFocus?: never
    href: string
}


export {Size as IconSize};

export default Button;

