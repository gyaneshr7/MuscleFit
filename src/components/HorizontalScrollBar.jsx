import React from 'react'
import { Box } from '@mui/material'
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
    return (

        <div style={{ width: "100%", overflowX: "scroll" }}>
            <ul className='flex flex-row gap-4' style={{ display: "flex", flexDirection: "row" }}>
                {(data).map((item) => (
                    <Box
                        key={item.id || item}
                        itemID={item.id || item}
                        title={item.id || item}
                        m={"0 40px"}
                    >
                        {isBodyParts ? <BodyPart item={item}
                            bodyPart={bodyPart}
                            setBodyPart={setBodyPart} />
                        : <ExerciseCard exercise={item}/>}
                    </Box>
                )
                )}

            </ul>
        </div>
    )
}

export default HorizontalScrollBar

