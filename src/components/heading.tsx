export const Heading = (_headProps: Headings) => {
    return (
        <h2>{_headProps.children}</h2>
    )
}
type Headings = {
    children: string
}