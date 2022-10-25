import { useEffect, useState } from "react"

export default function useIndex() {
    const [data, setData] = useState()

    const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });


    useEffect(() => {
        fetch('https://alunos.treinaweb.com.br/hyperprof/api/professores', {
            method: 'GET',
        }).then((response) => response.json()).then((data) => {
            setData(data)

        }).catch(() => {
            setData([])
        })

    }, [])

    return {
        data, formatter
    }

}