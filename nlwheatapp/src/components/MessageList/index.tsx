import React from "react"
import { ScrollView } from "react-native"
import { Message } from "../Message"
import { styles } from "./styles"

export function MessageList() {
  const message = {
    id: "1",
    text: "Mensagem de test",
    user: {
      name: "Bruno",
      avatar_url: "https://github.com/brunobarbosa96.png",
    },
  }
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never">
      <Message data={message} />
    </ScrollView>
  )
}
