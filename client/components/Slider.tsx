'use client';

import * as RadixSlider from '@radix-ui/react-slider';

interface SliderProps {
    value?: number;
    onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value = 1, onChange }) => {
    


    return (
        <div>Slider</div>
    )
}

export default Slider