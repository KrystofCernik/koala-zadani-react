
interface Parent {
    "ID": string,
    "Name": string,
    "Gender": string,
    "Ability": string,
    "Minimal distance": string,
    "Weight": string,
    "Born": string,
    "In space since": string,
    "Beer consumption (l/y)": string,
    "Knows the answer?": string,
}

interface Child {
    "Character ID": string,
    "ID": string,
    "Is alive?": string,
    "Years": string
}

interface GrandChild {
    "ID": string,
    "Nemesis ID": string,
    "Secrete Code": string
}

interface Path {
    "has_nemesis": {
        "records": Array<Person>
    },
    "has_secrete": {
        "records": Array<Person>
    }
}

type Data = Parent | Child | GrandChild

export default interface Person {
    data: Data,
    children: Path
}