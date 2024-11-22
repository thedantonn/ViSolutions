import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFilterQuestions} from '../slice/questionsSlice'

const useFilterQuestions = () => {
    const dispatch = useDispatch()
    const filter =  useSelector((store) => store.questions.filter)
    useEffect(() => {
        getQuestions(filter)
    },[filter])
    const getQuestions = async () => {
        try{
        const data = await fetch(`https://api.stackexchange.com/2.3/questions?order=desc&sort=${filter}&site=stackoverflow`)
        const json = await data.json()
        dispatch(addFilterQuestions(json?.items))
   
        } catch(error){
            console.error("API Error:", error.message);
        }
    }
}

export default useFilterQuestions