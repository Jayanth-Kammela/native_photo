import React, { useState } from 'react'
import { SearchBar } from "@rneui/base";

const Search = () => {
    const [value, setValue] = useState("");
    console.log(value);
    return (
        <SearchBar
            platform="android"
            onChange={(e) => setValue(e.target.value)}
            containerStyle={{ borderRadius: 10, backgroundColor: '#DDE6ED', height: 50, justifyContent: 'center', }}
            inputContainerStyle={{}}
            inputStyle={{}}
            leftIconContainerStyle={{}}
            rightIconContainerStyle={{}}
            loadingProps={{}}
            onChangeText={newVal => setValue(newVal)}
            onClearText={() => console.log(onClearText())}
            placeholder="Search here..."
            round
            showCancel
            cancelButtonTitle="Cancel"
            cancelButtonProps={{}}
            onCancel={() => console.log('onCancel()')}
            value={value}
        />
    );
}

export default Search






