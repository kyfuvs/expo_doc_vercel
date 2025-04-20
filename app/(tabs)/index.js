import { View, StyleSheet } from 'react-native';
import ButtonViewer from '../../components/buttonViewer';
import ImageViewer from '@/components/ImageViewer';
import { useTheme } from '@/dark_mode/hook/useTheme';

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const { colors } = useTheme();  // 🌓 grab current theme colors

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <ButtonViewer label="Choose a photo" theme="primary" />
        <ButtonViewer label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
