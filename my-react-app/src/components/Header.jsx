
function Header(){
    return(
        <header>
            <i className="fa-solid fa-earth-americas"></i>
            <h1>my travel journal.</h1>
        </header>
    )
}
export default Header

// length
// function tunggle(){
//     iscontact(prevcontact => ({
//         ...prevcontact
//         isfav: !prevcontact.isfav
//     }))
// }



   // const [isShown, setisShown]= useState(false)
    
    
    // function toogle(){
    //     setisShown(previsShown=>({
    //         previsShown,
    //         isShown: !isShown.isShown
    //     }))
            
    // }
    // console.log(isShown)


//     import React from "react"

// export default function App() {
//     const [messages, setMessages] = React.useState(["a", "b"])
//     /**
//      * Challenge:
//      * - If there are no unread messages, display "You're all caught up!"
//      * - If there's exactly 1 unread message, it should read "You have 
//      *   1 unread message" (singular)
//      * - If there are > 1 unread messages, display "You have <n> unread
//      *   messages" (plural)
//      */
    
//     // function toggle(){
//     //     setMessages(prevmessages=>({
//     //         messages:!messages
//     //     }))
//     // }
    
//     function myMessages(){
//         if(messages.length === 0){
//             return <h1>"You're all caught up!"</h1>
//         }
//         else if(messages.length === 1){
//           return <h1>"You have 1 unread message"</h1>
//         }
//         else if(messages.length > 1){
//            return <h1>"You have {messages.length} unread messages"</h1>
//         }
//     } 

//     return (
//         <div>
//             <h1>{myMessages()}</h1>
//         </div>
//     )
    
// }

// import pads from "./pads"
// import React from "react"

// export default function App(props) {
//     const [usePads, setusePads] = React.useState([]);
    
//    const ingridentItems = pads.map(pad =>(
//             <li key={pad}>
//                 color={props.color}
//             </li>
//     ))