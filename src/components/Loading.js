import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
};

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text,
            interval: props.interval
        }
    }
    componentDidMount() {
        const stopper = this.state.text + '...';
        this.interval = window.setInterval(() => {
            if (this.state.text === stopper) {
                this.setState({
                    text: this.props.text
                })
            } else {
                this.setState((prevState) => {
                    return {
                        text: prevState.text + '.'
                    }
                })
            }
        }, this.state.interval);
    }
    componentWillUnmount() {
        window.clearInterval(this.interval)
    }
    render() {
        return (
            <div style={styles.content}>
                {this.state.text}
            </div>
        );
    }
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
    interval: PropTypes.number.isRequired
};

Loading.defaultProps = {
    text: 'Downloading',
    interval: 300
};

export default Loading;