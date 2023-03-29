import React from "react";
import { useEffect, useRef, useState } from "react";
import Badge from 'react-bootstrap/Badge';

import "./App.css";
import axios from "axios";

const YOU = "you";
const AI = "ai";

function ChatBox() {

    const bottomRef = useRef(null);
    // const inputRef = useRef();
    const [question, setQuestion] = useState('')
    // console.log(question)
    const [qna, setQna] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [qna]);

    const updateQNA = (from, value) => {
        setQna((qna) => [...qna, { from, value }]);
    };
    const handleSetQuestion = (e) => {
        setQuestion(e.target.value)
    }
    const handleSend = (e) => {
        console.log('handleSend Called')

        updateQNA(YOU, question);

        setLoading(true);
        axios
            .post("http://localhost:3000/chat", {
                question,
            })
            .then((response) => {
                updateQNA(AI, response.data.answer);
            })
            .finally(() => {
                setLoading(false);
            });

        setQuestion('')
    };

    const renderContent = (qna) => {
        const value = qna.value;

        if (Array.isArray(value)) {
            return value.map((v) => <p className="message-text">{v}</p>);
        }

        return <p className="message-text">{value}</p>;
    };
    return (
        <main class="container h-50">
            <div class="chats mb-4">
                {qna.map((qna) => {
                    if (qna.from === YOU) {
                        return (
                            <div class="send chat">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                                    alt=""
                                    class="avtar"
                                />
                                <p>{renderContent(qna)}</p>
                            </div>
                        );
                    }
                    return (
                        <div class="recieve chat">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
                                alt=""
                                class="avtar"
                            />
                            <p>{renderContent(qna)}</p>
                        </div>
                    );
                })}

                {loading && (
                    <div class="recieve chat">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
                            alt=""
                            class="avtar"
                        />
                        <p>Typing...</p>
                    </div>
                )}
                <div ref={bottomRef} />
            </div>
            <form onSubmit={handleSend} class='d-flex flex-row justify-content-between border w-100 p-1 '>


                <div class='d-flex flex-column w-75'>
                    <label for="chatInput"><Badge bg="primary">Dobby</Badge></label>
                    <input class='' type="text" id="chatInput" onChange={handleSetQuestion} value={question} onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleSend();
                        }
                    }}>
                    </input>
                </div>
                <div disabled={loading} onClick={handleSend} style={{maxWidth:"10%",cursor: "pointer"}}class="w-25 d-flex justify-content-center align-items-center fs-1 ">

                    <span  class="material-symbols-outlined " style={{transform:"rotate(-35deg)"}} >
                        send
                    </span>
                </div>
                {/* <button >Send</button> */}

            </form>



        </main>
    );
}

export default ChatBox;
