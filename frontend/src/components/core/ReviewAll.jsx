import React, { useState, useEffect } from "react";
import Loader from '../utils/Loader';
import Error from "../utils/Error";
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../utils/Rating'
import { listCursoDetails, createCursoReview } from '../../actions/cursoActions'
import { CURSO_CREATE_REVIEW_RESET } from '../../constants/cursoConstants'
import logo from '../../media/logo.png';
import { HiArrowUpOnSquareStack } from "react-icons/hi2";
import { FaStar } from "react-icons/fa"
import { listUsers } from '../../actions/userActions';

const ReviewAll = ({match}) => {

  const URL = (process.env.REACT_APP_API_URL)
  
    const detailsCurso = useSelector(state => state.detailsCurso)
    const { loading, error, curso } = detailsCurso
  
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
  
    const createReview = useSelector(state => state.createReview)
    const { loading: loadingcursoReview, error: errorcursoReview, success: successcursoReview } = createReview
  
    const userList = useSelector(state => state.userList);
    const { users } = userList;
  
    const dispatch = useDispatch()
  
  
    useEffect(() => {
  
      dispatch(listCursoDetails(match.params.id))
      dispatch(listUsers());
  
    }, [dispatch, match, successcursoReview])
  
  



  return (
    
        <>
        <div className="flex items-center justify-between mt-10 mb-16">
        <h2 className="text-3xl text-grey-1 font-mono">
          Reviews de

          <span className='text-orange ml-3.5'>
            {curso.title}
          </span>

        </h2>
      </div>

<div className='border border-t-white mb-7 mt-7'>

</div>
<>
{curso.reviews && curso.reviews.map((review) => (
  <>
    {users && users.map(user => (
      <>
        {user.username === review.user &&
          <>
            <div className="flex items-center mb-4 space-x-4">
              <img className="w-10 h-10 rounded-full" src={`${URL}${user.avatar}`} alt="" />
              <div className="space-y-1 font-medium text-white text-mono">
                <p>{review.user}</p>
                <p className="text-grey"> {review.created?.substring(0, 10)}</p>
              </div>
            </div>

            <div className="flex items-center mb-1 ml-[65px]">
              <p className="mt-1 text-sm text-amarillo"> <Rating value={review.rating} />
              </p>
            </div>
            <div className="flex items-center mb-1 ml-7">

              <p className="ml-10 mt-1  text-grey text-mono">
                {review.comment}
              </p>
            </div>
          </>

        }
      </>
    ))}
  </>

))}
</>
</>





  )
}

export default ReviewAll