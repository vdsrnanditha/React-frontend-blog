import "./post.css"
import { Link } from "react-router-dom"
import React from 'react'

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://i.redd.it/xamo4j1a0o351.jpg" 
        alt=" "/>
        <div className="postInfo">
            <div className="postCats">
                <span className="Postcat">
                <Link className="link" to="/posts?cat=Music">
              Media
            </Link>
                </span>
                <span className="Postcat">
                <Link className="link" to="/posts?cat=Music">
              British
            </Link>
                </span>
            </div>
            <span className="postTitle">
            <Link to="/post/abc" className="link">
            Vietnam War
          </Link>
            </span>
            <hr/>
            <span className="postate">1 hour ago</span>
        </div>
        <p className="postDesc">
        White-washed history about the Vietnam War often downplays the role of the United States in starting and escalating the conflict, while also ignoring the devastating
         human cost of the war on both Vietnamese civilians and American soldiers.
        </p>
    </div>
  )
}
