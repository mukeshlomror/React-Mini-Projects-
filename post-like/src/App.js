import React,{useState} from 'react'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineHeart} from "react-icons/ai"
import {AiFillHeart}  from "react-icons/ai"
import {BiCommentDetail} from "react-icons/bi"
import {IoMdShareAlt} from "react-icons/io"
function App() {
  const [like,setLike] = useState(false)
  const [count,setCount] = useState(0)
  //handles likes
  const handleLikes = () => {
    if(!like){
      setLike(true)
      setCount(count+1)
    }else{
      setLike(false)
      setCount(count-1)
    }
  }
  const imageUrl = "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  return (
    <>
    <div className="main-container">
    <h1 className="text-info">POST LIKE APP</h1>
    <h4>Likes Count: {count}</h4>
    <div className="card" style={{width:'18rem'}}>
      <div className="card-header"><BiUserCircle/>
         UserName
      </div>
      <div className="card-body">
        <img src={imageUrl} alt="post-img" height={"300px"} width="100%" onDoubleClick={handleLikes}/>
      </div>
      <div className="card-footer">
        {like ? (<AiFillHeart size={36} className="text-danger" onClick={handleLikes} style={{cursor:"pointer"}}/> ): (<AiOutlineHeart size={36} onClick={handleLikes} style={{cursor:"pointer"}}/>)}
        
        <BiCommentDetail size={36}/>
        
        <IoMdShareAlt size={36}/>
      </div>
    </div>
    </div>
      
    </>
  );
}

export default App;
