import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text } from 'react-native';
import { Button } from 'native-base'
import Style from "./Style/DateInput";
import Icon from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Colors from '../../../Styles/Colors'
import moment from "moment/moment";
import DatePicker from 'react-native-datepicker';
import DeviceInfo from 'react-native-device-info';

const deviceLocale = DeviceInfo.getDeviceLocale();

class DateInput extends React.Component {

    static propTypes = {
        publishing_date: PropTypes.any,
        onChange: PropTypes.func.isRequired
    };


    constructor(props) {
        super(props);
    }

    render() {
        const selectedStyle = this._isSelected() ? Style.selectedWrapper : null;
        return <Button iconRight transparent bordered style={[Style.wrapper, selectedStyle]} onPress={this.props.onPress}>

            {this._renderIcon()}
            {this._renderTime()}
        </Button>
    }

    _renderIcon(){
        const iconSize = this._isSelected() ? 30 : 45;
        return <View style={Style.iconWrapper}>
            <MaterialIcons name='access-time' size={iconSize} style={Style.channelIcon} color={Colors.textGray}/>
        </View>
    }

    _renderTime(){
        const { publishing_date } = this.props;
        const date = moment(publishing_date).isValid() ? moment(publishing_date) : moment(publishing_date, 'DD MMM YYYY HH:mm');

            return  <DatePicker
                    date={date}
                    locale={deviceLocale ? deviceLocale : "en"}
                    mode="datetime"
                    format="DD MMM YYYY HH:mm"
                    placeholder="Click choose publishing time"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    style={Style.nameWrapper}
                    customStyles={{
                        dateIcon: {
                            display: 'none'
                        },
                        dateInput: { alignItems: 'flex-start', borderWidth: 0 },
                        placeholderText: { color: '#000000' }
                    }}
                    onDateChange={(date) => {
                        const parsedDate = moment(date, 'DD MMM YYYY HH:mm');
                        this.props.onChange(parsedDate);
                    }}
                />;
    }

    _isSelected(){
        const { publishing_date } = this.props;
        if(publishing_date) return true;

        return false;
    }

}


export default DateInput;