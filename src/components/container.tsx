export const Container = (props: ContainerProps) => {
    return (
        <div style={props.styles}>
            Text Content Here!
        </div>
    )
}
type ContainerProps = {
    styles: React.CSSProperties
}