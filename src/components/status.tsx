export const Status = (statusProp: status) => {
    let messages
    if (statusProp.status === 'loading') {
        messages = 'Loading...'
    } else if (statusProp.status === 'success') {
        messages = 'Data Fetched Sucessfully'
    } else {
        messages = 'Error Fetching Data'
    }
    return (
        <div>
            <h5>status - {messages}</h5>
        </div>
    )
}
type status = {
    status: 'loading' | 'success' | 'error'
}
