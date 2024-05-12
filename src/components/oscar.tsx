import React from "react"

export const Oscar = (_oscarprops: oscar) => {
    return <div>{_oscarprops.children}</div>
}
type oscar = {
    children: React.ReactNode

}