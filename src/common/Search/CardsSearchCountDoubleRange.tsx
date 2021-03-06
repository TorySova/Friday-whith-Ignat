import {minMaxCountAC} from "../../redux/searchReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {Range, getTrackBackground} from 'react-range';

const CardsSearchCountDoubleRange: React.FC = () => {
    const minValue = useSelector<AppStoreType, number>(state => state.search.minCount);
    const maxValue = useSelector<AppStoreType, number>(state => state.search.maxCount);
    const values: Array<number> = [minValue, maxValue]

    const dispatch = useDispatch();
    const setNewCount = (newCount: number[]) => {
        dispatch(minMaxCountAC(newCount[0], newCount[1]));
    }

    return (
        <Range
            values={values}
            step={1}
            min={0}
            max={13}
            onChange={values => setNewCount(values)}
            renderTrack={({props, children}) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                        ...props.style,
                        height: '36px',
                        display: 'flex',
                        width: '50%',
                        margin: '10px',
                    }}
                >
                    <div
                        ref={props.ref}
                        style={{
                            height: '5px',
                            width: '100%',
                            borderRadius: '4px',
                            background: getTrackBackground({
                                values: values,
                                colors: ['#ccc', '#548BF4', '#ccc'],
                                min: 0,
                                max: 13
                            }),
                            alignSelf: 'center'
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({index, props, isDragged}) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '12px',
                        width: '12px',
                        borderRadius: '1px',
                        backgroundColor: '#FFF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0px 2px 6px #AAA',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '-28px',
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                            padding: '4px',
                            borderRadius: '4px',
                            backgroundColor: '#548BF4'
                        }}
                    >
                        {values[index].toFixed(0)}
                    </div>
                    <div
                        style={{
                            height: '16px',
                            width: '5px',
                            backgroundColor: isDragged ? '#548BF4' : '#CCC'
                        }}
                    />
                </div>
            )}
        />
    );
};

export default CardsSearchCountDoubleRange;