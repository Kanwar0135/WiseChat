import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#121212",
  },
  container: {
    padding: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  gridItem: {
    width: "48%",
    height: 60,
    backgroundColor: "#1f1f1f",
    borderRadius: 6,
    justifyContent: "center",
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  gridText: {
    color: "#ffffff",
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 12,
  },
  playlistCard: {
    width: 140,
    marginRight: 16,
    marginBottom: 24,
  },
  cover: {
    width: 140,
    height: 140,
    backgroundColor: "#333333",
    borderRadius: 8,
    marginBottom: 8,
  },
  playlistText: {
    color: "#ffffff",
    fontSize: 14,
  },
  alertButton: {
    margin: 16,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#1DB954",
  },
  alertButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
