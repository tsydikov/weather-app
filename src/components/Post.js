import React from 'react'
import {connect} from 'react-redux'
import { deletePost } from '../redux/actions'
import {useDispatch} from 'react-redux'

function Post ({ post }) {
  const dispatch = useDispatch()
 
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
          <button className="btn btn-primary" onClick={() => dispatch(deletePost(post.id)) }>delete</button>
          &nbsp;&nbsp;{post.city}&nbsp;{post.country}&nbsp;{post.temp}&#8451;&nbsp;{post.sky}
          </h5>
        </div>
      </div>
    )
}
  const mapDispatchToProps = {
    deletePost
  }
export default connect(null, mapDispatchToProps)(Post)