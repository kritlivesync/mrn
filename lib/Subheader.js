import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text
} from 'react-native';
import {
    TYPO
} from './config'

/**
 * Subheader Components
 *
 * Subheaders are special list tiles that delineate distinct sections of a list or grid list and are typically related
 * to the current filtering or sorting criteria. Subheader tiles are either displayed inline with tiles or can be
 * associated with content, for example, in an adjacent column.
 *
 * @example
 * import {TYPO, COLOR, Subheader } from 'react-native-material-design-components';
 *
 * ...
 *
 * <Subheader text="Subheader normal"/>
 * <Subheader text="Subheader with color" primaryColor={COLOR[`${primary}500`].color}/>
 * <Subheader text="Subheader normal, inset" inset={true}/>
 * <Subheader text="Subheader with color, inset" primaryColor={COLOR[`${primary}500`].color}inset={true}/>
 */
export default class Subheader extends Component {
    /**
     *
     * @param {object} props
     * @param {string} props.text - Subheader text.
     * @param {string} [props.primaryColor='rgba(0,0,0,.54)'] - Primary color of Subheader. Accept a color string such
     * as RGBA,RGB,HEX.
     * @param {boolean} [props.inset=false] - If `true`, Subheader is aligned with the text content with 72dp paddingLeft.
     * Often with a left-aligned floating action button.
     * @param {enum} [props.theme='light'] -  `enum('light','dark)`, The theme of Subheader.
     */
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        primaryColor: 'rgba(0,0,0,.54)',
        inset: false,
        theme: 'light'
    };

    static propTypes = {
        text: PropTypes.string.isRequired,
        primaryColor: PropTypes.string,
        inset: PropTypes.bool,
        theme: PropTypes.oneOf(['light', 'theme'])
    };

    state = {};

    render = () => {
        const {
            text,
            primaryColor,
            inset,
            theme
            } = this.props;
        return (
            <View style={[styles.subheaderContainer,{
                paddingLeft: inset ? 72 : 16
            }]}>
                <Text style={[styles.text, {
                    color: primaryColor,
                    fontWeight: '500'
                }]}>
                    {text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    subheaderContainer: {
        padding: 16
    },
    text: TYPO.paperFontBody1
});