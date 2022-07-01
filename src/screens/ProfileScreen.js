import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import ImagePick from "../components/ImagePick"

const ProfileScreen = () => {  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImagePick/>
      </View>
    );
};

export default ProfileScreen;
