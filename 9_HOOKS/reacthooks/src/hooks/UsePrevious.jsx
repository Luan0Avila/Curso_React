import { useRef, useEffect } from "react";

export const UesPrevious = (value) => {
    const ref = useRef;

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
}