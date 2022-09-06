import axios from "axios";
import { useEffect, useState } from "react";

export function usePokeApi<T = unknown>(url : string) {
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setData(response.data['results']);
        })
        .finally(() => {
            setIsFetching(false);
        })
    }, [])

    return { data, isFetching }
}

export function usePokeDetailsApi<T = unknown>(url: string){
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setData(response.data)
        })
    }, [])

    return {data}
}