
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase.config';

export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        const querySnapshot = await getDocs(collection(db, "books"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
        res.status(200).json(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data from Firebase' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }

