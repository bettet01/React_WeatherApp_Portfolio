import React from "react";

class Weather extends React.Component {
    render() {
        return(
            <div>
                { 
                this.props.city && this.props.country && <p className="weather__key">Location: 
                <span className="weather__value"> {this.props.city}, {this.props.country}</span>
                </p> 
                }
                {
                this.props.temperature && <p className="weather__key">Temperature: 
                <span className="weather__value"> {this.props.temperature}</span>
                </p> 
                }
                { 
                this.props.humidity && <p className="weather__key">Humidity: 
                <span className="weather__value"> {this.props.humidity}</span>
                </p> 
                }
                { 
                this.props.test && <p className="weather__key">Condition: 
                <span className="weather__value"> {this.props.test}</span>
                </p> 
                }
                { 
                this.props.error && <p>{this.props.error}</p>
                }
            </div>
        );
    }
}

export default Weather;