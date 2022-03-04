import React, { Component } from "react";
import "./CheckoutProgressbar.style"

class CheckoutProgressBar extends Component{

    spawnCircle = () =>{
        const {progressBarItems, selected} = this.props;       
        return(
            progressBarItems.map((item, index) => {
                if (index === progressBarItems.length - 1){
                    return;
                }
                return(                    
                    <div className="circle-container" key={item}>
                        <div className="circle">
                            <div className={index + 1 <= selected + 1 ? "circle-number passed": "circle-number"}>
                                {index + 2 <= selected + 1 ? <div className="tick"></div>: index + 1}
                            </div>
                            <div className={index + 1 <= selected + 1? "circle-description passed": "circle-description"}>
                                {item.title}
                            </div>
                        </div>                    
                    </div>
                )
            })
        )
    }

    render(){
        const {selected, progressBarItems} = this.props;
        const progress = ((selected + 1) / (progressBarItems.length)) * 100 + "%"
        
        return(            
            <div className="container">      
                <div className="circle-line">
                    <div className="circle-line-filler" style={{width: progress}} ref={this.progressBarFillLine}></div>
                </div>
                {this.spawnCircle()}
            </div>
        )
    }
}

export default CheckoutProgressBar;