import {
  ChatContainer,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import axios from "axios";
// import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Chatbot() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am GPTechNews, How can I assist you today ? ",
      // sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);

  const generateChat = async (message) => {
    // e.preventDefault();
    const newMessage = {
      message: message,
      sender: "UserGPT",
      direction: "outgoing",
    };
    // post all the old Messages & new Message
    const newMessages = [...messages, newMessage];

    // update our messages state
    setMessages(newMessages);
    // console.log(newMessages)

    // set a typing indicator for chatgpt is typing
    setTyping(true);

    // process message to chatgpt: send it over and see the response
    await handleSubmit(newMessages);
    // await sendMessage(newMessages);
  };

  const handleSubmit = async (chatMessages) => {
    // e.preventDefault()
    try {
      const { data } = await axios.post(
        "https://gpt3-chatbot-3m2w.onrender.com",
        chatMessages
      );
      // console.log(data)
      const response = data.message.content;
      // setMessages([

      //     {
      //         message: data.message.content,
      //         sender: "ChatGPT",
      //     },
      // ]);
      setMessages([
        ...chatMessages,
        {
          message: response,
          sender: "ChatGPT",
        },
      ]);
      setTyping(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  // async function sendMessage(chatMessages) {

  //     // chatMessages = {sender: 'UserGPT' or "ChatGPT" , message: chatMessage}
  //     // apiMessages = {role: 'user' or 'assistant', content: chatMessage}

  //     let apiMessages = chatMessages.map((messageObject) => {
  //         let role = "";
  //         if (messageObject.sender === "ChatGPT") {
  //             // response from chatGPT
  //             role = "assistant";
  //         } else {
  //             // request from user
  //             role = "user";
  //         }
  //         return { role: role, content: messageObject.message };
  //     });
  //     // const systemMessage = {
  //     //     // define how chatgpt talks in initial message
  //     //     role: "system",
  //     //     content: 'Explain all concepts like I am 20 years old',
  //     //     // content: 'Speak like a Pirate'
  //     // }

  //     const apiRequestBody = {
  //         // 'model': "gpt-3.5-turbo",
  //         messages: [
  //             // systemMessage,
  //             ...apiMessages,
  //             // [msg1, msg2, ..., msg]
  //         ],
  //         // "temperature": 0.7,
  //     };
  //     // const res = systemMessages
  //     // // Empty request
  //     // if (!messages.message) {
  //     //     // res.status(400).json({ answer: 'Provide a prompt' })
  //     //     return;
  //     // }

  //     // await fetch('/chatbot', {
  //     fetch("http://localhost:5000/chatbot", {
  //         method: "POST",
  //         headers: {
  //             "Content-Type": "application/json",
  //             "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  //         },
  //         // body: JSON.stringify({ apiRequestBody }),
  //         body: JSON.stringify({ role: "user", content: messages }),
  //     })
  //         .then((data) => data.json())
  //         .then((data) => {
  //             // console.log(data);
  //             // const response = data.choices[0].message.content;
  //             const response = data.message.content;
  //             // console.log(response);
  //             // res.status(200).json({ msg: res.content })
  //             setMessages([
  //                 ...chatMessages,
  //                 {
  //                     message: response,
  //                     sender: "ChatGPT",
  //                 },
  //             ]);
  //             setTyping(false);
  //         })
  //         .catch((error) => {
  //             // console.error(error);
  //             console.log(error.message);
  //         });
  // }

  return (
    <div className="flex-box flex-col">
      <Header />
      <div className="text-center text-white h-screen  w-full py-10 flex-box flex-col scroll-smooth bg-gray-900">
        <div
          className="Chatbot"
          style={{ position: "relative", height: "100vh", width: "100%" }}
        >
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  typing ? (
                    <TypingIndicator content="GPTechNews is typing" />
                  ) : null
                }
              >
                {messages.map((message, i) => {
                  return <Message key={i} model={message} />;
                })}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                onSend={generateChat}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Chatbot;
