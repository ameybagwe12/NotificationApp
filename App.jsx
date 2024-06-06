import {View, Button} from 'react-native';
import React from 'react';
import notifee, {AndroidStyle} from '@notifee/react-native';

export default function App() {
  async function onPressNotification() {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    notifee.displayNotification({
      title: 'Image uploaded',
      body: 'Your image has been successfully uploaded',
      android: {
        channelId,
        style: {
          type: AndroidStyle.BIGPICTURE,
          picture:
            'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80rr',
        },
      },
    });
  }

  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        onPress={onPressNotification}
        title="Send"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
