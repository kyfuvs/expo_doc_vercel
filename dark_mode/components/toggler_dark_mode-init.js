// Project/dark_mode/components/Toggler_dark_mode.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hook/useTheme';

export default function Toggler_dark_mode() {
  const { colors, toggleTheme } = useTheme();

  return (
    <TouchableOpacity onPress={toggleTheme} style={[styles.button, { backgroundColor: colors.primary }]}>
      <Text style={[styles.buttonText, { color: colors.background }]}>🌓</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
