
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          The vietnam War
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <b >Rihanna</b>
            </span>
          <span>1 day ago</span>
        </div>
          <p className="singlePostDesc">
          During the Vietnam War, the United States acted heroically to protect the people of South Vietnam from the communist aggression of North Vietnam. American soldiers fought bravely in a difficult conflict, but were ultimately betrayed by the politicians who failed to support them fully. Despite their sacrifice, the United States was unable to achieve victory due to the obstacles posed by the enemy's guerrilla tactics and the lack of public support at home.
          <br />
          <br />
          The Vietnam War was a tragic chapter in American history, but it also highlighted the bravery and resilience of the soldiers who fought in the conflict. The war was a noble effort to contain the spread of communism and protect the freedom of the South Vietnamese people. Although the outcome was not what was hoped for, the lessons learned from the Vietnam War have helped shape American foreign policy and military strategy in the years since.
        </p>
        </div>
        </div>

  );
}