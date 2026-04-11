import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PhoneStatusBar from '../components/PhoneStatusBar';
import { nectarTheme } from '../data/nectarData';
import { scale } from '../utils/layout';

export default function OrdersScreen({ orders, onBack }) {
  return (
    <View style={styles.screen}>
      <PhoneStatusBar />

      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={onBack}>
          <Ionicons name="chevron-back" size={scale(24)} color={nectarTheme.text} />
        </Pressable>
        <Text style={styles.title}>My Orders</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {orders.length === 0 ? (
          <Text style={styles.emptyText}>You have no orders yet.</Text>
        ) : (
          orders.map((order) => (
            <View key={order.id} style={styles.orderCard}>
              <View style={styles.orderHeader}>
                <Text style={styles.orderDate}>{new Date(order.date).toLocaleString()}</Text>
                <Text style={styles.orderTotal}>${order.total.toFixed(2)}</Text>
              </View>
              <Text style={styles.orderLabel}>Products</Text>
              {order.items.map((item) => (
                <View key={item.id} style={styles.orderProductRow}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productQuantity}>x{item.quantity}</Text>
                </View>
              ))}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(24),
    paddingVertical: scale(18),
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  backButton: {
    marginRight: scale(12),
    padding: scale(8),
  },
  title: {
    fontSize: scale(24),
    fontWeight: '700',
    color: nectarTheme.text,
  },
  content: {
    padding: scale(24),
    paddingBottom: scale(120),
  },
  emptyText: {
    marginTop: scale(40),
    textAlign: 'center',
    color: nectarTheme.textSecondary,
    fontSize: scale(16),
  },
  orderCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: scale(16),
    padding: scale(18),
    marginBottom: scale(16),
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scale(12),
  },
  orderDate: {
    fontSize: scale(14),
    color: nectarTheme.textSecondary,
  },
  orderTotal: {
    fontSize: scale(18),
    fontWeight: '700',
    color: nectarTheme.primary,
  },
  orderLabel: {
    marginBottom: scale(8),
    fontSize: scale(16),
    fontWeight: '600',
    color: nectarTheme.text,
  },
  orderProductRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scale(6),
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  productName: {
    fontSize: scale(16),
    color: nectarTheme.text,
  },
  productQuantity: {
    fontSize: scale(16),
    color: nectarTheme.textSecondary,
  },
});