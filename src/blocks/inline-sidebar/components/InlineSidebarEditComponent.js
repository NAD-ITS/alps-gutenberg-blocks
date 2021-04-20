import { Component } from "@wordpress/element";
import { RichText } from "@wordpress/block-editor";
import { __ } from '@wordpress/i18n';
import {DescCard} from "../../global-components/DescCard";

export class InlineSidebarEditComponent extends Component {
    constructor() {
        super(...arguments);

        this.onChangePreface = this.onChangePreface.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
    }

    onChangePreface (preface) {
        this.props.setAttributes({ preface });
    }

    onChangeTitle (title) {
        this.props.setAttributes({ title });
    }

    onChangeDescription (description) {
        this.props.setAttributes({ description });
    }

    render () {

        const { className, attributes } = this.props;

        return ([
                <div className={ className }>
                    <div>
                        <DescCard
                            title={"Inline Sidebar"}
                            hasText={true}
                            hasImage={false}
                            hasImages={false}
                        />
                        <div className={'contentCard'}>
                            <fieldset>
                                <legend>{ __("Preface") }</legend>
                                <RichText
                                    className={"contentCard__input"}
                                    placeholder={ __("Enter a title preface") }
                                    value={ attributes.preface }
                                    onChange={ this.onChangePreface }
                                />
                            </fieldset>


                            <fieldset>
                                <legend>{ __("Title") }</legend>
                                <RichText
                                    className={"contentCard__input"}
                                    placeholder={ __("Enter your block title") }
                                    value={ attributes.title }
                                    onChange={ this.onChangeTitle }
                                />
                            </fieldset>

                            <fieldset>
                                <legend>{ __("Description") }</legend>
                                <RichText
                                    className={"contentCard__input"}
                                    placeholder={ __("Enter your Description...") }
                                    value={ attributes.description }
                                    onChange={ this.onChangeDescription }
                                />
                            </fieldset>
                        </div>
                    </div>
                </div>
            ]
        );
    }
}