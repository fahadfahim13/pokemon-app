import {useEffect, useState} from 'react';
import {getPokemon} from "../API/PokemonListApi";

function usePokemonSearch(props: string) {
    const value = props
    let result: any, setResult: any;
    [result, setResult] = useState({})
    const [error, setError] = useState(false)
    useEffect(() => {
        if(value && value !== ''){
            const result = getPokemon(value)
            result.then((resp) => {
                    if(resp !== undefined){
                        setResult(resp)
                    } else{
                        setError(true)
                    }
                })
        }
    }, [setResult, value])

    return [result, error]
}

export default usePokemonSearch;