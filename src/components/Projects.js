import React, { Component } from 'react'
import Couresel from  "./Couresel"

export class AboutUs extends Component {
    render() {
        return (
            <div>
               <h3 className="funnyFonts text-white text-center mt-2 mb-3">Projects I have worked on:</h3>
                <Couresel />
            </div>
        )
    }
}

export default AboutUs
