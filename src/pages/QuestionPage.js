import HeaderPage from "./HeaderPage"
import QuestionCard from '../components/QuestionCard'
import { useSelector } from 'react-redux'
import useQuestions from "../hooks/useQuestions"
import QuestionHeader from "../components/QuestionHeader"
import ShimmerPage from "./ShimmerPage"
import Blog from "../components/Blog"
import useHotQuestions from "../hooks/useHotQuestions"



const QuestionPage = () => {
  useHotQuestions()
  const questions = useSelector((store) => store?.questions?.filterQuestions)
  const searchedquestions = useSelector((store) => store?.questions?.searchedQuestions)
  const isSearch = useSelector((store) => store?.questions?.isSearch)

    
  return questions === null ? (<ShimmerPage/>) :
  (
    <div>
      <HeaderPage/>
      <Blog/>
      <QuestionHeader/>

      {isSearch === true ?  
      (searchedquestions?.map((question) => (
        <QuestionCard 
        title={question?.title}
        answer_count={question?.answer_count}
        tags ={question?.tags}
        name={question?.owner?.display_name}
        icon={question?.owner?.profile_image}
        reputation={question?.owner?.reputation}
        views={question?.view_count}
        userLink={question?.owner?.link}
        questionLink={question?.link}
        />

      ))) : 
      (questions?.map((question) => (
        <QuestionCard 
        title={question?.title}
        answer_count={question?.answer_count}
        tags ={question?.tags}
        name={question?.owner?.display_name}
        icon={question?.owner?.profile_image}
        reputation={question?.owner?.reputation}
        views={question?.view_count}
        userLink={question?.owner?.link}
        questionLink={question?.link}
        />

      ))) 
    }
    </div>
  )
}

export default QuestionPage