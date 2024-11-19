import HeaderPage from "./HeaderPage"
import QuestionCard from '../components/QuestionCard'
import { useSelector } from 'react-redux'
import useQuestions from "../hooks/useQuestions"
import QuestionHeader from "../components/QuestionHeader"
import Shimmer from "../components/Shimmer"
import ShimmerPage from "./ShimmerPage"
import Blog from "../components/Blog"

const QuestionPage = () => {
  useQuestions()
  const questions = useSelector((store) => store?.questions)
  console.log(questions)
    
  return questions === null ? (<ShimmerPage/>) :
  (
    <div>
      <HeaderPage/>
      <Blog/>
      <QuestionHeader/>
      {questions?.map((question) => (
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

      ))}
    </div>
  )
}

export default QuestionPage