import React from 'react';
import Select from "react-select";

const MySelect = ({data, placeholder}) => {
    const selectStyles = {
        control: (styles, state) =>
            ({
                ...styles, backgroundColor: 'white',
                '&:hover': {
                    borderColor: 'gray'
                },
                borderColor: state.isFocused ? 'gray' : '#E7E5E4',
                boxShadow: 'none',
                cursor: 'pointer',
                height: '45px',
                borderRadius: '7px'
            }),
        dropdownIndicator: (styles) => ({
            ...styles, display: 'none'
        }),
        indicatorSeparator: (styles) => ({
            ...styles, display: 'none'
        }),
        menuList: (styles) => ({
            ...styles, height: 'auto',
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
            padding: '0',
        }),
        menu : (styles) => ({
            ...styles, borderRadius: '7px',
            border : '1px solid gray'
        }),
        option: (styles, {data, isFocused, isDisabled, isSelected}) => {

            return {...styles, height: '45px',
                backgroundColor: isFocused ? '#F9F9F9' : 'white',
                color: isSelected || isFocused ? 'black' : '#42403F',
                borderRadius: '7px 7px',
                cursor: 'pointer'

            }
        },
        placeholder: (styles) => {
            return {...styles,
              color:'#42403F',
                lineHeight: '27px',
                fontSize: '18px',
                paddingLeft: '7px',
                fontFamily: 'PT Root UI',
                fontStyle: 'normal',
                fontWeight: '400'
            }
        },
        singleValue: (styles) => {
            return {...styles,
                color:'#42403F',
                lineHeight: '27px',
                fontSize: '18px',
                paddingLeft: '7px',
                fontFamily: 'PT Root UI',
                fontStyle: 'normal',
                fontWeight: '400'
            }
        }


    }


    return (
        <Select classNamePrefix='custom-select' isSearchable={false} options={data} placeholder={placeholder}
                styles={selectStyles}/>
    );
};

export default MySelect;