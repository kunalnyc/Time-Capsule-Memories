// GreetMessage.tsx
import React from "react";

type Greet = {
    name: string;
    _messageCount: number;
    isLoggedin: boolean;
};

export const GreetMessage: React.FC<Greet> = (props) => {
    return (
        <div>
            {props.isLoggedin ? (
                <h2>Welcome, {props.name}! You have {props._messageCount} messages.</h2>
            ) : (
                <h2>Welcome Guest</h2>
            )}
        </div>
    );
};
