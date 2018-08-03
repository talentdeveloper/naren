import { StyleSheet } from 'react-native'
import AppStyle from '../../../Styles/AppStyle'
import colors from '../../../Styles/Colors'

export default StyleSheet.create({
    ...AppStyle,
    textArea: {
        fontSize: 16,
        textAlignVertical: "top",
        minHeight: 100,
        flex: 1,
    }
});