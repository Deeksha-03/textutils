import React,{useState} from 'react'
import './About.css'

export default function About() {
    const [myStyle, setMyStyle] = useState(
    {
        color:"black",
        backgroundColor:"white"
    }
    );
    const [btncolor, setBtnColor] = useState(
        {
            color:"white",
            backgroundColor:"black"
        }
        );
    const [btntext, setBtnText] = useState("Enable Dark mode")

    const toggleStyle = ()=>
    {
        if(myStyle.color==='white')
        {
            setMyStyle({
                color:"black",
                backgroundColor:"white"
            })
            setBtnColor({
                color:"white",
                backgroundColor:"black"
            })
            setBtnText("Enable Dark mode");
        }
        else
        {
            setMyStyle(
                {
                    color:"white",
                    backgroundColor:"black"
                }
            )
            setBtnColor({
                color:"black",
                backgroundColor:"white"
            })
            setBtnText("Enable Light mode");
        }
    }

  return (
    <div className='container my-2 ' style={myStyle} >
        <h2 className="my-2">About Us</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}> 
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        {/* <div class="form-check form-switch">
            <input class="form-check-input colortoggle" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleStyle}/>
            <label class="form-check-label" for="flexSwitchCheckDefault">{btntext}</label>
  </div> */}
        <div className='py-2' >
            <button type="button" onClick={toggleStyle} className="button1" style={btncolor}>{btntext}</button>
        </div>
    </div>
  )
}
