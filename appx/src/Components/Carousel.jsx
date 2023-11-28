import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, useWindowDimensions } from 'react-native';

const Carousel = () => {
  const images = [
    { Id: 1, Image: 'https://images.unsplash.com/photo-1477506252414-b2954dbdacf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZlZ2V0YWJsZSUyMGJhbm5lcndlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { Id: 2, Image: 'https://images.unsplash.com/photo-1465362261089-a2ab269caa45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZlZ2V0YWJsZSUyMGJhbm5lcndlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
    { Id: 3, Image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhYmxlJTIwYmFubmVyd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' },
  ];

  const [scroll, setScroll] = useState(0);
  const windowWidth = useWindowDimensions().width;

  useEffect(() => {
    const timer = setInterval(() => {
      setScroll(scroll ? 0 : scroll + 1);
    }, 2000);

    return () => clearInterval(timer);
  }, [scroll]);

  useEffect(() => {
    setScroll(0);
  }, [windowWidth]);

  return (
    <View style={styles.container}>
      {images.map((imageUrl, index) => (
        <Image
          key={imageUrl.Id}
          source={{ uri: imageUrl.Image }}
          style={[
            styles.image,
            { opacity: index === scroll ? 1 : 0 },
            { width: windowWidth - 28 },
          ]}
        />
      ))}

      <View style={styles.dotsContainer}>
        {images.map((_, data) => (
          <View
            key={data}
            style={[
              styles.dot,
              { backgroundColor: data === scroll ? 'rgba(37,175,57,0.93)' : '#ccc', width: data === scroll ? 24 : 6 },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 140,
    position: 'absolute',
    resizeMode: 'cover',
    borderRadius: 8
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dot: {
    top: 46,
    width: 6,
    height: 6,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default Carousel;
