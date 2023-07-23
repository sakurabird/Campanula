import 'react-tippy'

// TODO
// Copied from https://github.com/tvkhoa/react-tippy/blob/917c78f7ce77331203217ec521e66673d9aad0e6/index.d.ts

declare module 'react-tippy' {
  export interface TooltipProps {
    title?: string
    disabled?: boolean
    open?: boolean
    useContext?: boolean
    onRequestClose?: () => void
    position?: Position
    trigger?: Trigger
    tabIndex?: number
    interactive?: boolean
    interactiveBorder?: number
    delay?: number
    hideDelay?: number
    animation?: Animation
    arrow?: boolean
    arrowSize?: Size
    animateFill?: boolean
    duration?: number
    hideDuration?: number
    distance?: number
    offset?: number
    hideOnClick?: boolean | 'persistent'
    multiple?: boolean
    followCursor?: boolean
    inertia?: boolean
    transitionFlip?: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    popperOptions?: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    html?: React.ReactElement<any>
    unmountHTMLWhenHide?: boolean
    size?: Size
    sticky?: boolean
    stickyDuration?: boolean
    beforeShown?: () => void
    shown?: () => void
    beforeHidden?: () => void
    hidden?: () => void
    theme?: Theme
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
  }
}
