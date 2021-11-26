import { useState } from 'react';

const useSelect = (parentListener) => {

    const [selectedItem, setSelectedItem] = useState('0');

    const selectItemHandler = (e) => {
        parentListener(e.target.id);
        setSelectedItem(e.target.id);
    }

    const isSelected = (itemId) => selectedItem === itemId ? 'true' : 'false';

    return {
        isSelected,
        selectItemHandler
    }
}

export default useSelect;