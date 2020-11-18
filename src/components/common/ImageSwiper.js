import React, { useState } from "react";
import { Layout, Text } from "@ui-kitten/components";
import {
  StyleSheet,
  ScrollView,
  Image,
  useWindowDimensions,
} from "react-native";

const ImageSwiper = ({ images }) => {
  const window = useWindowDimensions();
  const [isImgActive, setImgActive] = useState(0);

  const handleImageScroll = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== isImgActive) setImgActive(slide);
  };

  return (
    <Layout
      style={{
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
      }}
    >
      <ScrollView
        style={{
          width: window.width,
          height: window.width * 0.6,
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleImageScroll}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            style={{
              width: window.width,
              height: "100%",
              resizeMode: "cover",
            }}
            source={image}
          />
        ))}
      </ScrollView>
      <Layout
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          alignSelf: "center",
          backgroundColor: "transparent",
        }}
      >
        {images.map((item, index) => (
          <Text
            key={index}
            style={[
              { fontSize: window.width / 30, margin: 3 },
              index == isImgActive ? { color: "#000" } : { color: "#ff0000" },
            ]}
          >
            &#11044;
          </Text>
        ))}
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  listContaier: {
    //  width:window.wi
  },
});

export default ImageSwiper;
