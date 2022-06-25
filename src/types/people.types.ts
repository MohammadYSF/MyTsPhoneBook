import React from "react"
import Person from "../components/person"
export type peopleType = {
    children:React.ReactElement<typeof Person> [],
    bootstrapTableClasses? : string[]
}