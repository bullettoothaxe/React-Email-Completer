"use strict";

import React, { Component, PropTypes } from 'react'
import {
    getDomains,
    getEmailWithDomain,
    domains
} from './helpers'

class EmailCompleter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || '',
            hint: false,
            highlightedIndex: null,
            activeDomains: []
        };
    }

    static propTypes = {
        domains: PropTypes.array
    };

    static defaultProps = {
        domains
    };

    keyDownHandlers =  {
        ArrowDown(event) {
            event.preventDefault();

            const itemsLength = this.state.activeDomains.length;

            if (!itemsLength) return;

            let { highlightedIndex } = this.state,
                index = (
                    highlightedIndex === null ||
                    highlightedIndex === itemsLength - 1
                ) ?  0 : highlightedIndex + 1;

            this.setState({
                highlightedIndex: index
            });
        },
        ArrowUp(event) {
            event.preventDefault();

            const itemsLength = this.state.activeDomains.length;

            if (!itemsLength) return;

            let { highlightedIndex } = this.state,
                index = (
                    highlightedIndex === 0 ||
                    highlightedIndex === null
                ) ? itemsLength - 1 : highlightedIndex - 1;

            this.setState({
                highlightedIndex: index
            });
        },
        Enter(event) {
            event.preventDefault();

            if (!this.state.hint || this.state.highlightedIndex === null) return;

            let value = getEmailWithDomain(this.state.value, this.state.activeDomains[this.state.highlightedIndex]);

            this.complete(value);
        }
    };

    composeEventHandlers (internal, external) {
        return external
            ? e => { internal(e); external(e); }
            : internal
    }

    handleKeyDown (event) {
        if (this.keyDownHandlers[event.key]) {
            this.keyDownHandlers[event.key].call(this, event);
        }
    }

    changeValue(e) {
        let activeDomains = getDomains(e.target.value, this.props.domains);

        this.setState({
            value: e.target.value,
            hint: true,
            activeDomains,
            highlightedIndex: null
        });
    }

    complete(value) {
        this.setState({
            value,
            hint: false
        });
    }

    render() {
        let { domains, ...inputProps } = this.props;

        return (
            <div className="email-completer-wrapper">
                <input {...inputProps}
                       value={this.state.value}
                       onChange={this.composeEventHandlers(::this.changeValue, inputProps.onChange)}
                       onKeyDown={this.composeEventHandlers(::this.handleKeyDown, inputProps.onKeyDown)}
                       autoComplete="off"
                />

                <ul className={ (!this.state.hint ? 'hide' : '') + ' email-domains' } >
                    {
                        this.state.activeDomains.map(
                            (domain, index) =>
                        <li key={index}
                            className={ this.state.highlightedIndex == index ? 'selected' : ''}
                            onClick={this.complete.bind(this, getEmailWithDomain(this.state.value, domain))}
                        >
                            { getEmailWithDomain(this.state.value, domain) }
                        </li>
                    )
                    }
                </ul>
            </div>
        );
    }
}

export default EmailCompleter;