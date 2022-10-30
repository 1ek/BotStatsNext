import Select from 'react-select'
import s from './BotFilter.module.scss'
import {servers, sort} from '../../data/data'

import { useSelector, useDispatch } from 'react-redux';
import {selectSort, selectServer, searchValueChange} from '../../slices/filterSlice'

import { useEffect, useState } from "react"


const BotFilter = () => {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const customStyles = {
        control: (base, state) => ({
          ...base,
          width: 190,
          height: 30,
          color: 'black',
          minHeight: 30,
          borderRadius: 20,
          border: 'none',
          outline: 'none',
          boxShadow: state.isFocused ? '0 0 0 2px #777777' : null
        }), 
        input: provided => ({
            ...provided,
            margin: '0px',
            padding: 0,
            color: 'black'
        }),
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? '#fff' : '#000',
          }),
        valueContainer: provided => ({
        ...provided,
        height: 30,
        fontSize: 22,
        padding: '0 8px',
        paddingTop: 2
        }),
        indicatorSeparator: state => ({
            display: 'none',
        }),
          indicatorsContainer: (provided, state) => ({
            ...provided,
            height: 30,
        }),
        singleValue: provided => ({
            ...provided,
            color: 'black'
        })
            
        
    };

    const dispatch = useDispatch()

    const selectedServer = useSelector(state => state.filters.selectedServer)

    const selectedSort = useSelector(state => state.filters.selectedSort)

    const handleServerSelect = (selectedOption) => {
        dispatch(selectServer(selectedOption))
    }

    const handleSortSelect = (selectedOption) => {
        dispatch(selectSort(selectedOption))
    }

    const handleInput = event => {
        dispatch(searchValueChange(event.target.value.toLowerCase()))
    }

    if (!mounted) return null

    return (
        <div className={s.app__filter}>
            <input className={s.search} style={{color: '#000'}} type="text" onChange={handleInput}/>
            
                <Select 
                    defaultValue={selectedServer}
                    styles={customStyles}
                    onChange={handleServerSelect}
                    options={servers}
                    classNamePrefix="server"/>
                <Select 
                    defaultValue={selectedSort}
                    onChange={handleSortSelect}
                    options={sort} 
                    styles={customStyles}
                    isSearchable={false}
                    classNamePrefix="server"
                    />
            
        </div>
        )
}

export default BotFilter