import { useEffect, useState } from "react"

export default function useIndex() {
    const [data, setData] = useState()

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
        data
    }

}