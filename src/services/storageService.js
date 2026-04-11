import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// Keys for AsyncStorage
const STORAGE_KEYS = {
  USER: 'user',
  CART: 'cart',
  ORDERS: 'orders',
};

// Web storage wrapper
const webStorage = {
  getItem: async (key) => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.error('Error getting item from localStorage:', e);
      return null;
    }
  },
  setItem: async (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.error('Error setting item in localStorage:', e);
    }
  },
  removeItem: async (key) => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing item from localStorage:', e);
    }
  },
};

// Choose storage based on platform
const storage = Platform.OS === 'web' ? webStorage : AsyncStorage;

// User Authentication
export const saveUser = async (user) => {
  try {
    const jsonValue = JSON.stringify(user);
    await storage.setItem(STORAGE_KEYS.USER, jsonValue);
  } catch (e) {
    console.error('Error saving user:', e);
    throw e;
  }
};

export const getUser = async () => {
  try {
    const jsonValue = await storage.getItem(STORAGE_KEYS.USER);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error getting user:', e);
    throw e;
  }
};



// Cart Management
export const saveCart = async (cart) => {
  try {
    const jsonValue = JSON.stringify(cart);
    await storage.setItem(STORAGE_KEYS.CART, jsonValue);
  } catch (e) {
    console.error('Error saving cart:', e);
    throw e;
  }
};

export const getCart = async () => {
  try {
    const jsonValue = await storage.getItem(STORAGE_KEYS.CART);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error getting cart:', e);
    throw e;
  }
};

export const removeCart = async () => {
  try {
    await storage.removeItem(STORAGE_KEYS.CART);
  } catch (e) {
    console.error('Error removing cart:', e);
    throw e;
  }
};

// Orders Management
export const saveOrders = async (orders) => {
  try {
    const jsonValue = JSON.stringify(orders);
    await storage.setItem(STORAGE_KEYS.ORDERS, jsonValue);
  } catch (e) {
    console.error('Error saving orders:', e);
    throw e;
  }
};

export const getOrders = async () => {
  try {
    const jsonValue = await storage.getItem(STORAGE_KEYS.ORDERS);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error getting orders:', e);
    throw e;
  }
};

export const addOrder = async (order) => {
  try {
    const orders = await getOrders();
    orders.push(order);
    await saveOrders(orders);
  } catch (e) {
    console.error('Error adding order:', e);
    throw e;
  }
};

export const removeOrders = async () => {
  try {
    await storage.removeItem(STORAGE_KEYS.ORDERS);
  } catch (e) {
    console.error('Error removing orders:', e);
    throw e;
  }
};