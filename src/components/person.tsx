type typedata = {
    name: {
        first: string;
        last: string;
    };
};

export const Person = (props: typedata) => {
    return <div>{props.name.first}😍{props.name.last}</div>;
};
