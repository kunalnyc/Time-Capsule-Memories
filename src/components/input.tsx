export const InputText = (props: InputProps) => {
    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return <input type="Enter your name" value={props.value} onChange={onHandleChange} />
}
type InputProps = {
    value: string,
    onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}