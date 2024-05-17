import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { AppRoutes } from './app.routes';
import AuthRoutes from './auth.routes';
import { useAuth } from '../contexts/auth';
import { ChildProps } from '../screens/login/Warning/Warning';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();
  const [accepted, setAccepted] = useState<boolean>(false);

  const childProps: ChildProps = {
    signed: signed,
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#777" />
      </View>
    );
  }

  return signed && accepted ? <AppRoutes /> : <AuthRoutes params={childProps} accepted={setAccepted} />;
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Routes;
