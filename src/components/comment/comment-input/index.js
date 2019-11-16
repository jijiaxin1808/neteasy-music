import React,{ useState, useRef, useEffect } from "react";
import 'emojione-picker/css/picker.css';
import EmojiPicker from 'emojione-picker';
import "./index.less";

export default function ComponentInput(props) {

		const [showPicker, setShowPicker] = useState(false); 
		const [comment, setComment] = useState("");
		const [lastEditRange, setLastEditRange] = useState(null);
		const textareaRef = useRef(null);

		const categories = {
			people: {
				emoji: 'smile'
			},
			nature: {
				emoji: 'mouse'
			},
			food: {
				emoji: 'pizza'
			},
		}

		const sel = window.getSelection && window.getSelection();
		let range = null;
		if (sel && sel.rangeCount > 0) {
			range = sel.getRangeAt(0);
		}
		
		useEffect(() => {
			
			
		}, [comment]);
		
		return (
			<React.Fragment>
				<div className="comment-input-header">
					<p>评论</p>
					<span>{`共${ props.commentCount }条评论`}</span>
				</div>
				<div className = "comment-input-content">
					<img src = "http://p4.music.126.net/ma8NC_MpYqC-dK_L81FWXQ==/109951163250233892.jpg?param=50y50"  
						alt = "头像" width = "50px" height = "50px" className = "comment-input-Avatar"
					/>
					<textarea 
						placeholder="评论" 
						className="comment-input-textarea"
						ref={textareaRef}
						// onChange={(e) => {setComment(e.target.value)}}
						onSelect={e=>{
							console.log(range)			
						}}
					>
					</textarea>
					<div className = "comment-input-footer">
						<div>
							<i className="icn u-icn-emoji" onClick={() => {setShowPicker(!showPicker);console.log(textareaRef.current)}}></i>
							<i className="icn u-icn-call" onClick={() => {}}></i>
						</div>
						<div>
							<span>{`${140}`}</span>
							<span>评论</span>
						</div>
						<div className="emoji-container">
							{
								showPicker &&
								<EmojiPicker 
									search={true}
									style={{zIndex: 999}}
									categories={categories}
									onChange={(data) => {console.log(data)}}
								/>
							}
						</div>                        
					</div>
				</div>


			</React.Fragment>
		);
}