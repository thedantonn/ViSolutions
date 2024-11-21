import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addHotQuestions,} from '../slice/questionsSlice'

const useHotQuestions = () => {
    const dispatch = useDispatch()
    const filter =  useSelector((store) => store.questions.filter)
    console.log(filter)
    useEffect(() => {
        getQuestions(filter)
    },[filter])
    

    const getQuestions = async () => {
        try{
        const data = await fetch(`https://api.stackexchange.com/2.3/questions?order=desc&sort=${filter}&site=stackoverflow`)
        const json = await data.json()
        dispatch(addHotQuestions(json?.items))
        console.log(json?.items)
        } catch(error){
            return 
        }
    }
  return 
}

export default useHotQuestions