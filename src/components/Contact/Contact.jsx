import React, {useState, useRef} from 'react'
import "./Contact.css"

const Contact = () => {
    const formRef = useRef()
    const [from,setFrom] = useState("")
    const [subject,setSubject] = useState("")
    const [message,setMessage] = useState("")
  return (
    <div className="contact-section">
        <div className="contact-col">
            <div className="envelope-parent-div">
                <div className="envelope-container">
                    <div className="envelope">
                        <div className="envelope-side envelope-front"></div>
                        <div className="envelope-side envelope-back">
                            <div className="from-envelope-div">
                                <h5>{from}</h5>
                            </div>
                            <div className="subject-envelope-div">
                                <p>{subject}</p>
                            </div>
                            <div className="stamp-div">
                                <div className="stamp">
                                    <div className="stamp-border"></div>
                                    <div className="stamp-h1">
                                        <h5>JG</h5>
                                    </div>
                                    <p>Dev</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="contact-col">
            <form ref={formRef} className="contact-form">
                <div className="form-div">
                    <label htmlFor="from">
                        <p>Email</p>
                        <input type="text" name="from" id="from" value={from} onChange={(e)=>setFrom(e.target.value)} placeholder="Email" className="form-control" />
                    </label>
                </div>
                <div className="form-div">
                    <label htmlFor="subject">
                    <p>Subject</p>
                        <input type="text" name="subject" value={subject} onChange={(e)=>setSubject(e.target.value)} id="subject" placeholder="Subject" className="form-control" />
                    </label>
                </div>
                <div className="form-div">
                    <label htmlFor="email">
                    <p>Message</p>
                        <textarea type="text" name="message" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" className="form-text"/>
                    </label>
                </div>
                <div className="form-div">
                    <button className="contact-btn">Send</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact