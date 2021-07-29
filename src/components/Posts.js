import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'

const Posts = ({posts}) => {
  return posts.map(post => <Post post={post} key={post.id} />)
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, null)(Posts)