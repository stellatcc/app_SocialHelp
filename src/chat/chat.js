import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import PubNub from 'pubnub-react';

const pubnub = new PubNub({
  publishKey: 'pub-c-2dcc6408-06de-48d5-a04b-b4aa0bda17cc',
  subscribeKey: 'sub-c-32150953-a950-40d8-9cf7-311a5df8ce38',
});

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const channelName = 'SocialHelpChat';

  useEffect(() => {
    pubnub.addListener({
      message: (msg) => {
        setMessages([...messages, msg.message]);
      },
    });

    pubnub.subscribe({ channels: [channelName] });

    return () => {
      pubnub.unsubscribeAll();
    };
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() !== '') {
      pubnub.publish({
        channel: channelName,
        message: { text: input },
      });

      setInput('');
    }
  };

  return (
    <View>
      <Text>Chat Room: {channelName}</Text>
      <View>
        {messages.map((msg, index) => (
          <Text key={index}>{msg.text}</Text>
        ))}
      </View>
      <TextInput
        value={input}
        onChangeText={(text) => setInput(text)}
        placeholder="Type your message..."
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export {Chat};
