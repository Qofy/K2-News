"use client"
export default function Error({error}){
    return <div id="error">
        <h1>Error Found</h1>
        <h3>{error.message}</h3>
    </div>
}