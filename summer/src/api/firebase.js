import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get } from 'firebase/database';
import {v4 as uuid} from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider).catch(console.error)
}

export function logout() {
  signOut(auth).catch(console.error);
}

// 사용자 상태 변경
export function onUserStateChange(callback) {
  // 변경될 때마다 callback 함수 호출
  onAuthStateChanged(auth, async(user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  })
}

async function adminUser(user){
  // 권한을 가지고 있는지 확인
  // 3. {...user, isAdmin: true/false}
  return get(ref(database, 'admins')).then((snapshot) => {
    if(snapshot.exists()){
      const admins = snapshot.val();
      const isAdmin = admins.includes(user.uid);
      return {...user, isAdmin}
    }
    return user;
  })
}

// 새로운 제품을 추가하기
export async function addNewProduct(product, image) {
  const id = uuid();
  // 어디에 무엇을 저장할 것인지 데이터를 저장한다.
  return set(ref(database, `products/${id}`), {
    // 정보를 등록하기
    ...product, 
    id, 
    price: parseInt(product.price),
    image, 
    options: product.options.split(','),
  })
}

// 제품 가져오기 
export async function getProducts() {
  return get(ref(database, 'products')).then(snapshot => {
    if(snapshot.exists()) {
      const products = Object.values(snapshot.val()); // Object형태로 value들만 가지고 오기
      return products.map(product => ({
        ...product,
        price: typeof product.price === "object" ? Number(Object.values(product.price)[0]) : Number(product.price)
      }))
      .filter(product => Array.isArray(product.options) && product.options.includes('clothes'))
    }
    return [];
  })
}

// food 가져오기
export async function getFeeds() {
  return get(ref(database, 'products')).then(snapshot => {
    if(snapshot.exists()){
      const products = Object.values(snapshot.val()); // Object형태로 value들을 가지고 오기
      return products.map(product => ({
        ...product,
        price: typeof product.price === "object" ? Number(Object.values(product.price)[0]) : Number(product.price)
      }))
    }
    return [];
  })
}