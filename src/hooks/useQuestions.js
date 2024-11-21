import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addQuestions } from '../slice/questionsSlice'

const useQuestions = () => {
    useEffect(() => {
        getQuestions()
    },[])
    const dispatch = useDispatch()

    const getQuestions = async () => {
        try{
        const data = await fetch("https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow")
        const json = await data.json()
        dispatch(addQuestions(json?.items))
        } catch(error){
            return
        }
    }
  return 
}

export default useQuestions